import IUser from "@/shared/models/User.model";
import UserContextData from "@/shared/models/UserContextData.model";
import UserCard from "@/shared/ui/components/UserCard";
import { trimAddressLong } from "@/shared/utils/trimAddressLong";
import { UsersContext } from "@/store/context/UsersContext";
import { useContext, useEffect, useState } from "react";

interface MedicineCardProps{
    name?: string;
    description?: string;
    userId?: string;
    creatDate?: string;
    expDate?: string;
    fdaStatus?: string;
    price?: number;
    count?: string;
    address: string;
    onClick: () => void 
}

const MedicineCard = ({
    name, description, userId, creatDate, expDate, fdaStatus, price, count, address, onClick
}: MedicineCardProps) => {

    const [user, setUser] = useState<IUser>()

    const { users } = useContext(UsersContext) as UserContextData;

    useEffect(() => {
        const result = users.find(u => u.id == userId)
        if(result != undefined){
            setUser(result)
        }
    },[userId])

    return(
        <>
            <div onClick={()  => {onClick()}} className="py-2 px-4 w-96 bg-blue/30 rounded-2xl cursor-pointer">
                <p className="text-xl font-medium">{name}</p>
                <p className="text-sm pt-4">{description}</p>
                
                <div className="pt-8 flex items-center">
                    <p className="text-sm pr-4"> Creator: </p>
                    <UserCard name = {user?.name} imageUrl={user?.imageUrl}/>
                </div>

                <div className= "flex justify-between pt-6">
                    <div className="py-1 px-8 rounded-full text-sm">
                        <p className="pb-1 m-auto flex justify-center">Created at</p>
                        <p className="m-auto flex justify-center text-orange-300">{creatDate}</p>
                    </div>

                    <div className="py-1 px-8 rounded-full text-sm">
                        <p className="pb-1 m-auto flex justify-center">Expired at</p>
                        <p className="m-auto flex justify-center text-orange-300">{expDate}</p>
                    </div>
                </div>

                <div className="flex text-sm py-4 justify-between">
                    <div>
                        <p className="flex justify-center opacity-50"> FDA </p>
                        <p className="flex justify-center text-button"> {fdaStatus} </p>
                    </div>
                    <div>
                        <p className="flex justify-center opacity-50"> Price </p>
                        <p className="flex justify-center"> ${price} </p>
                    </div>
                    <div>
                        <p className="flex justify-center opacity-50"> total count </p>
                        <p className="flex justify-center"> {count} unit </p>
                    </div>
                </div>

                <div className="text-sm flex pt-4">
                    <p className="text-sm">Address: </p>
                    <p className="text-orange-300 pl-2 pb-2 font-medium">{trimAddressLong(address)}</p>
                </div>
            </div>
        </>
    )
}

export default MedicineCard;