"use client";

import React from "react";
import FdaAdminCard from "./FdaAdminCard";

const FdaAdminMain = () => {

    const FDA1 = "FDA Approved Requested";
    const FDA2 = "FDA Approved Requested";
    const FDA3 = "FDA Approved Requested";
    const FDA4 = "FDA Approved Requested";
    const FDA5 = "FDA Approved Requested";
    const FDA6 = "FDA Approved Requested";

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
        <div className="bg-supply-black min-h-screen">
        <div className="sm:px-0 lg:px-0">
       

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
        <div className="text-text-color font-semibold w-[200px] mt-2 border-b-2 border-line text-xl text-center ">
                    <p> Request</p>
        </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-20">
        <FdaAdminCard
          FDA={FDA1}
          date={date1}
          
          from={senderid1}
          productId={productId1}
          totalUnit={totalUnit1}
          price={price1}
          name={name1}

        />
        <FdaAdminCard
          FDA={FDA2}
          date={date2}
          
          from={senderid2}
          productId={productId2}
          totalUnit={totalUnit1}
          price={price2}
          name={name2}
        />
        <FdaAdminCard
          FDA={FDA3}
          date={date3}
        
          from={senderid3}
          productId={productId3}
          totalUnit={totalUnit1}
          price={price3}
          name={name3}
        />
        <FdaAdminCard
          FDA={FDA4}
          date={date4}
        
          from={senderid4}
          productId={productId4}
          totalUnit={totalUnit1}
          price={price4}
          name={name4}
        />
        <FdaAdminCard
          FDA={FDA5}
          date={date5}
          from={senderid5}
          productId={productId5}
          totalUnit={totalUnit1}
          price={price5}
          name={name5}/>
      </div>
      </div>
    </div>
    </>
    )
}

export default FdaAdminMain;