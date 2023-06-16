import { trimAddress } from "@/shared/utils/trimAddress";

interface RequestItemProps{
    id: string;
    userName?: string;
    transAddress: string;
    rawMatId: string;
    date: string;
    amount: number;
    imageUrl?: string;
    matName: string;
    status: boolean;
    onAccept: () => void 
}

const RequestItem = ({
    id,
    transAddress,
    rawMatId,
    date,
    amount,
    userName,
    imageUrl,
    matName,
    status,
    onAccept,
}: RequestItemProps) => {

    return(
        <>
            <div className="w-full bg-blue bg-opacity-30 rounded-lg p-2 mb-4">
                <div className="flex">
                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">Txn Hash</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{trimAddress(transAddress)}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">Raw Material ID</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{trimAddress(rawMatId)}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">Date</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{date}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">Total amount</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{amount.toString()}</p>
                    </div>
                </div>

                <div className="flex pt-8">
                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <div className="flex justify-center items-center pt-2">
                            <img className="w-8 rounded-full" src={(imageUrl == '' || imageUrl == undefined || imageUrl == null)?'usermodel.svg': imageUrl} alt="img" />
                            <p className="pl-2">{userName}</p>
                        </div>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">Material Name</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{matName}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        <p className="pb-2 mx-auto flex justify-center">ID</p>
                        <p className="text-orange-300 mx-auto flex justify-center">{trimAddress(id)}</p>
                    </div>

                    <div className="text-sm flex-row items-center justify-center w-1/4">
                        {status ? (
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

export default RequestItem;