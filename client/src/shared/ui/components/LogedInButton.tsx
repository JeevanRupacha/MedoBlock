interface LogedInButtonProps{
    name: string,
    userImage: string,
    userType: string
}

const LogedInButton = ({name, userImage, userType}: LogedInButtonProps) => {

    const logout = () => {
        alert("Log out");
    }

    return(
        <div className="flex content-center items-center">
            <img className="w-8 ml-4 pt-2" src={userImage} alt="img" />
            <div className="bg-card-color mx-4 rounded-lg justify-center px-4 py-1">
                <p className="text-onPrimary-dark font-bold">{name}</p>
                <div className="flex items-center justify-center pl-1">
                    <p className="text-onSecondary-dark justify-items-center opacity-40 text-xs">{userType}</p>
                    <img alt="" src="ic_drop_down.svg" className="pt-1 pl-1"></img>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => logout()}>
                <img className="w-8" src="ic_logout.svg" alt="img" />
            </div>
        </div>
    );
}

export default LogedInButton;