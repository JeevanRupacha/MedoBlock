import { useState } from "react";
import DialogModal from "./DialogModal";
import Loader from "./Loader";

interface LoadingDialogProps{
    isLoading: boolean
}

const LoadingDialog = ({isLoading }: LoadingDialogProps) =>{
    return(
        <>
            <DialogModal open={isLoading} toggle = {() => {}} content = { <Loader/> }/>
        </>
    )
};

export default LoadingDialog;