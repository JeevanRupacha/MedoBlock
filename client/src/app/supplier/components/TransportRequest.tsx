import BlockchainData from "@/shared/models/BlockchainData.model";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { useContext } from "react";
import TransportRequestItem from "./TransportRequestItem";
import IUser from "@/shared/models/User.model";

const TransportRequest = () => {

    const strUser = localStorage.getItem('user')
    const user = JSON.parse(strUser?strUser:'') as IUser 

    const {
        transportRequests,
        transportRequestContract
    } = useContext(BlockchainContext) as BlockchainData;

    return(
        <>
            <div className="pb-8"> Transport Requests</div>

            { transportRequests?.map( request => {
                if(request.fromUserId != user.id) return 
                
                console.log("transoirt request ", request)
                return <TransportRequestItem
                    transAddress = {request.medSupplyChainAddr}
                    status = { request.status }
                    initDate={ request.initDate}
                    completedDate={ request.completeDate}
                    fromLocation={request.fromLocation}
                    toLocation={request.toLocation}
                    cost = {request.cost}
                    fromUserId={ request.fromUserId}
                    toUserId={request.toUserId}
                    transporterId = {request.transporterId}
                    fromUserType="Supplier"
                    toUserType="Manufacturer"
                    onAccept={() => {}}
                />
                    // const user = users.find((it) => it.id == request.manuId)
                    // if(request.requestStatus == true) return
                    // if(request.supplierId != user?.id) return 
                    // return <RequestItem
                    //     id= {request.id}
                    //     status = {request.requestStatus}
                    //     userName={user?.name}
                    //     imageUrl={user?.imageUrl}
                    //     transAddress={request.medSupplyChainAddr}
                    //     rawMatId={request.rawMaterialId}
                    //     date = {request.date}
                    //     amount = {request.count}
                    //     matName={ request.name}
                    //     onAccept={() => onAccept(request)}
                    // />
                })} 
        </>
    )
}


export default TransportRequest;