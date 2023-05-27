interface LoginButtonProps{
    onClick: () => void 
}

const LoginButton = ({onClick}: LoginButtonProps) => {
    return(
        <div className="flex items-center">
            <button
                onClick={() => onClick()} 
                className="bg-button text-black hover:bg-green-700 hover:text-black  rounded-full text-sm font-medium h-8 w-28 ml-2 "
            >
                <div className="flex justify-center">
                    Login
                    <img className="pl-2" alt="google icon" src="ic_google.svg"></img>
                </div>
            </button>
            <img className="h-8 w-8 ml-4" src="mdi_user-circle.svg" alt="imageswitch" />
        </div>
    );
}

export default LoginButton;