"use client";

import React from "react";
import SupplierCard from "./SupplierCard";
import AddButton from "@/shared/ui/components/AddButton";
import Spacer from "@/shared/ui/components/Spacer";

const SupplierMain = () => {
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
    <AddButton imageSrc={"manufacturer.svg"} text="Add Supply" onClick={() => {}}/>

    <div className="pt-20 flex justify-center ">
        <div className="text-text-color font-semibold w-max mt-2 border-b-2 border-line text-xl text-center ">
            <p> Previous Supply History </p>
        </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 lg:grid-cols-3 xl:grid-cols-3 gap-6 ml-20 mr-20">
          <SupplierCard
            date={currentDate}
            description={supplier1Desc}
            to={recieverid1}
            from={senderid1}
          />
          <SupplierCard
            date={currentDate}
            description={supplier2Desc}
            to={recieverid2}
            from={senderid2}
          />
          <SupplierCard
            date={currentDate}
            description={supplier3Desc}
            to={recieverid3}
            from={senderid3}
          />
          <SupplierCard
            date={currentDate}
            description={supplier4Desc}
            to={recieverid4}
            from={senderid4}
          />
          <SupplierCard
            date={currentDate}
            description={supplier5Desc}
            to={recieverid5}
            from={senderid5}
          />
          <SupplierCard
            date={currentDate}
            description={supplier6Desc}
            to={recieverid6}
            from={senderid6}
          />
        </div>
        <Spacer height={8}/>
        <Spacer height={8}/>
    </div>
  );
};

export default SupplierMain;
