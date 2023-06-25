import Input from "@/shared/ui/components/Input"
import Loader from "@/shared/ui/components/Loader";
import { useEffect, useState } from "react";
import RawMaterialCard from "./RawMaterialCard";
import { useContext } from "react";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import BlockchainData from "@/shared/models/BlockchainData.model";
import { v4 as uuidv4 } from 'uuid';
import IRawMaterial from "@/shared/models/RawMaterial.model";
import { user } from "rxfire/auth";
import BigNumber from "bignumber.js";
import { timeStampToString } from "@/shared/utils/DateConverter";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import RequestRawMaterial from "@/app/manufacturer/components/RequestRawMaterial";
import RawMaterialsList from "@/shared/ui/components/RawMaterialsList";
import { delay } from "@/shared/utils/delay";


const CreateRawMaterial = () => {

    const [formData, setFormData] = useState({'name': '', 'description': '', 'amount': '', 'price': '', 'unit': ''});
    const [isLoading, setLoading] = useState(false)
    const [isFetching, setFecting] = useState(false);
    const [filteredRawMaterials, setFilteredRawMaterials] = useState<IRawMaterial[]>()

    const { 
        walletAddress,
        rawMaterials,
        getRawMaterials,
        rawMaterialsContract,
        supplyChainFactoryContract
    } = useContext(BlockchainContext) as BlockchainData;

    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString?userString:'')

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({...formData, [name]: e.target.value})
    }


    const handleSubmit = async () => {
        //todo create Medsupplychain contract 
        // update Supplier contract 

        setLoading(true);
        
        await rawMaterialsContract?.addRawMaterial(
            uuidv4(),
            formData.name,
            formData.description, 
            user.id, 
            formData.amount, 
            formData.price, 
            formData.unit
        )

        setFecting(true)
        await delay(10000)
        await getRawMaterials()
        setLoading(false)
        setFecting(false)
    }

    useEffect(() => {
        const filtered = rawMaterials?.filter((value)=> value.supplierId == user.id)
        setFilteredRawMaterials(filtered)
    }, [rawMaterials])
    
    return(
        <>
        <div>
            <p className="font-normal">Raw Materials</p>

            <div className="flex items-end pt-8">
                <div className="w-1/2 p-4 bg-onPrimary-light rounded-xl">
                    <Input 
                        placeholder="Name"
                        name="name"
                        type = "text"
                        value={formData.name}
                        handleChange={handleChange}
                    />

                    <Input 
                        placeholder="Description"
                        name="description"
                        type = "text"
                        value = { formData.description}
                        handleChange={handleChange}
                    />

                    <Input 
                        placeholder="Amount"
                        name="amount"
                        type = "text"
                        value={ formData.amount}
                        handleChange = {handleChange}
                    />

                    <Input 
                        placeholder="Price $"
                        name="price"
                        type = "text"
                        value={ formData.price}
                        handleChange= {handleChange}
                    />

                    <Input 
                        placeholder="Unit eg: Kg"
                        name="unit"
                        type = "text"
                        value={ formData.unit}
                        handleChange = {handleChange}
                    />
                </div>
                <div>
                    {isLoading ? (<LoaderSmall/>): (
                        <div onClick={ handleSubmit} className="align-buttom text-sm hover:bg-button/40 cursor-pointer rounded-md p-4 ml-8 bg-button text-onPrimary-light text-center font-medium"> Add Raw Material</div>
                    )}
                </div>
            </div>

            <p className="font-normal mt-8 mb-4">Lists</p>

            {isFetching && (<Loader/>) }
            <RawMaterialsList rawMaterials={filteredRawMaterials} clickable={false} onClick={() => {}}/>            
        </div>
        </>
    );
};

export default CreateRawMaterial;