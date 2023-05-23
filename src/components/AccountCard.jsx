import React from 'react';

const AccountCard = ({ description, title, imageScr }) => {
  return (
    <div className="bg-homecard shadow rounded-3xl cursor-pointer">
      <div className="flex items-center justify-center h-24">
        <img className="h-16 w-auto" src={imageScr} alt="Supplier" />
      </div>
      <h3 className="text-xl font-semibold my-4 text-center text-text-color hover:text-green-500">
        {title}
      </h3>
      <div className="px-4 pb-2 rounded-b-3xl bg-card-color">
        <p className="text-text-color pt-4 text-clip overflow-hidden text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AccountCard;
