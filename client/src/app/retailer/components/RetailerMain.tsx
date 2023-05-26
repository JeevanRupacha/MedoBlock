"use client";

import React from "react";
import RetailerCard from "./RetailerCard";
import AddButton from "@/shared/ui/components/AddButton";

const RetailerMain = () => {

    const fdaApproved1 = true 
  
    const date1 = "2023-05-05";
    const date2 = "2023-05-05";
    const date3 = "2023-05-05";
    const date4 = "2023-05-05";
    const date5 = "2023-05-05";
    const date6 = "2023-05-05";
  
    const totalUnit1 = 12 
  
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
  

    return(
        <>
        <div className="min-h-screen">
            <AddButton text="Add sold medicine" onClick={() => {}} imageSrc="manufacturer.svg"/>

        <div className="pt-12 flex justify-center ">
            <div className="text-text-color font-semibold w-[200px] mt-2 border-b-2 border-line text-xl text-center ">
                <p>Sell History</p>
            </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:ml-4 lg:ml-4 xl:ml-36 mt-10">
      <RetailerCard
        fdaApproved={fdaApproved1}
        date={date1}
        to={recieverid1}
        from={senderid1}
        productId={productId1}
        totalUnit={totalUnit1}
        price={price1}
        name={name1}
      />
      <RetailerCard
        fdaApproved={fdaApproved1}
        date={date2}
        to={recieverid2}
        from={senderid2}
        productId={productId2}
        totalUnit={totalUnit1}
        price={price2}
        name={name2}
      />
      <RetailerCard
        fdaApproved={fdaApproved1}
        date={date3}
        to={recieverid3}
        from={senderid3}
        productId={productId3}
        totalUnit={totalUnit1}
        price={price3}
        name={name3}
      />
      <RetailerCard
        fdaApproved={fdaApproved1}
        date={date4}
        to={recieverid4}
        from={senderid4}
        productId={productId4}
        totalUnit={totalUnit1}
        price={price4}
        name={name4}
      />
      <RetailerCard
        fdaApproved={fdaApproved1}
        date={date5}
        to={recieverid5}
        from={senderid5}
        productId={productId5}
        totalUnit={totalUnit1}
        price={price5}
        name={name5}
      />
      <RetailerCard
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
    </>
    )
}

export default RetailerMain;