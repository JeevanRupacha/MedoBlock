interface TransportInitProps{
    data?: string;
}

const TransportInit = ({ data} : TransportInitProps) => {
    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'rocket.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">{ data } </div>
                </div>
            ):(
                <div className='text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'rocket.png'} alt="Supplier" /> 
                </div>
            )}  
        </>
    )
};

export default TransportInit;