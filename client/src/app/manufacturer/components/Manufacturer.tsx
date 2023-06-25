"use client";

import React, { useState } from "react";
import ManufacturerCard from "./ManufacturerCard";
import AOS from "aos";
import AddButton from "@/shared/ui/components/AddButton";
import Spacer from "@/shared/ui/components/Spacer";
import LeftNav from "@/shared/ui/components/LeftNav";
import LeftNavItem from "@/shared/ui/components/LeftNavItem";
import RightContainer from "@/shared/ui/components/RightContainer";
import RequestRawMaterial from "./RequestRawMaterial";
import CreateMedicine from "./CreateMedicine";
import ApplyFda from "./ApplyFda";
import Medicines from "./Medicines";
import FdaRequests from "./FdaRequests";
import ManuTransctions from "./ManuTransactions";


enum TabType{
    HISTORY,
    FDA_REQUEST
}

const Manufacturer = () => {
    const [selectedTab, setSelectedTab] = useState(TabType.HISTORY)  
    
    const onSelectTab = (tab: TabType) => {
        setSelectedTab(tab)
    }

    const fdaApproved1 = false;
    const fdaApproved2 = true;
  
    const date1 = "2023-05-05";
    const date2 = "2023-05-05";
    const date3 = "2023-05-05";
    const date4 = "2023-05-05";
    const date5 = "2023-05-05";
    const date6 = "2023-05-05";
  
    const totalUnit1 = 12;
  
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

    const [selectedNav, setNav] = useState(0);
    
    const LeftNavItems = 
      <>
        <LeftNavItem isSelected = {selectedNav == 0} label="Transactions" icon="Union.svg" onClick={() => {setNav(0)}}/>
        <LeftNavItem isSelected={selectedNav == 1} label="Create medicine" icon="add-hexagon.svg" onClick={() => {setNav(1)}}/>
        <LeftNavItem isSelected={selectedNav == 2} label="Apply FDA" icon="verify_ic.svg" onClick={() => {setNav(2)}}/>
        <LeftNavItem isSelected={selectedNav == 3} label="FDA Request" icon="hand.svg" onClick={() => {setNav(3)}}/>
        <LeftNavItem isSelected={selectedNav == 4} label="Request Raw Material" icon="wrap-text.svg" onClick={() => {setNav(4)}}/>
        <LeftNavItem isSelected={selectedNav == 5} label="Medicines" icon="pills.svg" onClick={() => {setNav(5)}}/>
      </>


    const MainContent =
    <>
      <div> 
        <p className="text-2xl text-onPrimary-dark/60"> 
          {selectedNav == 0 && <ManuTransctions/>}
          {selectedNav == 1 && <CreateMedicine/>}
          {selectedNav == 2 && <ApplyFda/>}
          {selectedNav == 3 && <FdaRequests/> }
          {selectedNav == 4 && <RequestRawMaterial/>}
          {selectedNav == 5 && <Medicines/>}
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
  
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <ManufacturerCard
            fdaApproved={fdaApproved1}
            date={date1}
            to={recieverid1}
            from={senderid1}
            productId={productId1}
            totalUnit={totalUnit1}
            price={price1}
            name={name1}
          />
          <ManufacturerCard
            fdaApproved={fdaApproved2}
            date={date2}
            to={recieverid2}
            from={senderid2}
            productId={productId2}
            totalUnit={totalUnit1}
            price={price2}
            name={name2}
          />
          <ManufacturerCard
            fdaApproved={fdaApproved1}
            date={date3}
            to={recieverid3}
            from={senderid3}
            productId={productId3}
            totalUnit={totalUnit1}
            price={price3}
            name={name3}
          />
          <ManufacturerCard
            fdaApproved={fdaApproved2}
            date={date4}
            to={recieverid4}
            from={senderid4}
            productId={productId4}
            totalUnit={totalUnit1}
            price={price4}
            name={name4}
          />
          <ManufacturerCard
            fdaApproved={fdaApproved1}
            date={date5}
            to={recieverid5}
            from={senderid5}
            productId={productId5}
            totalUnit={totalUnit1}
            price={price5}
            name={name5}
          />
          <ManufacturerCard
            fdaApproved={fdaApproved1}
            date={date6}
            to={recieverid6}
            from={senderid6}
            productId={productId6}
            totalUnit={totalUnit1}
            price={price6}
            name={name6}
          />
        </div> */}
      </div>
    );
  };

  export default Manufacturer;