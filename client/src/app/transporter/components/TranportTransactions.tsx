

import TransportRequestItem from "@/app/supplier/components/TransportRequestItem";
import BlockchainData from "@/shared/models/BlockchainData.model";
import ITransportRequest from "@/shared/models/TransportRequest.model";
import IUser from "@/shared/models/User.model";
import DialogModal from "@/shared/ui/components/DialogModal";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { timeStampToString } from "@/shared/utils/DateConverter";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";

const TransportTranscations = () => {

    const strUser = localStorage.getItem('user')
    const user = JSON.parse(strUser?strUser:'') as IUser 
    const [requests, setRequests] = useState<ITransportRequest[] | undefined>()
    const [loading, setLoading] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [request, setRequest] = useState<ITransportRequest>()


    const {
        transportRequestContract,
    } = useContext(BlockchainContext) as BlockchainData;

    const getTransportRequests = async (transportReqContract : ethers.Contract) => {
        try{
            setLoading(true)
            console.log("TransRe Co", transportReqContract)
            const keys: string[] = await transportReqContract?.getTransportRequestKeys();

            let transportRequests: Array<ITransportRequest> = []    

            for (const key of keys) {
                let transRequest = await transportReqContract?.getTransportRequest(key);
                
                if(transRequest == undefined) return 

                transportRequests.push({
                    id: transRequest.id,
                    initDate: transRequest.initDate,
                    completeDate: transRequest.completedDate,
                    transporterId: transRequest.transporterId,
                    fromUserId: transRequest.fromUserId,
                    toUserId: transRequest.toUserId,
                    status: transRequest.status,
                    cost: transRequest.cost,
                    fromLocation: transRequest.fromLocation,
                    toLocation: transRequest.toLocation,
                    medSupplyChainAddr: transRequest.medSupplyChainAddr
                });
              }
            setRequests(transportRequests.reverse());
            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        if(transportRequestContract != undefined){
            getTransportRequests(transportRequestContract)
        }
    }, [transportRequestContract])

    return(
        <>
            <div className="pb-8 flex justify-between">
                <p>Transport Transactions</p>
                <div>
                    <img className="w-8 h-5 mr-4 cursor-pointer" src = {'sort-down.png'} alt = ''></img>
                </div>
            </div>

            {requests?.map( req => {
                if(req.transporterId != user.id) return 
                // if(req.transporterId != user.id && req.status != 'COMPLETED') return 
               
                let initDateStr = ''
                
                try{
                    const millis = parseInt(req.initDate) * 1000
                    if(Object.is(millis, NaN)){
                        initDateStr = ''
                    }else{
                        initDateStr = timeStampToString(millis)
                    }
                }catch(error){
                    console.log(error)
                }
                
                return <TransportRequestItem
                    transAddress = {req.medSupplyChainAddr}
                    status = { req.status }
                    initDate={ initDateStr }
                    completedDate={ req.completeDate}
                    fromLocation={req.fromLocation}
                    toLocation={req.toLocation}
                    cost = {req.cost}
                    fromUserId={ req.fromUserId}
                    toUserId={req.toUserId}
                    transporterId = {req.transporterId}
                    showCheck = {false}
                    fromUserType="Supplier"
                    toUserType="Manufacturer"
                    onAccept={() => {}}
                />
            })} 

            { loading && <LoaderSmall/> }
        </>
    )
}


export default TransportTranscations;