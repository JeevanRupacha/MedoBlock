import React from "react";
import Nav from "../Nav";
import TransportCard from "../TransportCard";

const TransportHistory = () => {
  const currentDate = new Date().toDateString();

  const transportDesc1 =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const transportDesc2 =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const transportDesc3 =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const transportDesc4 =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const transportDesc5 =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";
  const transportDesc6 =
    "Supplied 12 Unit of raw material" +
    "Zocola, extracted from the" +
    " Moralaca field ";

  const transportCost1 = "30";
  const transportCost2 = "30";
  const transportCost3 = "30";
  const transportCost4 = "30";
  const transportCost5 = "30";
  const transportCost6 = "30";

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

        <div className="pt-10 sm:pt-16 md:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 rounded-md bg-wallet-msg items-center justify-center w-max h-10">
            <div className="text-center sm:text-right">
              <div className="flex items-center">
                <p className="text-sm font-semibold text-text-color ml-4">
                  We notice that you haven’t connected your wallet yet. Please connect.
                </p>
                <img className="h-6 w-6 ml-4" src="images/wallet.svg" alt="Wallet" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 sm:pt-2">
          <button className="mt-4 bg-button hover:bg-green-700 text-text-color font-semibold py-1 px-6 rounded-full text-center">
            Connect Wallet
          </button>
        </div>

        <div className="pt-10 sm:pt-16 md:pt-20 flex justify-center">
          <div className="text-text-color font-semibold w-max mt-2 border-b-2 border-line text-xl text-center">
            <p>Previous Transport History</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 sm:pt-16 md:pt-20 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <TransportCard
            date={currentDate}
            description={transportDesc1}
            transportCost={transportCost1}
            to={recieverid1}
            from={senderid1}
            productId={productId1}
          />
          <TransportCard
            date={currentDate}
            description={transportDesc2}
            transportCost={transportCost2}
            to={recieverid2}
            from={senderid2}
            productId={productId2}
          />
          <TransportCard
            date={currentDate}
            description={transportDesc3}
            transportCost={transportCost3}
            to={recieverid3}
            from={senderid3}
            productId={productId3}
          />
          <TransportCard
            date={currentDate}
            description={transportDesc4}
            transportCost={transportCost4}
            to={recieverid4}
            from={senderid4}
            productId={productId4}
          />
          <TransportCard
            date={currentDate}
            description={transportDesc5}
            transportCost={transportCost5}
            to={recieverid5}
            from={senderid5}
            productId={productId5}
          />
          <TransportCard
            date={currentDate}
            description={transportDesc6}
            transportCost={transportCost6}
            to={recieverid6}
            from={senderid6}
            productId={productId6}
          />
        </div>

        <footer className="bg-supply-black pt-10 sm:pt-16 md:pt-20">
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

export default TransportHistory;
