import BlockchainData from "@/shared/models/BlockchainData.model";
import { IMedicine } from "@/shared/models/IMedicine.model";
import Loader from "@/shared/ui/components/Loader";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { useContext, useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import { UsersContext } from "@/store/context/UsersContext";
import UserContextData from "@/shared/models/UserContextData.model";
import { timeStampToString } from "@/shared/utils/DateConverter";
import DialogModal from "@/shared/ui/components/DialogModal";
import IUser from "@/shared/models/User.model";
import { Empty } from "@/shared/ui/components/Empty";
import { objectToChainString } from "@/shared/utils/objectToChainString";

const ApplyFda = () => {
    const [isLoading, setLoading] = useState(false)
    const [medicines, setMedicines] = useState<IMedicine[]>([])
    const [showDialog, setShowDialog] = useState(false)
    const [selectedMedicine, setMedicine] = useState<IMedicine>()
    const [selectedUser, selectUser] = useState<IUser>()

    const { users } = useContext(UsersContext) as UserContextData
    const userString = localStorage.getItem('user')
    const currentUser = JSON.parse(userString?userString:'')

    const { 
        getSupplyChainContract,
        medicinesContract
    } = useContext(BlockchainContext) as BlockchainData;

    const getMedicines = async () => {
        setLoading(true)
        const keys = await medicinesContract?.getMedicinesKeys()
        

        let resultMedicines = []
        for(const key of keys){
             const result = await medicinesContract?.getMedicine(key)
             console.log("Result ", result)
             resultMedicines.push(result)
        }
            
        const medResult = resultMedicines.reverse()
        setMedicines(medResult.filter((med) => (med.fdaStatus == 'NONE' || med.fdaStatus == 'REJECTED') && currentUser.id == med.manuId)) 
        //setMedicines(medicines.reverse())
        setLoading(false)
    }

    const sendFdaReq = async () => {
        setShowDialog(false)
        setLoading(true);

        const cleanMed = {
            id: selectedMedicine?.id,
            name: selectedMedicine?.name,
            description: selectedMedicine?.description,
            manuId: selectedMedicine?.manuId,
            manuDate: selectedMedicine?.manuDate,
            expDate: selectedMedicine?.expDate,
            fdaStatus: 'REQUESTED',
            fdaAdminId: selectedUser?.id,
            price: selectedMedicine?.price,
            count: selectedMedicine?.count,
            medSupplyChainAddr: selectedMedicine?.medSupplyChainAddr
          } as IMedicine

          const medicineStr = objectToChainString(cleanMed)

        //console.log("MedSter", medicineStr)
        if(getSupplyChainContract == undefined) return alert("No Supply Chain Contract")
        if(selectedMedicine == undefined) return alert(" No medicine selected")
        const supplyChainContract = await getSupplyChainContract(selectedMedicine?.medSupplyChainAddr)

        await supplyChainContract?.addSupplyChain('fdaReq', medicineStr)
        await medicinesContract?.updateMedicine(
            selectedMedicine.id, selectedMedicine.name, selectedMedicine.description, selectedMedicine.manuId,selectedMedicine.manuDate, selectedMedicine.expDate, 'REQUESTED', selectedUser?.id, selectedMedicine.price, selectedMedicine.count, selectedMedicine.medSupplyChainAddr
        )

        setLoading(false);
    }
    

    const dialogContent = <>
     <div className='w-96 bg-onPrimary-light rounded-xl p-4'>
            <h1 className='text-onPrimary-dark pb-8 text-lg pt-4'> Confirm to Send FDA Request </h1>

            {users.map( user => {
                return <div>
                    <div onClick={() => selectUser(user)} className={`${selectedUser?.id == user.id?'opacity-40' :''} flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50`}>
                        <img className="w-8 rounded-full" src={user.imageUrl} alt="img" />
                        <p className="pl-2 text-onSecondary-dark">{user.name}</p>
                    </div>
                </div>
            })}
           
            <div className='flex pt-4 gap-4'>
                <div onClick={() => setShowDialog(false)} className='bg-red-400 px-4 py-2 rounded-xl w-full cursor-pointer hover:bg-red-400/50'>Cancel</div>
                <div onClick={() => sendFdaReq ()} className='bg-button px-4 py-2 rounded-xl w-full cursor-pointer hover:bg-button/50'>Request</div>
            </div>
        </div>
    </>

    useEffect(() => {
        getMedicines()
    }, [medicinesContract])
    
    return(
        <>
            <div className="mb-8"> Apply FDA </div>

            <div className="grid grid-cols-2 gap-10">
                { medicines?.map( (medicine) => {

                    // if(medicine.fdaStatus == 'REQUESTED' || currentUser.id != medicine.manuId) return 

                    let manuDate = ''
                                    
                    try{
                        const millis = parseInt(medicine.manuDate.toString()) * 1000
                        if(Object.is(millis, NaN)){
                            manuDate = ''
                        }else{
                            manuDate = timeStampToString(millis)
                        }
                    }catch(error){
                        console.log(error)
                    }

        
                    return <MedicineCard
                        name= { medicine.name }
                        price= {parseInt(medicine.price)}
                        userId={ medicine.manuId }
                        count = { medicine.count.toString() }
                        address={ medicine.medSupplyChainAddr}
                        description={ medicine.description}
                        creatDate={ manuDate}
                        expDate={ medicine.expDate }
                        fdaStatus={ medicine.fdaStatus }
                        onClick={() => {
                            setMedicine(medicine) 
                            setShowDialog(true)
                        }}
                    />
                })}
            </div>

            <DialogModal open = {showDialog} toggle={() => setShowDialog(!showDialog)} content = {dialogContent}/>

            {medicines.length == 0 && !isLoading && <Empty/>}    

            { isLoading && 
                <div className="w-full h-full flex justify-center items-center"> <LoaderSmall/> </div>
            }
        </>
    )
}

export default ApplyFda;