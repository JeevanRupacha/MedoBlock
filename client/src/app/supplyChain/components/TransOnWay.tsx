interface TransOnWayProps{
    data?: string;
}

const TransOnWay = ({ data} : TransOnWayProps) => {
    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'way.png'} alt="" /> 
                    <div className="p-2 rounded-xl">{ data } </div>
                </div>
            ):(
                <div className='text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'way.png'} alt="" /> 
                </div>
            )}  
        </>
    )
};

export default TransOnWay;