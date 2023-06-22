import IRawMaterialRequest from "@/shared/models/RawMaterialRequest.model";
import { ethers } from "ethers";

interface getRawMatRequestProps{
    rawMaterialRequestContract?: any
}

const getRawMaterialRequests = async ({
    rawMaterialRequestContract
}: getRawMatRequestProps) => {
    try{
        const keys: string[] = await rawMaterialRequestContract?.getRequestKeys();
        let rawMatReqResult: Array<IRawMaterialRequest> = []    

        for (const key of keys) {
            let rawMaterialReq = await rawMaterialRequestContract?.getRequest(key);

            //const milliTimeStamp = rawMaterial.timeStamp.toNumber() * 1000
            
            if(rawMaterialReq == undefined) return 
            rawMatReqResult.push({
                id: rawMaterialReq.id,
                name: rawMaterialReq.name,
                count: rawMaterialReq.count,
                date: rawMaterialReq.date,
                manuId: rawMaterialReq.manuId,
                supplierId: rawMaterialReq.supplierId,
                rawMaterialId: rawMaterialReq.rawMaterialId,
                requestStatus: rawMaterialReq.requestStatus, 
                medSupplyChainAddr: rawMaterialReq.medSupplyChainAddr
            });
            //rawMatResult = rawMatResult.sort(compare)
          }
         
        return rawMatReqResult;
    }catch(error){
        console.log(error)
    }
}

export default getRawMaterialRequests;