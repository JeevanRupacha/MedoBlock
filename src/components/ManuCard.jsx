import React from "react";
const ManuCard = ({
  FDAApproved,
  date,
  totalUnit,
  price,
  name,
  to,
  from,
  productId,
  button,
  FDArequested,
}) => {
  return (
    <div className="bg-card-color shadow cursor-pointer rounded-2xl w-100 p-4">
      <div className="flex items-start justify-between mb-4">
        {FDAApproved && (
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-700 rounded-full flex items-center justify-center mr-2">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 16.17l-4.17-4.17-1.42 1.42 5.59 5.59 12-12-1.42-1.42z"
                />
              </svg>
            </div>
            <p className="text-xs text-green-500">FDA Approved</p>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between mb-4">
        {FDArequested && (
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 16.17l-4.17-4.17-1.42 1.42 5.59 5.59 12-12-1.42-1.42z"
                />
              </svg>
            </div>
            <p className="text-xs text-text-color font-sans">FDA Requested</p>
          </div>
        )}
      </div>

      <div className="font-sans text-white ml-4 mb-4">
        <p className="text-md font-semibold  mt-2">{date}</p>
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
            <p className="text-sm text-text-color">TotalUnits: {totalUnit}</p>
            <p className="text-sm text-text-color">Price: {price}</p>
            <p className="text-sm text-text-color">Name: {name}</p>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <p className="text-sm text-blue">From: {from}</p>
          <p className="text-sm text-blue">To: {to}</p>
          <p className="text-sm text-blue">ProductId: {productId}</p>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <div className="mx-auto">
          <button className="flex items-center justify-between border border-radius-md border-green-700 hover:bg-green-700 text-text-color font-semibold py-1 px-10 rounded-full text-center mt-4">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManuCard;
