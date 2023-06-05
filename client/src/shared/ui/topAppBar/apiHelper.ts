import {doc, setDoc, getDoc} from "firebase/firestore"; 
import { auth, googleProvider, db } from "../../../config/firebase_conn";
import Strings from "@/shared/utils/Strings";
import IUserRoleData from "@/shared/models/UserRoleData.model";
import IUser from "@/shared/models/User.model";

const addUserRole = async (userRole: IUserRoleData) => {
    if(userRole.id == undefined) return 
    const docRef = doc(db, Strings.USER_ROLE_DOC_NAME, userRole.id);
    const result = await setDoc(docRef, userRole);
    return result;
}

const addUser = async (user: IUser) => {
    if(user.id == undefined) return 
    const docRef = doc(db, Strings.USER_DOC_NAME, user.id);
    const result = await setDoc(docRef, user);
    return result;
}

const getUserRole = async (docID?: string) => {
    if(docID == undefined) return 
    const docRef = doc(db,  Strings.USER_ROLE_DOC_NAME, docID);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

const getUser = async (docID?: string) => {
    if(docID == undefined) return 
    const docRef = doc(db,  Strings.USER_DOC_NAME, docID);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export { addUserRole, getUserRole, addUser, getUser};