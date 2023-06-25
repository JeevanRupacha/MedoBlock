import BlockchainData from "@/shared/models/BlockchainData.model";
import { IMedicine } from "@/shared/models/IMedicine.model";
import Loader from "@/shared/ui/components/Loader";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { useContext, useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import { UsersContext } from "@/store/context/UsersContext";
import UserContextData from "@/shared/models/UserContextData.model";
import { timeStampToStr, timeStampToString } from "@/shared/utils/DateConverter";
import DialogModal from "@/shared/ui/components/DialogModal";
import IUser from "@/shared/models/User.model";
import { Empty } from "@/shared/ui/components/Empty";
import { v4 as uuidv4 } from "uuid";
import { objectToChainString } from "@/shared/utils/objectToChainString";

const Medicines = () => {
    const [isLoading, setLoading] = useState(false)
    const [medicines, setMedicines] = useState<IMedicine[]>([])
    const [medicine, setMedicine] = useState<IMedicine>()
    const [fromLocation, setFromLocation] = useState('La: -19.78892, Lo: -40.46657')
    const [toLocation, setToLocation] = useState('La: 25.13563, Lo: 165.49775')
    const [showDialog, setShowDialog] = useState(false)
    const [selectedTransporter, setTransporter] = useState<IUser>()

    const { users, currentUser } = useContext(UsersContext) as UserContextData
    const { 
        medicinesContract,
        getSupplyChainContract,
        transportRequestContract
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
        setMedicines(medResult.filter((med) => med.manuId == currentUser?.id)) 
        //setMedicines(medicines.reverse())
        setLoading(false)
    }

    const requestTransporter = async (toUser: IUser) => {
        setLoading(true)

        if(medicine == undefined) return
        try{
            //transporterId mixed with 'transporterId,rawMatId,medicineId,isMedicine'
            const medTransporterId = `${selectedTransporter?.id},null,${medicine.id},true`
            console.log("TTId", medTransporterId)
            const transport = {
                id: uuidv4(), 
                initDate: Date.now().toString(),
                completedDate: 'Not Yet', 
                transporterId: medTransporterId, 
                fromUserId: currentUser?.id, 
                toUserId: toUser.id, 
                status: 'REQUESTED', 
                cost: '0', 
                fromLocation: fromLocation, 
                toLocation: toLocation, 
                medSupplyChainAddr: medicine.medSupplyChainAddr
            }
    
            await transportRequestContract?.addRequest(
                transport.id,
                transport.initDate,
                transport.completedDate,
                transport.transporterId,
                transport.fromUserId,
                transport.toUserId,
                transport.status,
                transport.cost,
                transport.fromLocation,
                transport.toLocation,
                transport.medSupplyChainAddr
            )

            if(getSupplyChainContract != undefined){
                const supplyChainContract = await getSupplyChainContract(medicine.medSupplyChainAddr)
                const transportStr = objectToChainString(transport)
                await supplyChainContract?.addSupplyChain("transReqMed", transportStr) 
            }

            setTransporter(undefined)
        }catch(error){
            console.log(error)    
            setLoading(false)
            setTransporter(undefined)
        }
        setLoading(false)
    }

    const dialogContent = <>
    <div className='w-96 bg-onPrimary-light/70 rounded-xl p-4'>
        {selectedTransporter == undefined ?(
            <div>
                <p className="text-onPrimary-dark text-xl pb-8">Select a Transporter</p>
                {users.map( user => {
                    return <div>
                        <div onClick={() => setTransporter(user)} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                            <img className="w-8 rounded-full" src={user.imageUrl} alt="img" />
                            <p className="pl-2 text-onSecondary-dark">{user.name}</p>
                        </div>
                    </div>
                })}
            </div>
        ):(
            <div>
                <p className="text-onPrimary-dark text-xl pb-8">Select a Distributor</p>
                {users.map( user => {
                    return <div>
                        <div onClick={() => requestTransporter(user)} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                            <img className="w-8 rounded-full" src={user.imageUrl} alt="img" />
                            <p className="pl-2 text-onSecondary-dark">{user.name}</p>
                        </div>
                    </div>
                })}
            </div>
        )}
    </div>
    </>

    useEffect(() => {
        getMedicines()
    }, [medicinesContract])
    
    return(
        <>
            <div className="mb-8"> List of Medicine </div>

            <div className="grid grid-cols-2 gap-10">
                { medicines?.map( (medicine) => {


                    let manuDate = timeStampToStr(parseInt(medicine.manuDate.toString()) * 1000)
                    //let expDate = timeStampToStr(parseInt(medicine.expDate.toString()) * 1000)
                                    
                    // try{
                    //     const millis = parseInt(medicine.manuDate.toString()) * 1000
                    //     if(Object.is(millis, NaN)){
                    //         manuDate = ''
                    //     }else{
                    //         manuDate = timeStampToString(millis)
                    //     }
                    // }catch(error){
                    //     console.log(error)
                    // }

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

            {medicines.length == 0 && !isLoading && <Empty/>}    

            <DialogModal open = { showDialog} toggle={() => setShowDialog(!showDialog)} content = {dialogContent}/>    

            { isLoading && 
                <div className="w-full h-full flex justify-center items-center"> <LoaderSmall/> </div>
            }
        </>
    )
}

export default Medicines;