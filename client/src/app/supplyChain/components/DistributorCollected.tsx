interface DistributorCollectedProps{
    data?: string;
}

const DistributorCollected = ({ data} : DistributorCollectedProps) => {
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