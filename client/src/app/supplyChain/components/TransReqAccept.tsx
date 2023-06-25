import { timeStampToStr } from "@/shared/utils/DateConverter";
import { trimAddress } from "@/shared/utils/trimAddress";
import { trimAddressLong } from "@/shared/utils/trimAddressLong";

interface TransReqAcceptProps{
    data?: string;
}

const TransReqAccept = ({ data} : TransReqAcceptProps) => {
    const result = data?.split(',')
    
    let id, initDate, completedDate, transporterId, rawMatId,medicineId, isMedicine,fromUserId, toUserId, status, cost,fromLocation, toLocation ;
    if(result != undefined && data != undefined){
        console.log("Result3", result)
        id = result[0]?.split(":")[1]
        initDate = result[1]?.split(":")[1]
        completedDate = result[2]?.split(":")[1]?.toString()
        transporterId = result[3]?.split(":")[1]
        rawMatId = result[4]
        medicineId = result[5]
        isMedicine = result[6]
        fromUserId = result[7]?.split(":")[1]
        toUserId = result[8]?.split(":")[1]
        status = result[9]?.split(":")[1]
        cost = result[10]?.split(":")[1]
        fromLocation = result[11]?.split(":")[1] + result[11]?.split(":")[2] + result[12]
        toLocation = result[13]?.split(":")[1] + result[13]?.split(":")[2] + result[14]
    }

    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'agreement.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">
                        <div className="text-lg font-bold pb-4">Accepted</div>
                        <div className="text-sm pt-2 pb-1 opacity-50 ">{trimAddressLong(id ? id: '')}</div>
                        <div className="text-sm flex"> 
                            <p className="text-button font-bold"> {status} </p>
                            <p className="pl-4 text-orange-300"> {timeStampToStr(initDate? initDate: '')} - {(completedDate ? completedDate : '')} </p>
                        </div>
                        <div className="flex text-sm pt-4 pb-2 font-bold">
                            <p> Raw Material: {trimAddress(rawMatId ? rawMatId : '')}</p>
                        </div>
                        <div className="flex text-sm pt-4 pb-2 font-bold">
                            <p> Cost: {cost ? cost : ''}</p>
                        </div>
                        <div className="text-sm"> 
                            <p>Location from: {fromLocation}</p>
                            <p>Location to: {toLocation}</p>
                        </div>
                    </div>
                </div>
            ):(
                <div className='flex text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'agreement.png'} alt="Supplier" />
                    <div className="text-xl pl-4 flex items-center"></div> 
                </div>
            )}  
        </>
    ) 
};

export default TransReqAccept;