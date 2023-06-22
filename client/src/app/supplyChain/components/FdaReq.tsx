interface FdaReqProps{
    data?: string;
}

const FdaReq = ({ data} : FdaReqProps) => {
    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'compliant.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">{ data } </div>
                </div>
            ):(
                <div className='text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'compliant.png'} alt="Supplier" /> 
                </div>
            )}  
        </>
    )
};

export default FdaReq;