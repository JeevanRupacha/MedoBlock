import UserContextData from "@/shared/models/UserContextData.model";
import { trimAddress } from "@/shared/utils/trimAddress";
import { UsersContext } from "@/store/context/UsersContext";
import { useContext } from "react";
import { StringLiteral } from "typescript";

interface TransportRequestItemProps{
    transAddress: string;
    status: string;
    initDate: string;
    completedDate: string;
    fromLocation: string;
    toLocation: string;
    cost: string;
    fromUserType: string;
    toUserType: string;
    fromUserId: string;
    toUserId: string;
    transporterId: string;
    onAccept: () => void 
}

const TransportRequestItem = ({
    transAddress,
    status,
    initDate,
    completedDate,
    fromLocation,
    toLocation,
    fromUserType,
    toUserType,
    cost,
    fromUserId,
    toUserId,
    transporterId,
    onAccept,
}: TransportRequestItemProps) => {

    console.log("completedDate", completedDate)

    const {users} = useContext(UsersContext) as UserContextData 
    const fromUser = users.find((user) => user.id == fromUserId)
    const toUser = users.find((user) => user.id == toUserId)
    const transporterUser = users.find((user) => user.id == transporterId)

    return(
        <>
            <div className="w-full bg-blue bg-opacity-30 rounded-lg p-2 mb-4 pt-8">
                <div className="flex">
                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">Txn Hash</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{trimAddress(transAddress)}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">Init Date</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{initDate}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">Completed Date</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{completedDate != ''?completedDate:'In Progress'}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">From Location</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{fromLocation}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">To Location</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{toLocation}</p>
                    </div>
                </div>

                <div className="flex pt-8">
                    <div className="w-1/2">
                        <div className="text-sm flex items-center justify-center">
                            <div className="flex justify-center items-center p-2 rounded-md bg-card-color mr-2">
                                <img className="w-8 rounded-full" src={fromUser?.imageUrl} alt="img" />
                                <p className="pl-2">{fromUser?.name}</p>
                            </div>

                            <div className="flex justify-center items-center p-2 rounded-md bg-card-color mr-2">
                                <img className="w-8 rounded-full" src={transporterUser?.imageUrl} alt="img" />
                                <p className="pl-2">{transporterUser?.name}</p>
                            </div>

                            <div className="flex justify-center items-center p-2 rounded-md bg-card-color">
                                <img className="w-8 rounded-full" src={toUser?.imageUrl} alt="img" />
                                <p className="pl-2">{toUser?.name}</p>
                            </div>
                        </div>

                        <div className="flex text-sm justify-center pl-8 mt-4">
                            <p>{fromUserType}</p>
                            <img className="w-12" src='right-arrow.png' alt='arrow'/> 

                            <p>Transporter</p>
                            <img className="w-12" src='right-arrow.png' alt='arrow'/> 

                            <p>{toUserType}</p>
                        </div>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">Cost</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{cost == ''?'Not yet':cost}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">Status</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{status}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/5">
                        {status == 'COMPLETED'? (
                            <p className="text-button text-lg flex justify-center items-center">Done</p>
                        ) : (
                            <div onClick = {() => onAccept() }className="flex justify-center items-center cursor-pointer">
                                <img className="hover:opacity-60" src="check.png" alt="check"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )    
}

export default TransportRequestItem;