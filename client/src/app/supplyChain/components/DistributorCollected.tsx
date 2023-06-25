import { timeStampToStr } from "@/shared/utils/DateConverter";
import { trimAddress } from "@/shared/utils/trimAddress";
import { trimAddressLong } from "@/shared/utils/trimAddressLong";

interface DistributorCollectedProps{
    data?: string;
}

const DistributorCollected = ({ data} : DistributorCollectedProps) => {

    const result = data?.split(',')
    

    //0:63562a4e-044c-4940-b26b-78713f1d07b1,1:1687668253365,2:Not Yet,3:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,null,2da8d28f-249b-410f-b6af-fbf1f54819d9,true,4:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,5:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,6:REQUESTED,7:0,8:La: -19.78892, Lo: -40.46657,9:La: 25.13563, Lo: 165.49775,10:0xAF6d9e9fEe9b8Ed3A51C8aE28f0076F51c9Ff4d2,id:63562a4e-044c-4940-b26b-78713f1d07b1,initDate:1687668253365,completeDate:Not Yet,transporterId:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,null,2da8d28f-249b-410f-b6af-fbf1f54819d9,true,fromUserId:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,toUserId:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,status:COMPLETED,cost:0,fromLocation:La: -19.78892, Lo: -40.46657,toLocation:La: 25.13563, Lo: 165.49775,medSupplyChainAddr:0xAF6d9e9fEe9b8Ed3A51C8aE28f0076F51c9Ff4d2
    let id, initDate, completedDate, transporterId, rawMatId,medicineId, isMedicine,fromUserId, toUserId, status, cost,fromLocation, toLocation ;
    if(result != undefined && data != undefined){
        console.log("Result7", result)
        console.log("Result7 str", data)
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
                    <img className="h-16 w-auto" src={'distributor.svg'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">
                        <div className="text-lg font-bold pb-4">Disctributor Collected</div>
                        <div className="text-sm pt-2 pb-1 opacity-50 ">{trimAddressLong(id ? id: '')}</div>
                        <div className="text-sm flex"> 
                            <p className="text-button font-bold"> {status} </p>
                            <p className="pl-4 text-orange-300"> {timeStampToStr(initDate? initDate: '')} - {timeStampToStr(completedDate ? completedDate : '')} </p>
                        </div>
                        <div className="py-2 px-6 bg-purple-400 text-onPrimary-light w-fit rounded-full mt-8 mb-2">Medicine</div>
                        <div className="flex text-sm pt-6 pb-6 font-bold justify-between">
                            <p> Medicine ID: {trimAddress(medicineId ? medicineId : '')}</p>
                            <p className="text-orange-300">Cost: {cost}</p>
                        </div>
                        <div className="text-sm"> 
                            <p>Location from: {fromLocation}</p>
                            <p>Location to: {toLocation}</p>
                        </div>
                    </div>
                </div>
            ):(
                <div className='flex text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'distributor.svg'} alt="Supplier" />
                    <div className="text-xl pl-4 flex items-center"> </div> 
                    {/* <div className="text-xl pl-4 flex items-center"> Raw Material Request</div>  */}
                </div>
            )}  
        </>
    )
    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'distributor.svg'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">{ data } </div>
                </div>
            ):(
                <div className='text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'distributor.svg'} alt="Supplier" /> 
                </div>
            )}  
        </>
    )
};

export default DistributorCollected;