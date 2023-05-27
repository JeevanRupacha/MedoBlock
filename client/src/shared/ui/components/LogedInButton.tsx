import UserRole from "@/shared/models/UserRole.model";

interface LogedInButtonProps{
    name: string,
    userImage: string,
    userType: UserRole,
    logout: () => void 
}

const LogedInButton = ({
    name,
    userImage,
    userType, 
    logout
}: LogedInButtonProps) => {
    return(
        <div className="flex content-center items-center">
            <img className="w-8 ml-4 mt-2 rounded-full" src={userImage} alt="img" />
            <div className="bg-card-color mx-4 flex-row items-center rounded-lg px-4 py-1">
                <p className="flex justify-center text-onPrimary-dark font-bold">{name}</p>
                <div className="flex justify-center pl-1">
                    <p className="text-onSecondary-dark justify-items-center opacity-40 text-xs">
                        {UserRole[userType]}
                    </p>
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