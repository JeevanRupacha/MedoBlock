interface SpacerProps{
    height?: Number,
    width?: Number
}

const Spacer = ({height = 0, width = 0}: SpacerProps) => {
    return(
        <div className={`w-${width} h-${height}`}></div>
    )
}

export default Spacer