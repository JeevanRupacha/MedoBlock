interface CreateMedicineProps{
    data?: string;
}

const CreateMedicine = ({ data} : CreateMedicineProps) => {
    return(
        <>
            {data != undefined?(
                <div className='text-onPrimary-dark flex gap-8'>
                    <img className="h-16 w-auto" src={'drugs.png'} alt="Supplier" /> 
                    <div className="p-2 rounded-xl">{ data } </div>
                </div>
            ):(
                <div className='text-onPrimary-dark'>
                    <img className="h-16 w-auto" src={'drugs.png'} alt="Supplier" /> 
                </div>
            )}  
        </>
    )
};

export default CreateMedicine;