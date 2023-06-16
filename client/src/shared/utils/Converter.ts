import IRawMaterialRequest from "../models/RawMaterialRequest.model";

export const RawMatRequestToString = (rawMatRequest: IRawMaterialRequest) =>{
    return `id:${rawMatRequest.id},name:${rawMatRequest.name},count:${rawMatRequest.count},date:${rawMatRequest.date},manuId:${rawMatRequest.manuId},supplierId:${rawMatRequest.supplierId},rawMaterialId:${rawMatRequest.rawMaterialId},requestStatus:${rawMatRequest.requestStatus},medSupplyChainAddr:${rawMatRequest.medSupplyChainAddr}`
}