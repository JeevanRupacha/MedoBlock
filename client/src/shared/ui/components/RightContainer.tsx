interface RightContainerPorps{
    children: React.ReactNode
}

const RightContainer = ({children}: RightContainerPorps) => {
    return(
        <>
            <div className="w-full h-fit p-6 bg-card-color rounded-md">
                {children}
            </div>
        </>
    )
}

export default RightContainer;