"use client";

import React, { useState } from "react";
import AddButton from "@/shared/ui/components/AddButton";
import TransportCard from "./TransportCard";
import LeftNavItem from "@/shared/ui/components/LeftNavItem";
import Spacer from "@/shared/ui/components/Spacer";
import LeftNav from "@/shared/ui/components/LeftNav";
import RightContainer from "@/shared/ui/components/RightContainer";

const TransporterMain = () => {
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
  
    // return (
    //   <div className="min-h-screen">
    //     <AddButton imageSrc="manufacturer.svg" text="Add Transport" onClick={() => {}}/>
  
    const [selectedNav, setNav] = useState(0);
    
    const LeftNavItems = 
      <>
        <LeftNavItem isSelected = {selectedNav == 0} label="Supplies" icon="Union.svg" onClick={() => {setNav(0)}}/>
        <LeftNavItem isSelected={selectedNav == 1} label="Create Raw Material" icon="add-hexagon.svg" onClick={() => {setNav(1)}}/>
        <LeftNavItem isSelected={selectedNav == 2} label="Transport Requests" icon="hand.svg" onClick={() => {setNav(2)}}/>
        <LeftNavItem isSelected={selectedNav == 3} label="Requests" icon="wrap-text.svg" onClick={() => {setNav(3)}}/>
      </>


    const MainContent =
    <> 
      <div> 
        <p className="text-2xl text-onPrimary-dark/60"> 
          {selectedNav == 0 && "0"}
          {selectedNav == 1 && "1"}
          {selectedNav == 2 && "2" }
          {selectedNav == 3 && "3"}
        </p>
      </div>
    </>

    return (
      <div>
        <Spacer height={8}/>
        <Spacer height={8}/>
        <Spacer height={8}/>
        
        <div className="flex space-x-8">
          <LeftNav children={LeftNavItems}/>
          <RightContainer children = {MainContent}/>
        </div>

        <Spacer height={8}/>
        <Spacer height={8}/>
        <Spacer height={8}/>
      </div> 
    );
  
        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mx-2 md:mx-4 lg:mx-6 xl:mx-8">
        //   <TransportCard
        //     date={currentDate}
        //     description={transportDesc1}
        //     transportCost={transportCost1}
        //     to={recieverid1}
        //     from={senderid1}
        //     productId={productId1}
        //   />
        //   <TransportCard
        //     date={currentDate}
        //     description={transportDesc2}
        //     transportCost={transportCost2}
        //     to={recieverid2}
        //     from={senderid2}
        //     productId={productId2}
        //   />
        //   <TransportCard
        //     date={currentDate}
        //     description={transportDesc3}
        //     transportCost={transportCost3}
        //     to={recieverid3}
        //     from={senderid3}
        //     productId={productId3}
        //   />
        //   <TransportCard
        //     date={currentDate}
        //     description={transportDesc4}
        //     transportCost={transportCost4}
        //     to={recieverid4}
        //     from={senderid4}
        //     productId={productId4}
        //   />
        //   <TransportCard
        //     date={currentDate}
        //     description={transportDesc5}
        //     transportCost={transportCost5}
        //     to={recieverid5}
        //     from={senderid5}
        //     productId={productId5}
        //   />
        //   <TransportCard
        //     date={currentDate}
        //     description={transportDesc6}
        //     transportCost={transportCost6}
        //     to={recieverid6}
        //     from={senderid6}
        //     productId={productId6}
        //   />
        // </div>
      // </div>
    // );
  };

export default TransporterMain;
