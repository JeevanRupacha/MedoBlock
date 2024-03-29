import UserRole from "@/shared/models/UserRole.model";

interface LogedInButtonProps{
    name: string,
    userImage: string,
    userType: UserRole,
    onSelectRole: () => void,
    logout: () => void 
}

const LogedInButton = ({
    name,
    userImage,
    userType, 
    onSelectRole,
    logout
}: LogedInButtonProps) => {
    const role: UserRole = userType;
    const roleValue: string = UserRole[role as unknown as keyof typeof UserRole];

    return(
        <div className="flex content-center items-center">
            <img className="w-8 ml-4 rounded-full" src={userImage} alt="img" />
            <div onClick={() => onSelectRole()} className="cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:scale-110 bg-card-color mx-4 flex-row items-center rounded-lg px-4 py-1 duration-300">
                <p className="flex justify-center text-onPrimary-dark font-bold">{name}</p>
                <div className="flex justify-center pl-1">
                    <div className="text-onSecondary-dark justify-items-center opacity-40 text-xs">
                        { roleValue }
                    </div>
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