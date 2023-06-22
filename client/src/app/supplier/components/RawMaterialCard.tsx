import UserContextData from "@/shared/models/UserContextData.model";
import UserCard from "@/shared/ui/components/UserCard";
import { UsersContext } from "@/store/context/UsersContext";
import React, { useContext } from 'react'

interface RawMaterialCardProps{
    rawMatID: string ,
    name: string,
    description: string,
    timeStamp: string,
    supplierId: string,
    amount: Number,
    price: string,
    unit: string,
    clickable?: boolean,
    onClick?: () => void  
}


const RawMaterialCard = ({
    rawMatID, name, description, timeStamp, supplierId, amount, price, unit, clickable, onClick
}: RawMaterialCardProps) => {

    const users = useContext(UsersContext) as UserContextData
    const user = users.users?.find(user => user.id == supplierId)

    return(
        <>
            <div onClick = {clickable ? (onClick) : (() => {})} className={`min-w-96 bg-onPrimary-light p-8 rounded-xl ${(clickable)? "cursor-pointer" : ''}`}>
                <p className="text-sm text-orange-300">{rawMatID}</p>
                <p className="text-lg mt-2 font-bold">{name}</p>
                <p className="text-lg mt-4">Description</p>
                <p className="text-sm mt-1">{description}</p>
                <div className="h-[1px] bg-white/60 w-full my-8"></div>
                <div className="flex items-center"><p className="text-base pr-2">Created:  </p><p className="text-sm text-orange-300">{timeStamp}</p></div>   
                
                <div className="flex justify-between">
                    <div className="w-min-32 my-4">
                        <UserCard name = {user?.name} imageUrl={user?.imageUrl} bgColor="bg-blue/30"/>  
                    </div>
                    <div className="flex items-center"><p className="text-base pr-2">Amount:  </p><p className="text-sm text-orange-300">{amount.toString()}</p></div>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center"><p className="text-base pr-2">Price:  </p><p className="text-sm text-orange-300">{price}</p></div>        
                    <div className="flex items-center"><p className="text-base pr-2">Unit:  </p><p className="text-sm text-orange-300">{unit}</p></div>   
                </div>
                        
               
                <div className="h-[1px] bg-white/60 w-full mt-8 mb-4"></div>
                <div className="flex items-center justify-center"><p className="text-base pr-1">Supply Chain Address:  </p><p className="text-sm text-orange-300">bnoogsddxc3nv@xsaa9s9</p></div>        
            </div>
        </>
    );
};

export default RawMaterialCard;