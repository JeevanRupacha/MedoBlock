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

const FdaRequests = () => {
    const [isLoading, setLoading] = useState(false)
    const [medicines, setMedicines] = useState<IMedicine[]>([])

    const userString = localStorage.getItem('user')
    const currentUser = JSON.parse(userString?userString:'')

    const { 
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
        setMedicines(medResult.filter((med) => med.fdaStatus == 'REQUESTED' && currentUser.id == med.manuId )) 
        setLoading(false)
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
                    let expDate = ''
                                    
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
                        onClick={() => {}}
                    />
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