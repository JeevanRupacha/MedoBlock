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
import getRawMaterialRequests from "@/store/utils/getRawMaterialRequest";
import { ethers } from "ethers";

const Supplies = () => {
    const { users }  = useContext(UsersContext) as UserContextData;
    const [contract, setContract] = useState<ethers.Contract>()

    const strUser = localStorage.getItem('user')
    const currentUser = JSON.parse(strUser?strUser:'') as IUser
    
    const {
        rawMaterialRequests, 
        rawMaterialsContract,
        supplyChainFactoryContract,
        getSupplyChainContract,
        rawMaterialRequestContract
    } = useContext(BlockchainContext) as BlockchainData;

    const onAccept = (rawMat: IRawMaterialRequest) => {
        alert("on Accept")
    }

    return(
        <>
            <div>
                <div className="pb-8"> Supplies</div>
                { rawMaterialRequests?.map( request => {
                    const user = users.find((it) => it.id == request.manuId)
                    if(request.requestStatus == false) return
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
            </div>
        </>
    )
}


export default Supplies;