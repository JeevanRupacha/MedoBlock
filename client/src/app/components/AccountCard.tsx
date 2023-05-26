import React from 'react';

interface AccountCardProps{
    description: string, 
    title: string,
    imageSrc: string 
}

const AccountCard = ({ description, title, imageSrc }: AccountCardProps) => {
  return (
    <div className="bg-homecard border-2 border-transparent shadow rounded-3xl cursor-pointer pt-4 
      hover:border-2 hover:border-red-400/50 hover:drop-shadow-md"
    >
      <div className="flex items-center justify-center h-24">
        <img className="h-16 w-auto" src={imageSrc} alt="Supplier" />
      </div>
      <h3 className="text-xl font-semibold my-4 text-center text-text-color hover:text-green-500">
        {title}
      </h3>
      <div className="px-2 pb-2 rounded-b-3xl bg-card-color">
        <p className="text-onSecondary-dark pt-4 text-center text-clip overflow-hidden px-2 pb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AccountCard;