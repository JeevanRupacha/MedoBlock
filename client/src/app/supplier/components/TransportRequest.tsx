import BlockchainData from "@/shared/models/BlockchainData.model";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { useContext, useEffect, useState } from "react";
import TransportRequestItem from "./TransportRequestItem";
import IUser from "@/shared/models/User.model";
import { timeStampToString } from "@/shared/utils/DateConverter";
import ITransportRequest from "@/shared/models/TransportRequest.model";
import { init } from "next/dist/compiled/@vercel/og/satori";

// REQUESTED,
// ACCEPTED,
// ON_WAY,
// COMPLETED,
// FAILED

const TransportRequest = () => {

    const strUser = localStorage.getItem('user')
    const user = JSON.parse(strUser?strUser:'') as IUser 
    const [requests, setRequests] = useState<ITransportRequest[] | undefined>()

    const {
        transportRequests,
        transportRequestContract
    } = useContext(BlockchainContext) as BlockchainData;

    useEffect(() => {
        // const copy = transportRequests 
        // const reversed = copy?.reverse()
        setRequests(transportRequests)
    }, [transportRequests])

    return(
        <>
            <div className="pb-8 flex justify-between">
                <p>Transport Requests</p>
                <div >
                    <img className="w-8 h-5 mr-4 cursor-pointer" src = {'sort-down.png'} alt = ''></img>
                </div>
            </div>

            {requests?.map( request => {
                if(request.fromUserId != user.id) return 
                
                let initDateStr = ''
                
                try{
                    const millis = parseInt(request.initDate) * 1000
                    if(Object.is(millis, NaN)){
                        initDateStr = ''
                    }else{
                        initDateStr = timeStampToString(millis)
                    }
                }catch(error){
                    console.log(error)
                }
                
                return <TransportRequestItem
                    transAddress = {request.medSupplyChainAddr}
                    status = { request.status }
                    initDate={ initDateStr }
                    completedDate={ request.completeDate}
                    fromLocation={request.fromLocation}
                    toLocation={request.toLocation}
                    cost = {request.cost}
                    fromUserId={ request.fromUserId}
                    toUserId={request.toUserId}
                    transporterId = {request.transporterId}
                    showCheck = {false}
                    fromUserType="Supplier"
                    toUserType="Manufacturer"
                    onAccept={() => {}}
                />
                })} 
        </>
    )
}


export default TransportRequest;