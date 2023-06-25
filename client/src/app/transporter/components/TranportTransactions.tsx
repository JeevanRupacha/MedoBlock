

import TransportRequestItem from "@/app/supplier/components/TransportRequestItem";
import BlockchainData from "@/shared/models/BlockchainData.model";
import ITransportRequest from "@/shared/models/TransportRequest.model";
import IUser from "@/shared/models/User.model";
import DialogModal from "@/shared/ui/components/DialogModal";
import { Empty } from "@/shared/ui/components/Empty";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { timeStampToStr, timeStampToString } from "@/shared/utils/DateConverter";
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

    // const getTransportRequests = async (transportReqContract : ethers.Contract) => {
    //     try{
    //         setLoading(true)
    //         const keys: string[] = await transportReqContract?.getTransportRequestKeys();

    //         let transportRequests: Array<ITransportRequest> = []    

    //         for (const key of keys) {
    //             let transRequest = await transportReqContract?.getTransportRequest(key);
                
    //             if(transRequest == undefined) return 

    //             transportRequests.push({
    //                 id: transRequest.id,
    //                 initDate: transRequest.initDate,
    //                 completeDate: transRequest.completedDate,
    //                 transporterId: transRequest.transporterId,
    //                 fromUserId: transRequest.fromUserId,
    //                 toUserId: transRequest.toUserId,
    //                 status: transRequest.status,
    //                 cost: transRequest.cost,
    //                 fromLocation: transRequest.fromLocation,
    //                 toLocation: transRequest.toLocation,
    //                 medSupplyChainAddr: transRequest.medSupplyChainAddr
    //             });
    //           }
    //         const reversed = transportRequests.reverse()  
    //         setRequests(reversed);
    //         // setRequests(reversed.filter((req) => req.transporterId == user.id && req.status == 'COMPLETED'));
    //         setLoading(false)
    //     }catch(error){
    //         setLoading(false)
    //         console.log(error)
    //     }
    // }

    const getTransportRequests = async () => {
        try{
            setLoading(true)
            console.log("TransRe Co", transportRequestContract)
            const keys: string[] = await transportRequestContract?.getTransportRequestKeys();

            let transportRequests: Array<ITransportRequest> = []    

            for (const key of keys) {
                let transRequest = await transportRequestContract?.getTransportRequest(key) as ITransportRequest;
                
                if(transRequest == undefined) return                 
                transportRequests.push(transRequest);
              }

            //const reversed = transportRequests.reverse() 
            setRequests(transportRequests.filter((req) => req.status == 'COMPLETED' && req.transporterId.split(',')[0] == user.id));
            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        if(transportRequestContract != undefined){
            getTransportRequests()
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
                //if(req.transporterId != user.id) return 
                // if(req.transporterId != user.id && req.status != 'COMPLETED') return 
               
                let initDateStr = timeStampToStr(req.initDate)

                const miniData = req.transporterId.split(',')
                const transporterId = miniData[0]
                let rawMatId = ''
                let medicineId = ''
                let isMedicine =  ''

                if(miniData.length > 1){
                    rawMatId = miniData[1]
                    medicineId = miniData[2]
                    isMedicine = miniData[3]
                }

                let fromUserType = ''
                let toUserType = ''

                if(isMedicine){
                    fromUserType = 'Manufacturer'
                    toUserType = 'Distributor'
                }else{
                    fromUserType = 'Supplier'
                    toUserType = 'Manufacturer'
                }
                
                return <TransportRequestItem
                    transAddress = {req.medSupplyChainAddr}
                    status = { req.status }
                    initDate={ initDateStr }
                    completedDate={ timeStampToStr(parseInt(req.completeDate.toString()) * 1000)}
                    fromLocation={req.fromLocation}
                    toLocation={req.toLocation}
                    cost = {req.cost}
                    fromUserId={ req.fromUserId}
                    toUserId={req.toUserId}
                    transporterId = {transporterId}
                    showCheck = {false}
                    fromUserType={ fromUserType}
                    toUserType={ toUserType}
                    onAccept={() => {}}
                />
            })} 

            { (!requests?.length && !loading) && <Empty/>}
            { loading && <LoaderSmall/> }
        </>
    )
}


export default TransportTranscations;