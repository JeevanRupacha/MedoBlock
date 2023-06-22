interface UserCardProps{
    imageUrl?: string;
    name?: string;
    bgColor?: string;
}

const UserCard = ({
    name, imageUrl, bgColor = 'bg-card-color'
}: UserCardProps) => {
    return(
        <>
            <div className={`flex justify-center items-center py-2 px-4 rounded-2xl ${bgColor} mr-2`}>
                <img className="w-8 rounded-full" src= {imageUrl} alt="img" />
                <p className="pl-2 text-sm">{name}</p>
            </div>
        </> 
    )
}

export default UserCard;