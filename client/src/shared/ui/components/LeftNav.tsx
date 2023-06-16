
interface LeftNavProps{
    children: React.ReactNode
}

const LeftNav = ({children}: LeftNavProps) => {
    return(
        <>
            <div className="w-80 h-fit bg-card-color text-onPrimary-dark/60 pt-4 pb-2 px-2 rounded-md">
                {children}
            </div>
        </>
    )
}

export default LeftNav;