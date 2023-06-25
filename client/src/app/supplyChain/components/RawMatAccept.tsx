import { trimAddressLong } from "@/shared/utils/trimAddressLong";

interface RawMatAcceptProps{
    data?: string;
}

const RawMatAccept = ({ data } : RawMatAcceptProps) => {


    const result = data?.split(',')
    let id, name, count, date, manuId, supplierId, rawMaterialId, requestStatus, medSupplyChainAddr;

    if(result != undefined && data != undefined){
        console.log("Result1", result)
        id = result[0]?.split(":")[1]
        name = result[1]?.split(":")[1]
        count = result[2]?.split(":")[1]?.toString()
        date = result[4]?.split(":")[1]
        manuId = result[4]?.split(":")[1]
        supplierId = result[5]?.split(":")[1]
        rawMaterialId = result[7]?.split(":")[1]
        requestStatus = result[7]?.split(":")[1]
        medSupplyChainAddr = result[8]?.split(":")[1]
    }

    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'agreement.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">
                        <div className="text-lg font-bold pb-4">Accepted</div>
                        <div className="text-sm pt-2 pb-1 opacity-50 ">{trimAddressLong(rawMaterialId ? rawMaterialId: '')}</div>
                        <div className="text-sm flex"> 
                            <p className="text-button font-bold"> {name} </p>
                            <p className="pl-4 text-orange-300"> {date} </p>
                        </div>
                    </div>
                </div>
            ):(
                <div className='flex text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'agreement.png'} alt="Supplier" />
                    {/* <div className="text-xl pl-4 flex items-center"> Raw Material Request</div>  */}
                    <div className="text-xl pl-4 flex items-center"> </div> 
                </div>
            )}  
        </>
    )
};

export default RawMatAccept;