import React from "react";
import Nav from "../Nav";
// import RequestCard from '../RequestCard';
import ManuCard from "../ManuCard";
const FDARequest = () => {
  const FDArequested1 = "true";
  const FDArequested2 = "true";
  const FDArequested3 = "true";
  const FDArequested4 = "true";
  const FDArequested5 = "true";
  const FDArequested6 = "true";

  const date1 = "2023-05-05";
  const date2 = "2023-05-05";
  const date3 = "2023-05-05";
  const date4 = "2023-05-05";
  const date5 = "2023-05-05";
  const date6 = "2023-05-05";

  const totalUnit1 = "12";
  const totalUnit2 = "12";
  const totalUnit3 = "12";
  const totalUnit4 = "12";
  const totalUnit5 = "12";
  const totalUnit6 = "12";

  const price1 = "$12";
  const price2 = "$12";
  const price3 = "$12";
  const price4 = "$12";
  const price5 = "$12";
  const price6 = "$12";

  const name1 = "paracetamol";
  const name2 = "paracetamol";
  const name3 = "paracetamol";
  const name4 = "paracetamol";
  const name5 = "paracetamol";
  const name6 = "paracetamol";

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

  const productId1 = "axcf3bj343hsxcccn34nm";
  const productId2 = "axcf3bj343hsxcccn34nm";
  const productId3 = "axcf3bj343hsxcccn34nm";
  const productId4 = "axcf3bj343hsxcccn34nm";
  const productId5 = "axcf3bj343hsxcccn34nm";
  const productId6 = "axcf3bj343hsxcccn34nm";

  const button = "Distributed Medicine";

  return (
    <div className="bg-supply-black min-h-screen">
      <div className="max-w-7xl mx-auto sm:px-2 lg:px-2">
        <Nav
          Leftimagescr="images/navimg.svg"
          Button={
            <button className="rounded-8px text-sm font-medium h-8 w-24 ml-4 bg-black-primary ">
              Click Me
            </button>
          }
          Rightimagescr="images/logout.svg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-1 rounded-md bg-wallet-msg items-center justify-center w-max h-10  mt-36">
          <div className="text-center sm:text-right">
            <div className="flex items-center">
              <p className="text-sm font-semibold text-text-color ml-4  ">
                We notice that you haven’t connected your wallet yet. Please
                connect.
              </p>
              <img
                className="h-24px w-24px ml-4"
                src="images/wallet.svg"
                alt="Wallet"
              />
            </div>
          </div>
        </div>

        <div>
          <button className="mt-4 bg-button hover:bg-green-700 text-text-color font-semibold py-1 px-10 rounded-full text-center ml-36 mr-36">
            Connect Wallet
          </button>
        </div>

        <div className="pt-20 flex justify-center ">
          <div className="text-text-color font-semibold w-max mt-2 border-b-2 border-line text-xl text-center ">
            History <span className="text-green-700 ml-8">FDA request</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ml-4  sm:ml-4 lg:ml-4  mt-20">
          
          <ManuCard
            FDArequested={FDArequested1}
            date={date1}
            to={recieverid1}
            from={senderid1}
            productId={productId1}
            totalUnit={totalUnit1}
            price={price1}
            name={name1}
            
          button={button}
          />
          <ManuCard
            FDArequested={FDArequested2}
            date={date2}
            to={recieverid2}
            from={senderid2}
            productId={productId2}
            totalUnit={totalUnit2}
            price={price2}
            name={name2}
            button={button}
          />
          <ManuCard
            FDArequested={FDArequested3}
            date={date3}
            to={recieverid3}
            from={senderid3}
            productId={productId3}
            totalUnit={totalUnit3}
            price={price3}
            name={name3}
            button={button}
          />
          <ManuCard
            FDArequested={FDArequested4}
            date={date4}
            to={recieverid4}
            from={senderid4}
            productId={productId4}
            totalUnit={totalUnit4}
            price={price4}
            name={name4}
            button={button}
          />
          <ManuCard
            FDArequested={FDArequested5}
            date={date5}
            to={recieverid5}
            from={senderid5}
            productId={productId5}
            totalUnit={totalUnit5}
            price={price5}
            name={name5}
            button={button}
          />
          <ManuCard
            FDArequested={FDArequested6}
            date={date6}
            to={recieverid6}
            from={senderid6}
            productId={productId6}
            totalUnit={totalUnit6}
            price={price6}
            name={name6}
            button={button}
          />
        </div>
      
        <footer className="bg-supply-black pt-16 sm:pt-24 md:pt-36">
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

export default FDARequest;
