import BlockchainData from "@/shared/models/BlockchainData.model"
import { IMedicine } from "@/shared/models/IMedicine.model"
import ITransportRequest from "@/shared/models/TransportRequest.model"
import IUser from "@/shared/models/User.model"
import UserContextData from "@/shared/models/UserContextData.model"
import { trimAddressLong } from "@/shared/utils/trimAddressLong"
import { BlockchainContext } from "@/store/context/BlockchainContext"
import { UsersContext } from "@/store/context/UsersContext"
import { useContext, useEffect, useState } from "react"

const ManuTransctions = () => {
    
    const [isLoading, setLoading] = useState(false)
    const [medicines, setMedicines] = useState<IMedicine[]>([])
    const [medicine, setMedicine] = useState<IMedicine>()
    const [showDialog, setShowDialog] = useState(false)
    const [selectedTransporter, setTransporter] = useState<IUser>()
    const [medicineIds, setMedicineIds] = useState<string[]>([])

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
        setMedicines(medResult) 
        setLoading(false)
    }

    const filterMedicines = async () => {
        setLoading(true)
        //get all transports 
        let filteredMedicineIds: string[] = []
        const transportKeys = await transportRequestContract?.getTransportRequestKeys()
        for(const key of transportKeys){
        const result = await transportRequestContract?.getTransportRequest(key) as ITransportRequest

        //transporterId mixed with 'transporterId,rawMatId,medicineId,isMedicine'
        const miniData = result.transporterId.split(',')
        let medicineId = ''
        if(miniData.length > 1){
            medicineId = miniData[2] 
            const isTransCompleted = result.status == 'COMPLETED'
            if(isTransCompleted && result.fromUserId == currentUser?.id){
            filteredMedicineIds.push(medicineId)
            }
        }
    }

    setMedicineIds(filteredMedicineIds)
    setLoading(false)
  }

  useEffect(() => {
    filterMedicines()
  }, [medicines])

  useEffect(() => {
    getMedicines()
  },[medicinesContract])

    return(
        <>
            <div className="flex justify-stretch items-center text-base font-bold mb-8">
                <div className=" w-full flex justify-center">{"Txn"}</div>
                <div className=" w-full flex justify-center">ID</div>
                <div className=" w-full flex justify-center">Name</div>
                <div className="w-full flex justify-center">Count</div>
            </div>

            { medicines.map((med) => {
                if(!medicineIds.includes(med.id)) return 
                return  <div className="flex justify-stretch items-center text-base text-orange-300 my-2 p-2 bg-blue/30 rounded-lg">
                    <div className="w-full flex justify-center">{trimAddressLong(med.medSupplyChainAddr)}</div>
                    <div className="w-full flex justify-center">{trimAddressLong(med.id)}</div>
                    <div className="w-full flex justify-center">{med.name}</div>
                    <div className="w-full flex justify-center">{med.count.toString()}</div>
                </div>
            })}
        </>
    )
}

export default ManuTransctions;