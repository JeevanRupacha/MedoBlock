interface RawMaterialCardProps{
    rawMatID: string ,
    name: string,
    description: string,
    timeStamp: string,
    supplierId: string,
    amount: Number,
    price: string,
    unit: string 
} 


const RawMaterialCard = ({
    rawMatID, name, description, timeStamp, supplierId, amount, price, unit 
}: RawMaterialCardProps) => {
    return(
        <>
            <div className="w-96 bg-onPrimary-light p-4 rounded-xl">
                <p className="text-sm text-orange-300">{rawMatID}</p>
                <p className="text-lg mt-2">{name}</p>
                <p className="text-lg mt-4">Description</p>
                <p className="text-sm mt-1">{description}</p>
                <div className="h-[1px] bg-white/60 w-full mt-4 mb-4"></div>
                <div className="flex items-center"><p className="text-base pr-2">Created:  </p><p className="text-sm text-orange-300">{timeStamp}</p></div>        
                <div className="flex items-center"><p className="text-base pr-2">Supplier:  </p><p className="text-sm text-orange-300">{supplierId}</p></div>        
                <div className="flex items-center"><p className="text-base pr-2">Amount:  </p><p className="text-sm text-orange-300">{amount.toString()}</p></div>        
                <div className="flex items-center"><p className="text-base pr-2">Price:  </p><p className="text-sm text-orange-300">{price}</p></div>        
                <div className="flex items-center"><p className="text-base pr-2">Unit:  </p><p className="text-sm text-orange-300">{unit}</p></div>        
                <div className="h-[1px] bg-white/60 w-full mt-4 mb-4"></div>
                <div className="flex items-center justify-center"><p className="text-base pr-1">Supply Chain Address:  </p><p className="text-sm text-orange-300">bnoogsddxc3nv@xsaa9s9</p></div>        
            </div>
        </>
    );
};

export default RawMaterialCard;