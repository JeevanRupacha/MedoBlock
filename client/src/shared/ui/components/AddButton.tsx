"use client";

import { defaultMaxListeners } from "events"

interface AddButtonProps{
    text: string,
    imageSrc: string,
    onClick: () => void 
}

const AddButton = ({
    text, onClick,imageSrc
}: AddButtonProps) => {
    return(
        <div
            onClick={() => onClick} 
            className="pt-36 flex flex-col items-center justify-center"
        >
            <img
                className="h-22 w-auto"
                src={imageSrc}
                alt="manufacturer"
            />
            <button className="mt-8 bg-button hover:bg-green-700 text-base text-onPrimary-light font-semibold py-2 px-6 rounded-md">
                {text}
            </button>
        </div>
    );
}

export default AddButton;