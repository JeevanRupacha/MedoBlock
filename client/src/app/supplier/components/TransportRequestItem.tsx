import UserContextData from "@/shared/models/UserContextData.model";
import UserCard from "@/shared/ui/components/UserCard";
import { trimAddress } from "@/shared/utils/trimAddress";
import { UsersContext } from "@/store/context/UsersContext";
import { stat } from "fs";
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
    showCheck: boolean;
    onAccept: () => void ,
    onClickStatus?: () => void ,
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
    showCheck,
    onAccept,
    onClickStatus
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

                    <div className="text-sm flex-row items-center justify-center w-1/12">
                        <p className="pb-2 mx-auto flex justify-center">Cost</p>
                        <p className="text-orange-300 mx-auto flex justify-center">${cost == ''?'Not yet':cost}</p>
                        {/* <p className="pb-2 mx-auto flex justify-center">Completed Date</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{completedDate != ''?completedDate:'In Progress'}</p> */}
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">From Location</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{fromLocation}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">To Location</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{toLocation}</p>
                    </div>
                </div>

                <div className="flex pt-8">
                    <div className="w-1/2">
                        <div className="text-sm flex items-center justify-center">
                            <UserCard name = {fromUser?.name} imageUrl={fromUser?.imageUrl}/>
                            <UserCard name = {transporterUser?.name} imageUrl={transporterUser?.imageUrl}/>
                            <UserCard name = {toUser?.name} imageUrl={toUser?.imageUrl}/>
                        </div>

                        <div className="flex text-sm justify-center pl-8 mt-4">
                            <p>{fromUserType}</p>
                            <img className="w-12" src='right-arrow.png' alt='arrow'/> 

                            <p>Transporter</p>
                            <img className="w-12" src='right-arrow.png' alt='arrow'/> 

                            <p>{toUserType}</p>
                        </div>
                    </div>

                    {/* <div className="text-sm flex-row items-center justify-center w-1/5">
                        <p className="pb-2 mx-auto flex justify-center">Cost</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{cost == ''?'Not yet':cost}</p>
                    </div> */}

                    <div className={`text-sm flex-row items-center justify-center w-1/4 mt-4`}>

                        {status == 'COMPLETED'?(
                            <div>
                                <p className="pb-2 mx-auto flex justify-center">{status}</p>
                                <p className="text-orange-300 mx-auto flex justify-center">{completedDate}</p>
                            </div>
                        ):(
                            <div onClick={() => (onClickStatus != undefined)?onClickStatus(): {}} className={`${showCheck ? 'bg-slate-600 py-3 hover:opacity-70 rounded-2xl cursor-pointer' : ''}`}>
                                <p className="pb-2 mx-auto flex justify-center">Status</p>
                                <p className="text-orange-300 mx-auto flex justify-center">{status}</p>
                            </div>
                        )}
                        
                    </div>

                    <div className="text-sm flex-row justify-center w-1/5 mt-4 items-center cursor-pointer">
                        {status == 'COMPLETED' && (
                            <p className="text-button text-lg flex justify-center items-center">Done</p>
                        )}

                        {(status == 'REQUESTED' && showCheck) && (
                            <div onClick = {() => onAccept() }className="flex justify-center items-center cursor-pointer">
                                <img className="hover:opacity-40" src="check.png" alt="check"/>
                            </div>
                        )}

                        { (status != 'COMPLETED' && !showCheck) && (
                            <div className="flex justify-center items-center cursor-pointer">
                                <img className="hover:opacity-40 w-12" src="status.png" alt="check"/>
                            </div>
                        )}

                        { (showCheck && status != 'COMPLETED' && status != 'REQUESTED') && (
                            <div className="flex justify-center items-center cursor-pointer">
                                <img className="hover:opacity-40 w-12" src="status.png" alt="check"/>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )    
}

export default TransportRequestItem;