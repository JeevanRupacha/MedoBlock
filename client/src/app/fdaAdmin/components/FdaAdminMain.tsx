"use client";

import React, { useState } from "react";
import FdaAdminCard from "./FdaAdminCard";
import Spacer from "@/shared/ui/components/Spacer";
import LeftNav from "@/shared/ui/components/LeftNav";
import RightContainer from "@/shared/ui/components/RightContainer";
import LeftNavItem from "@/shared/ui/components/LeftNavItem";
import FdaRequests from "./FdaRequests";
import FdaAccepted from "./FdaAccepted";

const FdaAdminMain = () => {

  const [selectedNav, setNav] = useState(0);

  const LeftNavItems = 
    <>
      <LeftNavItem isSelected = {selectedNav == 0} label="Accepted" icon="Union.svg" onClick={() => {setNav(0)}}/>
      <LeftNavItem isSelected={selectedNav == 1} label="Requests" icon="add-hexagon.svg" onClick={() => {setNav(1)}}/>
    </>

  const MainContent =
  <>
    <div> 
      <p className="text-2xl text-onPrimary-dark/60"> 
        {selectedNav == 0 && <FdaAccepted/> }
        {selectedNav == 1 && <FdaRequests/> }
      </p>
    </div>
  </>

  return(
    <>
      <Spacer height={8}/>
      <Spacer height={8}/>
      <Spacer height={8}/>
      
      <div className="flex space-x-8">
        <LeftNav children={LeftNavItems}/>
        <RightContainer children = {MainContent}/>
      </div> 
    </>
  )
}

export default FdaAdminMain;