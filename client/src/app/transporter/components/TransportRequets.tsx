

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
import { Empty } from "@/shared/ui/components/Empty";
import Input from "@/shared/ui/components/Input";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { currenMillis, timeStampToStr, timeStampToString } from "@/shared/utils/DateConverter";
import { objectToChainString } from "@/shared/utils/objectToChainString";
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

        await transportRequestContract?.updateRequest(
            request.id,
            request.initDate,
            completedDate,
            request.transporterId,
            request.fromUserId,
            request.toUserId,
            status,
            request.cost,
            request.fromLocation,
            request.toLocation,
            request.medSupplyChainAddr
        )

        // const transportReqStr = JSON.stringify({...request, status: status}).replace(/"|"|{|}/g, '');
        const cleanReq = {id: request.id, 
            initDate: request.initDate,
            completeDate: completedDate, 
            transporterId: request.transporterId, 
            fromUserId: request.fromUserId,
            toUserId: request.toUserId,
            status: status,
            cost: request.cost,
            fromLocation: request.fromLocation,
            toLocation: request.toLocation,
            medSupplyChainAddr: request.medSupplyChainAddr
        } as ITransportRequest

        const transportReqStr = objectToChainString(cleanReq)

        if(getSupplyChainContract == undefined) return alert(" No supply chain ")
        const supplyChainAddress = request.medSupplyChainAddr 
        const supplyChainContract = await getSupplyChainContract(supplyChainAddress) 

        const miniData = request.transporterId.split(',')
        //transporterId mixed with 'transporterId,rawMatId,medicineId,isMedicine'
        let isMedicine

        if(miniData.length > 1){
            isMedicine = miniData[3]
        }

        let supplyChainKey 
        if(isMedicine === "true"){
            if(status == 'ACCEPTED' ){
                supplyChainKey = 'transMedReqAccept'
            }else if(status == 'INIT'){
                supplyChainKey = 'transportMedInit'
            }else if(status == 'ON WAY'){
                supplyChainKey = 'transMedOnWay'
            }else if(status = 'COMPLETED'){
                supplyChainKey = 'transMedCompleted'
            }else{
                supplyChainKey =  'nokey'
            }
        }else{
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
        }

        //console.log("TransSTr", transportReqStr)
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
            const keys: string[] = await transportReqContract?.getTransportRequestKeys();

            let transportRequests: Array<ITransportRequest> = []    

            for (const key of keys) {
                let transRequest = await transportReqContract?.getTransportRequest(key) as ITransportRequest;
                if(transRequest == undefined) return    
                transportRequests.push(transRequest)
              }

            const reversed = transportRequests.reverse() 
            setRequests(reversed);

            setRequests(reversed.filter((req) => req.status != 'COMPLETED' && req.transporterId.split(',')[0] == user.id));
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
            <div onClick={() => setShowCostDialog(false)} className='bg-red-400 px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-red-400/50'>Cancel</div>
            <div onClick={() => acceptReq(request)} className='bg-button px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-button/50'>Accept</div>
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
               
                console.log("REQ", req)

                ///string,string,string,string,string,string,string,string,string,address): 63562a4e-044c-4940-b26b-78713f1d07b1,1687668253365,Not Yet,ZsDkAMZKqvbEs6TONNKwbOA4lkl1,null,2da8d28f-249b-410f-b6af-fbf1f54819d9,true,ZsDkAMZKqvbEs6TONNKwbOA4lkl1,ZsDkAMZKqvbEs6TONNKwbOA4lkl1,REQUESTED,0,La: -19.78892, Lo: -40.46657,La: 25.13563, Lo: 165.49775,0xAF6d9e9fEe9b8Ed3A51C8aE28f0076F51c9Ff4d2
                let initDateStr = timeStampToStr(req.initDate)
                let completeDateStr = timeStampToStr(parseInt(req.completeDate) * 1000)
                
                const miniData = req.transporterId.split(',')
                const transporterId = miniData[0]
                let rawMatId = ''
                let medicineId = ''
                let isMedicine

                if(miniData.length > 1){
                    rawMatId = miniData[1]
                    medicineId = miniData[2]
                    isMedicine = miniData[3]
                }

                let fromUserType = ''
                let toUserType = ''

                console.log("isMEd", isMedicine + req.medSupplyChainAddr)

                if(isMedicine === "true"){
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
                    completedDate= { completeDateStr}
                    fromLocation={req.fromLocation}
                    toLocation={req.toLocation}
                    cost = {req.cost}
                    fromUserId={ req.fromUserId}
                    toUserId={req.toUserId}
                    transporterId = {transporterId}
                    showCheck = {true}
                    fromUserType= {fromUserType}
                    toUserType= {toUserType}
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

            {(!requests?.length && !loading) && <Empty/>}

            { loading && <LoaderSmall/> }

            <DialogModal open = {showCostDialog} toggle={() => setShowCostDialog(!showCostDialog)} content = {costDialogContent}/>
            <DialogModal open = {showDialog} toggle={() => setShowDialog(!showDialog)} content = {StatusDialogContent}/>    
        </>
    )
}


export default TransportRequest;