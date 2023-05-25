import React from 'react'

const TransportCard =({date,description,transportCost,to,from,productId}) => {
    return(
      
        <div className="bg-card-color shadow cursor-pointer rounded-2xl w-100 p-4  ">
        <h3 className="text-base font-semibold my-4 text-center text-green-700 hover:text-green-500">
          {date}
        </h3>
        <div className="px-8 pb-2 text-justify ">
          <p className="text-text-color  text-sm pt-4 font-semibold my-4 text-clip overflow-hidden max-w-[35ch] ">
            {description}
          </p>
          
          <p className="text-text-color font-semibold my-4 text-sm">
            <span className="inline-block mr-8">Transport Cost:   </span>
            <span className=" text-text-color ">{transportCost}</span>
          </p>
          <p className="text-text-color font-semibold my-4 text-sm">
            <span className="inline-block mr-8">To:   </span>
            <span className="inline-block underline text-text-color ">{to}</span>
          </p>
  
          <p className="text-white font-semibold my-4 text-sm">
            <span className="inline-block mr-4">From:   </span>
            <span className="inline-block underline text-text-color ">{from}</span>
          </p>

          <p className="text-white font-semibold my-1 text-sm">
            <span className="inline-block mr-4">ProdutId:   </span>
            <span className="inline-block underline text-text-color ">{productId}</span>
          </p>
        </div>
      </div>





    )
};
  export default  TransportCard;
 
