

// REQUESTED,
// ACCEPTED,
// ON_WAY,
// COMPLETED,
// FAILED

import TransportRequestItem from "@/app/supplier/components/TransportRequestItem";
import BlockchainData from "@/shared/models/BlockchainData.model";
import ITransportRequest from "@/shared/models/TransportRequest.model";
import IUser from "@/shared/models/User.model";
import DialogModal from "@/shared/ui/components/DialogModal";
import Input from "@/shared/ui/components/Input";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { currenMillis, timeStampToString } from "@/shared/utils/DateConverter";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";

const TransportRequest = () => {

    const strUser = localStorage.getItem('user')
    const user = JSON.parse(strUser?strUser:'') as IUser 
    const [requests, setRequests] = useState<ITransportRequest[] | undefined>()
    const [loading, setLoading] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [request, setRequest] = useState<ITransportRequest>()
    const [cost, setCost] = useState('0')
    const [showCostDialog, setShowCostDialog] = useState(false)


    const {
        transportRequests,
        transportRequestContract,
        getSupplyChainContract,
    } = useContext(BlockchainContext) as BlockchainData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCost(e.target.value) 
        if(request == undefined) return
        setRequest({...request, cost: e.target.value})
    }

    const acceptReq = async (_request?: ITransportRequest) => {

        if(_request == undefined) return 
        setLoading(true)

        await transportRequestContract?.updateRequest(
            _request.id,
            _request.initDate,
            _request.completeDate? _request.completeDate : '',
            _request.transporterId,
            _request.fromUserId,
            _request.toUserId,
            'ACCEPTED',
            _request.cost,
            _request.fromLocation,
            _request.toLocation,
            _request.medSupplyChainAddr
        )

        const transportReqStr = JSON.stringify({..._request, status: 'ACCEPTED'}).replace(/"|"|{|}/g, '');

        if(getSupplyChainContract == undefined) return alert(" No supply chain ")
        const supplyChainAddress = _request.medSupplyChainAddr 
        const supplyChainContract = await getSupplyChainContract(supplyChainAddress) 

        await supplyChainContract?.addSupplyChain("transReqAccept", transportReqStr) 
        setLoading(false)
    } 

    const updateStatus = async (status: string) => {

        setShowDialog(false)
        if(request == undefined) return alert("No request Selected")
        setLoading(true)

        let completedDate = ''
        if(status == 'COMPLETED'){
            completedDate = Date.now().toString()
        }else{
            completedDate = "Not_yet"
        }

        console.log("Completed DAte", completedDate)

        await transportRequestContract?.updateRequest(
            request.id,
            request.initDate,
            "1687452687",
            request.transporterId,
            request.fromUserId,
            request.toUserId,
            status,
            request.cost,
            request.fromLocation,
            request.toLocation,
            request.medSupplyChainAddr
        )

        const transportReqStr = JSON.stringify({...request, status: status}).replace(/"|"|{|}/g, '');

        if(getSupplyChainContract == undefined) return alert(" No supply chain ")
        const supplyChainAddress = request.medSupplyChainAddr 
        const supplyChainContract = await getSupplyChainContract(supplyChainAddress) 

        let supplyChainKey
        if(status == 'ACCEPTED' ){
            supplyChainKey = 'transReqAccept'
        }else if(status == 'INIT'){
            supplyChainKey = 'transportInit'
        }else if(status == 'ON WAY'){
            supplyChainKey = 'transOnWay'
        }else if(status = 'COMPLETED'){
            supplyChainKey = 'transCompleted'
        }else{
            supplyChainKey =  'nokey'
        }

        await supplyChainContract?.addSupplyChain(supplyChainKey, transportReqStr) 
        setLoading(false)
    }



    const StatusDialogContent = <>
        <div className='w-96 bg-onPrimary-light/70 rounded-xl p-4'>
            <p className="text-onPrimary-dark text-xl pb-8">Update Status</p>
            <div>
                <div onClick={() => {updateStatus('ACCEPTED')}} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <p className="pl-2 text-onSecondary-dark">ACCEPTED</p>
                </div>

                <div onClick={() => {updateStatus('INIT')}} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <p className="pl-2 text-onSecondary-dark">INIT</p>
                </div>

                <div onClick={() => {updateStatus('ON WAY')}} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <p className="pl-2 text-onSecondary-dark">ON WAY</p>
                </div>

                <div onClick={() => {updateStatus('COMPLETED')}} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <p className="pl-2 text-onSecondary-dark">COMPLETED</p>
                </div>

                <div onClick={() => {updateStatus('FAILED')}} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <p className="pl-2 text-onSecondary-dark">FAILED</p>
                </div>
            </div>
        </div>
    </>

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
                    completeDate: transRequest.completeDate,
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

    const costDialogContent = 
    <div className='w-96 bg-onPrimary-light rounded-xl p-4'>
        <h1 className='text-onPrimary-dark pb-4 text-lg'> Enter Transport Cost </h1>

        <Input 
            placeholder="Cost"
            name="cost"
            type = "text"
            value={cost}
            handleChange={handleChange}
        />

        <div className='flex pt-4 gap-4'>
            <div onClick={() => setShowCostDialog(false)} className='bg-red-400 px-4 py-2 rounded-full w-full cursor-pointer hover:bg-red-400/50'>Cancel</div>
            <div onClick={() => acceptReq(request)} className='bg-button px-4 py-2 rounded-full w-full cursor-pointer hover:bg-button/50'>Accept</div>
        </div>
    </div>


    useEffect(() => {
        if(transportRequestContract != undefined){
            getTransportRequests(transportRequestContract)
        }
    }, [transportRequestContract])

    return(
        <>
            <div className="pb-8 flex justify-between">
                <p>Transport Requests</p>
                <div>
                    <img className="w-8 h-5 mr-4 cursor-pointer" src = {'sort-down.png'} alt = ''></img>
                </div>
            </div>

            {requests?.map( req => {
                // if(req.transporterId != user.id) return  just testing 
               
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

                let completeDateStr = ''
                try{
                    const millis = parseInt(req.completeDate) * 1000
                    if(Object.is(millis, NaN)){
                        completeDateStr = ''
                    }else{
                        completeDateStr = timeStampToString(millis)
                    }
                }catch(error){
                    console.log(error)
                }
                
                console.log("CompleteStr ", completeDateStr)
                console.log("CompleteDare ", req.completeDate)

                return <TransportRequestItem
                    transAddress = {req.medSupplyChainAddr}
                    status = { req.status }
                    initDate={ initDateStr }
                    completedDate= { completeDateStr}
                    fromLocation={req.fromLocation}
                    toLocation={req.toLocation}
                    cost = {req.cost}
                    fromUserId={ req.fromUserId}
                    toUserId={req.toUserId}
                    transporterId = {req.transporterId}
                    showCheck = {true}
                    fromUserType="Supplier"
                    toUserType="Manufacturer"
                    onAccept={() => {
                        setRequest(req)
                        setShowCostDialog(true)
                    }}
                    onClickStatus={() => {
                        setRequest(req) 
                        setShowDialog(true)
                     }}
                />
            })} 

            { loading && <LoaderSmall/> }

            <DialogModal open = {showCostDialog} toggle={() => setShowCostDialog(!showCostDialog)} content = {costDialogContent}/>
            <DialogModal open = {showDialog} toggle={() => setShowDialog(!showDialog)} content = {StatusDialogContent}/>    
        </>
    )
}


export default TransportRequest;