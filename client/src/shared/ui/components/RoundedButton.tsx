interface RounedButtonProps{
    buttonText: string,
    onClick: () => void 
}

export default function RounedButton(
    {buttonText, onClick} : RounedButtonProps
){
    return(
        <div
            onClick={() => onClick()} 
            className="w-full cursor-pointer border-green1/80 hover:bg-green1 border-2 bg-transparent rounded-full p-2"
        >
            <p className="text-onPrimary-dark m-auto text-sm">{buttonText}</p>
        </div>
    )
}