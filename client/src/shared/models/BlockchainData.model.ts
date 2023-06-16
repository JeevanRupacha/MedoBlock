import { ethers } from "ethers";
import IRawMaterial from "./RawMaterial.model";
import IRawMaterialRequest from "./RawMaterialRequest.model";
import ITransportRequest from "./TransportRequest.model";

export default interface BlockchainData{
    walletAddress: string,
    rawMaterials?: IRawMaterial[],
    rawMaterialRequests?: IRawMaterialRequest[],
    transportRequests?: ITransportRequest[],
    getRawMaterials: () => void,
    getSupplyChainContract?: (address: string) => ethers.Contract | void,
    rawMaterialsContract?: ethers.Contract,
    supplyChainFactoryContract?: ethers.Contract,
    rawMaterialRequestContract?: ethers.Contract,
    transportRequestContract?: ethers.Contract,
}