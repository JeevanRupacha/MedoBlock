interface SupplierCardProps{
    date: string,
    description: string,
    to: string,
    from: string 
}

const SupplierCard = ({ date, description, to, from }: SupplierCardProps) => {
    return (
      <div className="bg-card-color shadow cursor-pointer rounded-2xl w-100 p-4  ">
        <h3 className="text-base font-semibold my-4 text-center text-text-color hover:text-green-500">
          {date}
        </h3>
        <div className="px-8 pb-2 text-justify ">
          <p className="text-text-color  text-sm pt-4 font-semibold my-4 text-clip overflow-hidden max-w-[35ch] ">
            {description}
          </p>
          
          <p className="text-text-color font-semibold my-4 text-sm">
            <span className="inline-block mr-8">To:   </span>
            <span className="inline-block underline text-blue ">{to}</span>
          </p>
  
          <p className="text-white font-semibold my-4 text-sm">
            <span className="inline-block mr-4">From:   </span>
            <span className="inline-block underline text-blue ">{from}</span>
          </p>
        </div>
      </div>
    );
  };

  export default SupplierCard;