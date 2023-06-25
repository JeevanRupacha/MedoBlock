import MedicineCard from "@/app/manufacturer/components/MedicineCard"
import BlockchainData from "@/shared/models/BlockchainData.model"
import { IMedicine } from "@/shared/models/IMedicine.model"
import { Empty } from "@/shared/ui/components/Empty"
import LoaderSmall from "@/shared/ui/components/LoaderSmall"
import { timeStampToString } from "@/shared/utils/DateConverter"
import { objectToChainString } from "@/shared/utils/objectToChainString"
import { BlockchainContext } from "@/store/context/BlockchainContext"
import { useContext, useEffect, useState } from "react"

const FdaRequests = () => {
    const [isLoading, setLoading] = useState(false)
    const [medicines, setMedicines] = useState<IMedicine[]>([])

    const userString = localStorage.getItem('user')
    const currentUser = JSON.parse(userString?userString:'')

    const { 
        medicinesContract,
        getSupplyChainContract
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
        setMedicines(medResult.filter((med) => med.fdaStatus == 'REQUESTED' && currentUser.id == med.fdaAdminId )) 
        setLoading(false)
    }

    const updateStatus = async (status: string, medicine: IMedicine) => {
        setLoading(true);

        //const medicineStr = JSON.stringify({...medicine, fdaStatus: status}).replace(/"|"|{|}/g, '');


        const cleanMed = {
            id: medicine?.id,
            name: medicine?.name,
            description: medicine?.description,
            manuId: medicine?.manuId,
            manuDate: medicine?.manuDate,
            expDate: medicine?.expDate,
            fdaStatus: status,
            fdaAdminId: medicine?.fdaAdminId,
            price: medicine?.price,
            count: medicine?.count,
            medSupplyChainAddr: medicine?.medSupplyChainAddr
        } as IMedicine

        const medicineStr = objectToChainString(cleanMed)
        if(getSupplyChainContract == undefined) return alert("No Supply Chain Contract")
        if(medicine == undefined) return alert(" No medicine selected")
        const supplyChainContract = await getSupplyChainContract(medicine?.medSupplyChainAddr)

        if(status == 'ACCEPTED'){
            await supplyChainContract?.addSupplyChain('fdaAccept', medicineStr)
        }else{
            await supplyChainContract?.addSupplyChain('fdaReject', medicineStr)
        }
        await medicinesContract?.updateMedicine(
            medicine.id, medicine.name, medicine.description, medicine.manuId,medicine.manuDate, medicine.expDate, status, medicine.fdaAdminId, medicine.price, medicine.count, medicine.medSupplyChainAddr
        )

        setLoading(false);
    }

    useEffect(() => {
        getMedicines()
    }, [medicinesContract])
    
    return(
        <>
            <div className="mb-8"> FDA Requests </div>

            <div className="grid grid-cols-2 gap-10">
                { medicines?.map( (medicine) => {

                    // if(medicine.manuId != currentUser.id || medicine.fdaStatus != 'REQUESTED') return 

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

                    return <>
                        <div className="">
                        <MedicineCard
                            name= { medicine.name }
                            price= {parseInt(medicine.price)}
                            userId={ medicine.manuId }
                            count = { medicine.count.toString() }
                            address={ medicine.medSupplyChainAddr}
                            description={ medicine.description}
                            creatDate={ manuDate}
                            expDate={ medicine.expDate }
                            fdaStatus={ medicine.fdaStatus }
                            onClick={() => {}}
                        />
                        <div className='flex pt-4 gap-4 text-sm w-96'>
                            <div onClick={() => {updateStatus('REJECTED', medicine)}} className='bg-red-400 flex justify-center px-4 py-2 rounded-xl w-full cursor-pointer hover:bg-red-400/50'>Reject</div>
                            <div onClick={() => {updateStatus('ACCEPTED', medicine)}} className='bg-button flex justify-center text-onPrimary-light px-4 py-2 rounded-xl w-full cursor-pointer hover:bg-button/50'>Accept</div>
                        </div>
                        </div>
                    </> 
                })}
            </div>

            {medicines.length == 0 && !isLoading && <Empty/>}    

            { isLoading && 
                <div className="w-full h-full flex justify-center items-center"> <LoaderSmall/> </div>
            }
        </>
    )
}

export default FdaRequests;