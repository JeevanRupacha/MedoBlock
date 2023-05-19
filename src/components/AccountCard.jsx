const AccountCard = ({description, title, imageScr}) => {

    return(
        <div className="bg-neutral-900 shadow rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center h-24">
                <img className="h-16 w-auto" src={imageScr} alt="Supplier" />
            </div>
            <h3 className="text-xl font-semibold my-4 text-center text-white hover:text-green-500">
                {title}
            </h3>
            <div className="px-4 pb-2 rounded-b-3xl bg-red">
                <p className="text-gray-300 pt-4 text-center text-clip overflow-hidden text-justify">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AccountCard;