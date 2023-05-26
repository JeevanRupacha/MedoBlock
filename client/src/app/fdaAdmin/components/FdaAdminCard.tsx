import React from 'react';

interface FdaAdminCardProps{
    FDA: string,
    date: string,
    totalUnit: Number,
    price: string,
    name: string,
    from: string,
    productId: string,
}

const FdaAdminCard = ({
  FDA,
  date,
  totalUnit,
  price,
  name,
  from,
  productId,
}: FdaAdminCardProps) => {
  return (
    <div className="bg-card-color shadow cursor-pointer rounded-2xl w-100 p-4">
      {FDA && (
        <div className="flex items-center mb-4">
          <p className="text-xs text-formtext">FDA Approved Requested</p>
        </div>
      )}

      <div className="font-sans text-white ml-4 mb-4">
        <p className="text-md font-semibold mt-2">{date}</p>
      </div>

      <div className="flex items-center">
        <div>
          <img
            src="images/medicine.jpg"
            alt="medicine"
            className="w-14 h-14 mr-4 ml-4"
          />
        </div>
        <div className="flex items-end justify-end flex-1">
          <ul>
            <p className="text-sm text-text-color">Total Units: {totalUnit.toString()}</p>
            <p className="text-sm text-text-color">Price: {price}</p>
            <p className="text-sm text-text-color">Name: {name}</p>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm text-blue">From: {from}</p>
          <p className="text-sm text-blue">Product ID: {productId}</p>
        </div>
      </div>

        <div className="flex items-center justify-between mt-2">
          <button className="flex items-center justify-between border border-radius-md border-green-700 bg-button hover:bg-green-700 text-text-color font-semibold py-1 px-12 rounded-full text-center ">
            Accept
          </button>
          <button className="flex items-center justify-between border border-radius-md border-red-700 bg-red hover:bg-red-700 text-text-color font-semibold py-1 px-12 rounded-full text-center ">
            Declined
          </button>
        </div>
    </div>
  );
};

export default FdaAdminCard;