import LoaderSmall from "./LoaderSmall"

interface LeftNavProps{
    children: React.ReactNode,
    isLoading?: Boolean
}

const LeftNav = ({children, isLoading = false}: LeftNavProps) => {
    return(
        <>
            <div className="w-80 h-fit bg-card-color text-onPrimary-dark/60 pt-4 pb-2 px-2 rounded-md">
                {isLoading ? (<LoaderSmall/>) : (children)}
            </div>
        </>
    )
}

export default LeftNav;