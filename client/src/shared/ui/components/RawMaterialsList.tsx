import IRawMaterial from "@/shared/models/RawMaterial.model";
import RawMaterialCard from "@/app/supplier/components/RawMaterialCard";

interface RawMaterialsListProps{
    rawMaterials?: IRawMaterial[],
    clickable: boolean,
    onClick: (rawMat: IRawMaterial) => void 
}

const RawMaterialsList = ({rawMaterials, clickable, onClick}: RawMaterialsListProps) => {
    return(
        <>
            <div className="grid grid-cols-2 gap-10"> 
                { rawMaterials?.map( rawMat => ( 
                    <RawMaterialCard
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
                ))} 
            </div>
        </>
    )
};

export default RawMaterialsList;