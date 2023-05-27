import {doc, setDoc, getDoc} from "firebase/firestore"; 
import { auth, googleProvider, db } from "../../../config/firebase_conn";
import Strings from "@/shared/utils/Strings";
import IUserRoleData from "@/shared/models/UserRoleData.model";

const addUserRole = async (userRole: IUserRoleData) => {
    if(userRole.id == undefined) return 
    const docRef = doc(db, Strings.USER_ROLE_DOC_NAME, userRole.id);
    const result = await setDoc(docRef, userRole);
    return result;
}

const getUserRole = async (docID?: string) => {
    if(docID == undefined) return 
    const docRef = doc(db,  Strings.USER_ROLE_DOC_NAME, docID);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export { addUserRole, getUserRole};