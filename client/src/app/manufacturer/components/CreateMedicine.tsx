import BlockchainData from "@/shared/models/BlockchainData.model";
import { IMedicine } from "@/shared/models/IMedicine.model";
import Input, { TextArea } from "@/shared/ui/components/Input";
import LoaderSmall from "@/shared/ui/components/LoaderSmall";
import { BlockchainContext } from "@/store/context/BlockchainContext";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateMedicine = () => {
    const [formData, setFormData] = useState({'name': '', 'description': '', 'count': '', 'price': '', 'expDate': ''});
    const [isLoading, setLoading] = useState(false)
    const [contractAddress, setContractAddress] = useState<string[]>([])
    const [selectedConAddress, setSelectContractAddress] = useState('')
    const [showAddrOpt, setShowAddrOpt] = useState(false)

    const { 
        supplyChainFactoryContract,
        getSupplyChainContract,
        medicinesContract
    } = useContext(BlockchainContext) as BlockchainData;

    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString?userString:'')

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({...formData, [name]: e.target.value})
    }

    const handleChangeTextArea  = (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
        setFormData({...formData, [name]: e.target.value})
    }

    const createMedicine = async () => {
        setLoading(true);
        const timeStamp = Date.now()
        const medicine = {
            id: uuidv4(),
            name: formData.name,
            description: formData.description,
            manuId: user.id.toString(),
            manuDate: timeStamp,
            expDate: formData.expDate.toString(),
            fdaStatus: 'NONE',
            fdaAdminId: '',
            price: formData.price,
            count: parseInt(formData.count),
            medSupplyChainAddr: selectedConAddress
        } as IMedicine

        console.log("Med", medicine)
        const medicineStr = JSON.stringify({...medicine,}).replace(/"|"|{|}/g, '');

        if(getSupplyChainContract == undefined) return alert("No Supply Chain Contract")
        const supplyChainContract = getSupplyChainContract(selectedConAddress)

        await supplyChainContract?.addSupplyChain('createMedicne', medicineStr)
        await medicinesContract?.addMedicine(
            medicine.id, medicine.name, medicine.description, medicine.manuId, medicine.expDate, medicine.fdaStatus, medicine.fdaAdminId, medicine.price, medicine.count, medicine.medSupplyChainAddr
        )

        setLoading(false);
    }

    const getAllContractAddress = async () => {
        const addresses: string[] = await supplyChainFactoryContract?.getAllAddresses()
        setContractAddress(addresses)
    }

    useEffect(() => {
       getAllContractAddress();     
    },[supplyChainFactoryContract])

    return(
        <> 
            <div><p> Create New Medicine </p></div>

            <div className="flex items-end pt-8">
                <div className="w-1/2 p-4 bg-onPrimary-light rounded-xl">
                    <div onClick={() => setShowAddrOpt(true)} className="my-2 w-full rounded-sm p-2 cursor-pointer outline-none bg-primary-dark text-white/60 border-none text-sm">
                        {selectedConAddress == ''? (
                            <p> Select Supply Chain</p>
                        ):(
                            <p>{selectedConAddress}</p>
                        )}
                    </div>

                    {showAddrOpt &&(
                        <div className="h-52 w-[440px] overflow-y-scroll rounded-lg y-2 fixed p-2 cursor-pointer outline-none bg-primary-dark text-white/60 border-none text-sm">
                        {contractAddress.map(address => {
                            return <>
                                <div 
                                    onClick={() => { 
                                        setSelectContractAddress(address)
                                        setShowAddrOpt(false)
                                    }}
                                    className="my-2 p-2 bg-blue/30 rounded-lg"
                                >{address} </div>
                            </>
                        })}
                        </div>
                    )}
                    

                    <Input 
                        placeholder="Name"
                        name="name"
                        type = "text"
                        value={formData.name}
                        handleChange={handleChange}
                    />

                    <TextArea 
                        placeholder="Description"
                        name="description"
                        value = { formData.description}
                        handleChange={handleChangeTextArea}
                    />

                    <Input 
                        placeholder="Exp Date"
                        name="expDate"
                        type = "date"
                        value={ formData.expDate}
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
                        placeholder="Count eg: how many"
                        name="count"
                        type = "text"
                        value={ formData.count}
                        handleChange = {handleChange}
                    />
                </div>
                <div>
                    {isLoading ? (<LoaderSmall/>): (
                        <div onClick={ () => createMedicine() } className="align-buttom text-sm hover:bg-button/40 cursor-pointer rounded-md p-4 ml-8 bg-button text-onPrimary-light text-center font-medium"> Create</div>
                    )}
                </div>
            </div>
        </>

    )
}

export default CreateMedicine;