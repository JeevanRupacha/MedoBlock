import Input from "@/shared/ui/components/Input"
import Loader from "@/shared/ui/components/Loader";
import { useState } from "react";

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
                        <div className="align-buttom text-sm hover:bg-button/40 cursor-pointer rounded-md p-4 ml-8 bg-button text-onPrimary-light text-center"> Add Raw Material</div>
                    )}
                </div>
            </div>

            <p className="font-normal mt-8 mb-4">Lists</p>

            <div>
                <div className="w-96 bg-onPrimary-light p-4 rounded-xl">
                    <p className="text-sm text-orange-300">affdd456664sdcv</p>
                    <p className="text-lg mt-2">Methene-091ox</p>
                    <p className="text-lg mt-4">Description</p>
                    <p className="text-sm mt-1">1-tetradecanol can be used as a raw material for organic synthesis and surfactants.</p>
                    <div className="h-[1px] bg-white/60 w-full mt-4 mb-4"></div>
                    <div className="flex items-center"><p className="text-base pr-2">Created:  </p><p className="text-sm text-orange-300">May 04 2023</p></div>        
                    <div className="flex items-center"><p className="text-base pr-2">Supplier:  </p><p className="text-sm text-orange-300">aacef4523xoccvd</p></div>        
                    <div className="flex items-center"><p className="text-base pr-2">Amount:  </p><p className="text-sm text-orange-300">13</p></div>        
                    <div className="flex items-center"><p className="text-base pr-2">Price:  </p><p className="text-sm text-orange-300">$50</p></div>        
                    <div className="flex items-center"><p className="text-base pr-2">Unit:  </p><p className="text-sm text-orange-300">KG</p></div>        
                    <div className="h-[1px] bg-white/60 w-full mt-4 mb-4"></div>
                    <div className="flex items-center justify-center"><p className="text-base pr-1">Supply Chain Address:  </p><p className="text-sm text-orange-300">bnoogsddxc3nv@xsaa9s9</p></div>        
                </div>
            </div>
        </div>
        </>
    );
};

export default CreateRawMaterial;