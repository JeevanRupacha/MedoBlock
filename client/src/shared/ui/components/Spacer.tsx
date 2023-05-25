interface SpacerProps{
    height?: Number,
    width?: Number
}

const Spacer = ({height = 0, width = 0}: SpacerProps) => {
    return(
        <div className={`px-${width} py-${height}`}></div>
        // <div className="py-10"></div>
    )
}

export default Spacer