export default interface IRawMaterialRequest{
    id: string;
    name: string;
    count: number;
    date: string;
    manuId: string;
    supplierId: string;
    rawMaterialId: string;
    requestStatus: boolean;
    medSupplyChainAddr: string;
}