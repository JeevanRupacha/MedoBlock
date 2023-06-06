"use client";

import React, { useEffect, useState } from "react";
import LoginButton from "../components/LoginButton";
import LogedInButton from "../components/LogedInButton";
import { auth, googleProvider, db } from "../../../config/firebase_conn";
import { signInWithPopup } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import UserRole from "@/shared/models/UserRole.model";
import ChooseRole from "../components/ChooseRole";
import { addUserRole, getUserRole} from "./apiHelper";
import IUserRoleData from "@/shared/models/UserRoleData.model";
import getEnumKeyByValue from "@/shared/utils/getEnumByValue";
import { useRouter } from 'next/navigation';
import IUser from "@/shared/models/User.model";

const TopAppBar = () => {
    const [isUserLogedIn, setLogedIn] = useState(false) 
    const [user, setUser] = useState<IUser>()
    const [openChooseRole, setOpenChooseRole] = useState(false)
    const [roleFetchLoading, setRoleLoadig] = useState(false)

    const { push } = useRouter()

    const onLogin = async () => {
      try{
        signInWithPopup(auth, googleProvider);
      }catch(error){
        console.log(error);
      }
    }

    const logOut = async () => {
      auth.signOut();
    }

    const onSelectRole = async (role: UserRole, userArg?: IUser) => {
      setOpenChooseRole(false);
      const roleData = {
          "id": userArg?.id?userArg.id: "",
          "role": role
        } as IUserRoleData 

        if(role != undefined && userArg != undefined){
          addUserRole(roleData)
          fetchRole(userArg);
        }
    }

    const fetchRole = async (userArg: IUser) => {
        setRoleLoadig(true);
        const result = await getUserRole(userArg.id); 
        let role = getEnumKeyByValue(UserRole, result?.role);
        if(role == null){
          role = UserRole.NONE 
        }
        const newUser = {...userArg, "role": role} as IUser
        setUser(newUser);
        setRoleLoadig(false);  
    }

    useEffect(() => {
      switch(user?.role.toLowerCase()){
        case UserRole.CARRIER.toLowerCase(): 
          push('/transporter');
          break;
        case UserRole.FDA_ADMIN.toLowerCase():
          push('/fdaAdmin');
          break;
        case UserRole.CUSTOMER.toLowerCase():
          push('/customer');
          break;
        case UserRole.MANUFACTURER.toLowerCase():
          push('/manufacturer');
          break;
        case UserRole.NONE.toLowerCase(): 
          push('/');
          break;
        case UserRole.RETAILER.toLowerCase(): 
          push('/retailer');
          break;
        case UserRole.SUPPLIER.toLowerCase():
          push('/supplier'); 
          break;    
        default:     
          break;     
      }
    }, [user?.role])
    
    useEffect(() =>{
      if(
        !roleFetchLoading &&
        user?.id != undefined &&
        (user?.role == UserRole.NONE || user?.role == null)
      ){
        setOpenChooseRole(true);
      }else{
        setOpenChooseRole(false);
      }
    },[user])

    useEffect(() => {
      authState(auth).subscribe(user => {
        const resultUser = {
          "id": user?.uid,
          "name": user?.displayName,
          "email": user?.email,
          "role": UserRole.NONE,
          "imageUrl": user?.photoURL
        } as IUser;
        setUser(resultUser)
        fetchRole(resultUser)
      });

      // when you load or reload the page
      auth.onAuthStateChanged(async auth => {
        if (auth) {
          setLogedIn(true);
          console.log('Loged in');
        } else {
          setLogedIn(false);
          console.log('not logged in');
        }
      });
    },[auth])


    return (
      <nav>
        <ChooseRole
          open = { openChooseRole }
          onClose={() => setOpenChooseRole(false)}
          onSelect={(role) => onSelectRole(role, user)}
        />

        <div className="mx-auto sm:px-0 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-56" src="logo.svg" alt="img" />
              </div>
              <div className="hidden md:block">{/* Desktop Menu */}</div>
            </div>

            {isUserLogedIn ? (
                <LogedInButton
                  userImage = {user?.imageUrl? user.imageUrl : ""}
                  userType = {user?.role? user.role : UserRole.NONE}
                  name = {user?.name? user.name : ""}
                  logout={() => logOut()}
                />
                ): (
                <LoginButton
                 onClick={() => onLogin()}
                />
              )}
          </div>
        </div>
      </nav>
    );
  };
  
export default TopAppBar;