import React from 'react';

interface AccountCardProps{
    description: string, 
    title: string,
    imageSrc: string 
}

const AccountCard = ({ description, title, imageSrc }: AccountCardProps) => {
  return (
    <div className='px-4'>
    <div className="transition ease-in-out delay-150 bg-blue-500 hover:scale-105 bg-red-500 border-2 w-96 border-transparent shadow rounded-3xl cursor-pointer pt-6
      hover:border-2 hover:border-red-400/30 hover:drop-shadow-md hover:-translate-y1"
    >
      <div className="flex items-center justify-center h-24">
        <img className="h-16 w-auto" src={imageSrc} alt="Supplier" />
      </div>
      <h3 className="text-xl font-semibold my-4 text-center text-text-color hover:text-green-500">
        {title}
      </h3>
      <div className="rounded-b-3xl h-20 bg-card-color">
        <p className="text-onSecondary-dark pt-4 text-center text-clip overflow-hidden px-4 pb-8">
          {description}
        </p>
      </div>
    </div>
    </div>
  );
};

export default AccountCard;