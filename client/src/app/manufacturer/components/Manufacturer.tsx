"use client";

import React, { useState } from "react";
import ManufacturerCard from "./ManufacturerCard";
import AOS from "aos";
import AddButton from "@/shared/ui/components/AddButton";

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
    
    return (
      <div>
        <AddButton text="Add Medicine" onClick={() => {}}/>
        <section>
            <div className="pt-20 flex cursor-pointer font-medium">
                <div>
                    <div 
                        onClick={() => onSelectTab(TabType.HISTORY)}
                        className={`${selectedTab == TabType.HISTORY ? ("text-button"): ("text-onSecondary-dark")}`}
                    >History</div>
                    {selectedTab == TabType.HISTORY &&(
                        <div className="h-0.5 bg-onSecondary-dark w-full"></div>
                    )}
                </div>
                <div className="pl-4">
                    <div
                        onClick={() => onSelectTab(TabType.FDA_REQUEST)} 
                        className={`${selectedTab == TabType.FDA_REQUEST ? ("text-button"): ("text-onSecondary-dark")}`}
                    >FDA Request</div>
                    {selectedTab == TabType.FDA_REQUEST &&(
                        <div className="h-0.5 bg-onSecondary-dark w-full"></div>
                    )}
                </div>
            </div>
        </section>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
        </div>
      </div>
    );
  };

  export default Manufacturer;