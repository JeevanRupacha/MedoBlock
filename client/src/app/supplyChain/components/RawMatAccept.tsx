
interface RawMatAcceptProps{
    data?: string;
}

const RawMatAccept = ({ data } : RawMatAcceptProps) => {
    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'agreement.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">{ data } </div>
                </div>
            ):(
                <div className='text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'agreement.png'} alt="Supplier" /> 
                </div>
            )}  
        </>
    )
};

export default RawMatAccept;