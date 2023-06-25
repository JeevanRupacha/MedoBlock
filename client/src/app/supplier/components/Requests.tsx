import BlockchainData from "@/shared/models/BlockchainData.model";
import IRawMaterialRequest from "@/shared/models/RawMaterialRequest.model"
import IUser from "@/shared/models/User.model";
import UserContextData from "@/shared/models/UserContextData.model";
import { trimAddress } from "@/shared/utils/trimAddress";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { UsersContext } from "@/store/context/UsersContext";
import { count } from "console";
import { useContext, useState } from "react";
import RequestItem from "./RequestItem";
import DialogModal from "@/shared/ui/components/DialogModal";
import LoadingDialog from "@/shared/ui/components/LoadingDialog";
import { RawMatRequestToString } from "@/shared/utils/Converter";
import { randomUUID } from "crypto";
import { v4 as uuidv4 } from "uuid";
import ITransportRequest from "@/shared/models/TransportRequest.model";

const Requests = () => {
    const { users }  = useContext(UsersContext) as UserContextData;
    const [showDialog, setShowDialog] = useState(false)
    const [request, setRequest]  = useState<IRawMaterialRequest>()
    const [loadig, setLoading] = useState(false)
    const [fromLocation, setFromLocation] = useState('La: -19.78892, Lo: -40.46657')
    const [toLocation, setToLocation] = useState('La: 25.13563, Lo: 165.49775')

    const strUser = localStorage.getItem('user')
    const currentUser = JSON.parse(strUser?strUser:'') as IUser

    const {
        rawMaterialRequests, 
        getSupplyChainContract,
        rawMaterialRequestContract,
        transportRequestContract
    } = useContext(BlockchainContext) as BlockchainData;

    const requestTransporter = async (user: IUser) => {
        if(request == undefined) return 
        setShowDialog(false)
        setLoading(true)
        try{
            await rawMaterialRequestContract?.updateRequest(
                request?.id, request?.name, request?.count, request?.date, request?.manuId, request?.supplierId, request?.rawMaterialId,"true",request?.medSupplyChainAddr
            )
    
            // if(getSupplyChainContract != undefined){
            //     const supplyChainContract = getSupplyChainContract(request.medSupplyChainAddr)
            //     const strRawMatReq = RawMatRequestToString(request)
            //     await supplyChainContract?.addSupplyChain("rawMaterialRequest", strRawMatReq) 
            // }
    
            //transporterId mixed with 'transporterId,rawMatId,medicineId,isMedicine'
            const modTransporterId = `${user.id},${request.id},null,false`
            const transport = {
                id: uuidv4(), 
                initDate: Date.now().toString(),
                completedDate: 'Not Yet', 
                transporterId: modTransporterId.toString(), 
                fromUserId: currentUser.id, 
                toUserId: request.manuId, 
                status: 'REQUESTED', 
                cost: '0', 
                fromLocation: fromLocation, 
                toLocation: toLocation, 
                medSupplyChainAddr: request.medSupplyChainAddr
            }

            console.log("Transport", transport)
    
            await transportRequestContract?.addRequest(
                transport.id,
                transport.initDate,
                transport.completedDate,
                transport.transporterId,
                transport.fromUserId,
                transport.toUserId,
                transport.status,
                transport.cost,
                transport.fromLocation,
                transport.toLocation,
                transport.medSupplyChainAddr
            )

            if(getSupplyChainContract == undefined) return 
            const supplyChainContract = await getSupplyChainContract(request.medSupplyChainAddr)
            const requestStr = JSON.stringify({...request, status: true}).replace(/"|"|{|}/g, '');
            const transportReqStr = JSON.stringify(transport).replace(/"|"|{|}/g, '');

            await supplyChainContract?.addSupplyChain("rawMatAccept", requestStr) 
            await supplyChainContract?.addSupplyChain("transReq", transportReqStr) 
        }catch(error){
            console.log(error)    
            setLoading(false)
        }
        setLoading(false)

        // REQUESTED,
        // ACCEPTED,
        // ON_WAY,
        // COMPLETED,
        // FAILED
    }

    const onAccept = (rawMatReq: IRawMaterialRequest) => {
        setRequest(rawMatReq)
        setShowDialog(true)
    }

    const dialogContent = <>
    <div className='w-96 bg-onPrimary-light/70 rounded-xl p-4'>
        <p className="text-onPrimary-dark text-xl pb-8">Select a Transporter</p>
        {users.map( user => {
            return <div>
                <div onClick={() => requestTransporter(user)} className="flex items-center pt-2 bg-onPrimary-light/70 rounded-md my-2 py-2 px-2 cursor-pointer hover:opacity-50">
                    <img className="w-8 rounded-full" src={user.imageUrl} alt="img" />
                    <p className="pl-2 text-onSecondary-dark">{user.name}</p>
                </div>
            </div>
        })}
    </div>
    </>

    return(
        <>
            <div>
                <div className="pb-8"> Raw Material Requests</div>
                { rawMaterialRequests?.map( request => {
                    const user = users.find((it) => it.id == request.manuId)
                    if(request.requestStatus == true) return
                    if(request.supplierId != currentUser?.id) return 
                    
                    return <RequestItem
                        id= {request.id}
                        status = {request.requestStatus}
                        userName={user?.name}
                        imageUrl={user?.imageUrl}
                        transAddress={request.medSupplyChainAddr}
                        rawMatId={request.rawMaterialId}
                        date = {request.date}
                        amount = {request.count}
                        matName={ request.name}
                        onAccept={() => onAccept(request)}
                    />
                })} 
            <DialogModal open = { showDialog} toggle={() => setShowDialog(!showDialog)} content = {dialogContent}/>    
            <LoadingDialog isLoading={loadig}/>
            </div>
        </>
    )
}


export default Requests