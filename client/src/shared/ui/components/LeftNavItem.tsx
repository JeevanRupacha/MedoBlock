interface LeftNavItemProps{
    label: string,
    onClick: () => void,
    icon: string,
    isSelected: boolean
}

const LeftNavItem = ({
    label, onClick, icon, isSelected
}: LeftNavItemProps) => {
    return(
        <>
            <div
              onClick={() => onClick()} 
              className={`${isSelected && ("bg-primary-dark")} p-2 flex items-center hover:bg-primary-dark rounded-md cursor-pointer w-auto`}
            > 
              <img src = {icon} alt="" className="w-6"></img>
              <p className="pl-4 select-none">{label}</p>
            </div>
            <div className="h-2"></div>
        </>
    )
}

export default LeftNavItem;