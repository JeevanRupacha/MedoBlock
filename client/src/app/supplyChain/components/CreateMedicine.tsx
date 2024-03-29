import { timeStampToStr } from "@/shared/utils/DateConverter";
import { trimAddress } from "@/shared/utils/trimAddress";
import { trimAddressLong } from "@/shared/utils/trimAddressLong";

interface CreateMedicineProps{
    data?: string;
}

const CreateMedicine = ({ data} : CreateMedicineProps) => {

    const result = data?.split(',')
    
    let id, name, description, manuId, expDate, fdaStatus, fdaAdminId, price, count, medSupplyChainAddr, manuDate;
    if(result != undefined && data != undefined){
        console.log("Result4", result)
        id = result[0]?.split(":")[1]
        name = result[1]?.split(":")[1]
        description = result[2]?.split(":")[1]
        manuId = result[3]?.split(":")[1]
        manuDate = result[4]?.split(":")[1]
        expDate = result[5]?.split(":")[1]
        fdaStatus = result[6]?.split(":")[1]
        fdaAdminId = result[7]?.split(":")[1]
        price = result[8]?.split(":")[1]
        count = result[9]?.split(":")[1]
        medSupplyChainAddr = result[9]?.split(":")[1]
    }

    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8 max-w-lg'>
                    <img className="h-16 w-auto" src={'drugs.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">
                        <div className="text-lg font-bold pb-4">Medicine Created</div>
                        <div className="font-bold pb-4"> {name} </div>
                        <div className="text-sm pt-2 pb-1 opacity-50 ">{trimAddressLong(id ? id: '')}</div>
                        <div className="text-sm flex"> 
                            <p className="text-button font-bold"> FDA {fdaStatus} </p>
                        </div>

                        <div className="tex-sm text-orange-300 pt-8">
                            <p> Created at: {timeStampToStr(manuDate ? manuDate : '')} </p>
                            {/* <p> Created at: {timeStampToStr(parseInt(manuDate ?manuDate : '', 16) * 1000)} </p> */}
                            <p> Exp at: {expDate} </p>
                        </div>
                        <div className="flex text-sm pt-4 pb-2 font-bold">
                            <p className="opacity-75">By: {trimAddressLong(manuId ? manuId : '')}</p>
                        </div>
                        <div className="flex text-sm pt-4 pb-2 font-bold justify-between">
                            <div className="flex"> Cost: <p className="text-orange-300 pl-2">${price ? price : ''} per unit</p></div>
                            <div className="flex ml-4"> Count: <p className="text-orange-300 pl-2">{count? count : ''} unit</p></div>
                        </div>
                        <div className="text-sm opacity-80 pt-4"> 
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            ):(
                <div className='flex text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'drugs.png'} alt="Supplier" />
                    <div className="text-xl pl-4 flex items-center"></div> 
                </div>
            )}  
        </>
    ) 
};

export default CreateMedicine;