import Input from "@/shared/ui/components/Input"
import Loader from "@/shared/ui/components/Loader";
import { useState } from "react";
import RawMaterialCard from "./RawMaterialCard";

const CreateRawMaterial = () => {
    
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        //todo create Medsupplychain contract 
        // update Supplier contract 
    }

    const [isLoading, setLoading] = useState(false)
    
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
                        value=""
                        handleChange={() => {}}
                    />

                    <Input 
                        placeholder="Description"
                        name="description"
                        type = "text"
                        value=""
                        handleChange={() => {}}
                    />

                    <Input 
                        placeholder="Amount"
                        name="amount"
                        type = "text"
                        value=""
                        handleChange={() => {}}
                    />

                    <Input 
                        placeholder="Price $"
                        name="price"
                        type = "text"
                        value=""
                        handleChange={() => {}}
                    />

                    <Input 
                        placeholder="Unit eg: Kg"
                        name="unit"
                        type = "text"
                        value=""
                        handleChange={() => {}}
                    />
                </div>
                <div>
                    {isLoading ? (<Loader/>): (
                        <div className="align-buttom text-sm hover:bg-button/40 cursor-pointer rounded-md p-4 ml-8 bg-button text-onPrimary-light text-center font-medium"> Add Raw Material</div>
                    )}
                </div>
            </div>

            <p className="font-normal mt-8 mb-4">Lists</p>

            <div>
                <RawMaterialCard
                    rawMatID="affdd456664sdcv"
                    description="1-tetradecanol can be used as a raw material for organic synthesis and surfactants."
                    name="Methene-091ox"
                    timeStamp="May 04 2023"
                    supplierId="aacef4523xoccvd"
                    amount={12}
                    price="$50"
                    unit="KG"
                />
            </div>
        </div>
        </>
    );
};

export default CreateRawMaterial;