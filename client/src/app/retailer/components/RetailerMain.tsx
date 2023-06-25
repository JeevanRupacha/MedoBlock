"use client";

import MedicineCard from "@/app/manufacturer/components/MedicineCard";
import BlockchainData from "@/shared/models/BlockchainData.model";
import { IMedicine } from "@/shared/models/IMedicine.model";
import ITransportRequest from "@/shared/models/TransportRequest.model";
import IUser from "@/shared/models/User.model";
import UserContextData from "@/shared/models/UserContextData.model";
import DialogModal from "@/shared/ui/components/DialogModal";
import { Empty } from "@/shared/ui/components/Empty";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { timeStampToString } from "@/shared/utils/DateConverter";
import { objectToChainString } from "@/shared/utils/objectToChainString";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { UsersContext } from "@/store/context/UsersContext";
import React, { useContext, useEffect, useState } from "react";

const RetailerMain = () => {
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
        if(isTransCompleted && result.toUserId == currentUser?.id){
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

  const sellMedicine = async (toUser: IUser) => {
      setLoading(true)

      //todo user is not updated to going to buy 
      if(medicine == undefined) return
      try{
          if(getSupplyChainContract != undefined){
              const supplyChainContract = await getSupplyChainContract(medicine.medSupplyChainAddr)

              const cleanMed = {
                id: medicine.id,
                name: medicine.name,
                description: medicine.description,
                manuId: medicine.manuId,
                manuDate: medicine.manuDate,
                expDate: medicine.expDate,
                fdaStatus: medicine.fdaStatus,
                fdaAdminId: medicine.fdaAdminId,
                price: medicine.price,
                count: medicine.count,
                medSupplyChainAddr: medicine.medSupplyChainAddr
              } as IMedicine

              const medicineStr = objectToChainString(cleanMed)
              console.log("MedStr", medicineStr)
              await supplyChainContract?.addSupplyChain("sellMedicine", medicineStr) 
          }
          setShowDialog(false)
      }catch(error){
          console.log(error)    
          setLoading(false)
          setShowDialog(false)
      }
      setLoading(false)
  }

  const dialogContent = <>
  <div className='w-96 bg-onPrimary-light/70 rounded-xl p-4'>
    <div>
        <p className="text-onPrimary-dark text-xl pb-8">Sell Medicine</p>
        {users.map( user => {
            return <div>
                <div onClick={() => sellMedicine(user)} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <img className="w-8 rounded-full" src={user.imageUrl} alt="img" />
                    <p className="pl-2 text-onSecondary-dark">{user.name}</p>
                </div>
            </div>
        })}
    </div>
  </div>
  </>

  useEffect(() => {
      getMedicines()
  }, [medicinesContract])
  
  return(
      <div className="text-onPrimary-dark/60">
          <div className="mb-8 mt-20 text-2xl"> Medicines </div>

          <div className="grid grid-cols-3 gap-10">
              { medicines?.map( (medicine) => {

                  if(!medicineIds.includes(medicine.id)) return 

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
      </div>
  )
}

export default RetailerMain;