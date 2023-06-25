import IRawMaterial from "@/shared/models/RawMaterial.model";
import RawMaterialCard from "@/app/supplier/components/RawMaterialCard";
import { useContext } from "react";
import { UsersContext } from "@/store/context/UsersContext";
import UserContextData from "@/shared/models/UserContextData.model";

interface RawMaterialsListProps{
    rawMaterials?: IRawMaterial[],
    clickable: boolean,
    onClick: (rawMat: IRawMaterial) => void 
}

const RawMaterialsList = ({rawMaterials, clickable, onClick}: RawMaterialsListProps) => {
    const { currentUser } = useContext(UsersContext) as UserContextData

    return(
        <>
            <div className="grid grid-cols-2 gap-10"> 
                { rawMaterials?.map( rawMat => {
                    if(currentUser?.id != rawMat.supplierId) return //filtering 

                    return <RawMaterialCard
                        rawMatID={rawMat.id}
                        description= { rawMat.description }
                        name= {rawMat.name}
                        timeStamp={ rawMat.timeStamp}
                        supplierId = { rawMat.supplierId}
                        amount={parseInt(rawMat.amount)}
                        price={rawMat.price}
                        unit={ rawMat.unit}
                        clickable = {clickable}
                        onClick={() => onClick(rawMat)}
                    />
                })} 
            </div>
        </>
    )
};

export default RawMaterialsList;