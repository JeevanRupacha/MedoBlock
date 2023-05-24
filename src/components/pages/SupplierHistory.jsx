import React from "react";
import MainCard from "../MainCard";
import Nav from '../Nav';

const SupplierHistory = () => {
  const currentDate = new Date().toDateString();

  const supplier1Desc =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const supplier2Desc =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const supplier3Desc =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const supplier4Desc =
    "Supplied 12 Unit of raw material"
    +"Zocola, extracted from the" 
    +" Moralaca field ";
  const supplier5Desc =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const supplier6Desc =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const recieverid1 = "axcf3bj343hsx3cc2n34cv";
  const recieverid2 = "axcf3bj343hsx3cc2n34cv";
  const recieverid3 = "axcf3bj343hsx3cc2n34cv";
  const recieverid4 = "axcf3bj343hsx3cc2n34cv";
  const recieverid5 = "axcf3bj343hsx3cc2n34cv";
  const recieverid6 = "axcf3bj343hsx3cc2n34cv";

  const senderid1 = "axcf3bj343hsxcccn34nm";
  const senderid2 = "axcf3bj343hsxcccn34nm";
  const senderid3 = "axcf3bj343hsxcccn34nm";
  const senderid4 = "axcf3bj343hsxcccn34nm";
  const senderid5 = "axcf3bj343hsxcccn34nm";
  const senderid6 = "axcf3bj343hsxcccn34nm";

  return (
    <div className="bg-supply-black min-h-screen">
      <div className="max-w-7xl mx-auto sm:px-0 lg:px-0">
        <Nav
          Leftimagescr="images/navimg.svg"
          
          Button={<button className="rounded-8px text-sm font-medium h-8 w-24 ml-4 bg-black-primary ">Click Me</button>}
         
          Rightimagescr="images/logout.svg"
        />
        
<div className="pt-36" >
<div className="grid grid-cols-1 sm:grid-cols-1 rounded-md bg-wallet-msg items-center justify-center w-max h-10">
  <div className="text-center sm:text-right">
    <div className="flex items-center">
      <p className="text-sm font-semibold text-text-color ml-4">
        We notice that you haven’t connected your wallet yet. Please connect.
      </p>
      <img className="h-24px w-24px ml-4" src="images/wallet.svg" alt="Wallet" />
    </div>
  </div>
</div>
</div>
<div>
<button className="mt-4 bg-button hover:bg-green-700 text-text-color font-semibold py-1 px-10 rounded-full text-center">
        Connect Wallet
      </button>
</div>
    
 
<div className="pt-36 flex justify-center ">
  <div className="text-text-color font-semibold w-max mt-2 border-b-2 border-line text-xl text-center ">
            <p> Previous Supply History </p>
  </div>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 pt-36 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <MainCard
            date={currentDate}
            description={supplier1Desc}
            to={recieverid1}
            from={senderid1}
          />
          <MainCard
            date={currentDate}
            description={supplier2Desc}
            to={recieverid2}
            from={senderid2}
          />
          <MainCard
            date={currentDate}
            description={supplier3Desc}
            to={recieverid3}
            from={senderid3}
          />
          <MainCard
            date={currentDate}
            description={supplier4Desc}
            to={recieverid4}
            from={senderid4}
          />
          <MainCard
            date={currentDate}
            description={supplier5Desc}
            to={recieverid5}
            from={senderid5}
          />
          <MainCard
            date={currentDate}
            description={supplier6Desc}
            to={recieverid6}
            from={senderid6}
          />
        </div>
        <footer className="bg-supply-black pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-text-color">
            © 2023 Pharmaceutical Supply Chain. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
      </div>
    
  );
};

export default SupplierHistory;
