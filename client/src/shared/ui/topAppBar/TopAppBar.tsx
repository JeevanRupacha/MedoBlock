"use client";

import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import LogedInButton from "../components/LogedInButton";

const TopAppBar = () => {

    const [isUserLogedIn, setLogedIn] = useState(true) 
    const [userType, setUserType] = useState("supplier") 
    const [userName, setUserName] = useState("John Doe") 
    const [userImage, setUserImage] = useState("usermodel.svg") 

    return (
      <nav>
        <div className="mx-auto sm:px-0 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-60" src="logo.svg" alt="img" />
              </div>
              <div className="hidden md:block">{/* Desktop Menu */}</div>
            </div>
            
            {isUserLogedIn ? (
                <LogedInButton
                  userImage = {userImage}
                  userType = {userType}
                  name = {userName}
                />
                ): (
                <LoginButton/>
              )}
          </div>
        </div>
      </nav>
    );
  };
  
export default TopAppBar;