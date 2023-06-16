export default interface ITransportRequest{
    id: string;
    initDate: string;
    completeDate: string;
    transporterId: string;
    fromUserId: string;
    toUserId: string;
    status: string;
    cost: string;
    fromLocation: string;
    toLocation: string;
    medSupplyChainAddr: string;
}