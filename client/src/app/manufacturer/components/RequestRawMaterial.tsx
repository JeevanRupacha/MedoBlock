import React, { useState, useContext, FormEvent} from 'react';
import IRawMaterial from '@/shared/models/RawMaterial.model';
import BlockchainData from '@/shared/models/BlockchainData.model';
import { BlockchainContext } from '@/store/context/BlockchainContext';
import { UsersContext } from '@/store/context/UsersContext';
import IUser from '@/shared/models/User.model';
import UserContextData from '@/shared/models/UserContextData.model';
import RawMaterialsList from '@/shared/ui/components/RawMaterialsList';
import DialogModal from '@/shared/ui/components/DialogModal';
import Input from '@/shared/ui/components/Input';
import { delay } from '@/shared/utils/delay';
import LoadingDialog from '@/shared/ui/components/LoadingDialog';
import { v4 as uuidv4 } from 'uuid';
import IRawMaterialRequest from '@/shared/models/RawMaterialRequest.model';
import { todayDate } from '@/shared/utils/DateConverter';
import { RawMatRequestToString } from '@/shared/utils/Converter';
import Loader from '@/shared/ui/components/Loader';
import LoaderSmall from '@/shared/ui/components/LoaderSmall';

const RequestRawMaterial = () => {
    const [isLoading, setLoading] = useState(false)
    const [isFetching, setFecting] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [rawMaterial, setRawMaterial] = useState<IRawMaterial>()
    const [amount, setAmount] = useState('0')

    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString?userString:'')

    const { 
        walletAddress,
        rawMaterials,
        rawMaterialsContract,
        supplyChainFactoryContract,
        getSupplyChainContract,
        rawMaterialRequestContract
    } = useContext(BlockchainContext) as BlockchainData;

    const { users } = useContext(UsersContext) as UserContextData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value) 
    }

    //0x2Ae0F66a8Ae0DDc1c6aEDc92d0c7654945601eD5
    //"id:f58808d6-feb2-43f5-8d93-1a686c72132a,name:rawMaterial.name,count:10,date:06/18/2023,manuId:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,supplierId:ZsDkAMZKqvbEs6TONNKwbOA4lkl1,rawMaterialId:ad9306be-65fb-4b5a-821a-e9bdce765f50,requestStatus:false,medSupplyChainAddr:address"

    const onRequest = async () => {
        setShowDialog(false)
        setLoading(true)

        // localStorage.setItem("loading", "true")
        // create medSupplyChain
        await supplyChainFactoryContract?.createMedSupplyChain()

        await delay(35000)

        // get medSupplyChain address 
        const address = await supplyChainFactoryContract?.getLastSupplyChainAddr()
        console.log("SupplyChainAddress lastest", address)

        // get medSupplyChain by address
        if(getSupplyChainContract == undefined){
            return alert("Supply chain Contract is undefined")
        }

        const supplyChainContract = await getSupplyChainContract(address)
        console.log("SupplyChainContract", supplyChainContract)


        if(rawMaterial == undefined){
            return alert("No raw Material selected")
        }

        // add request to supply chain
        const rawMatRequest = {
            id: uuidv4(),
            name: rawMaterial.name,
            count: parseInt(amount),
            date: todayDate(),
            manuId: user?.id,
            supplierId: rawMaterial?.supplierId,
            rawMaterialId: rawMaterial?.id,
            requestStatus: false,
            medSupplyChainAddr: address 
        } as IRawMaterialRequest

        const strRawMatReq: string = RawMatRequestToString(rawMatRequest)
        console.log("StringrawMAt", strRawMatReq)
        await supplyChainContract?.addSupplyChain("rawMaterialRequest", strRawMatReq)
        
        // delay(1000)
        // await supplyChainContract?.addSupplyChain("rawMaterialRequest", strRawMatReq)    

        //add request to RawMaterialRequest 
        await rawMaterialRequestContract?.addRequest(
            rawMatRequest.id, rawMatRequest.name, rawMatRequest.count, rawMatRequest.date, rawMatRequest.manuId, rawMatRequest.supplierId, rawMatRequest.rawMaterialId, rawMatRequest.requestStatus, rawMatRequest.medSupplyChainAddr
        )
        setLoading(false)
    }

    const onClickCard = (rawMat: IRawMaterial) => {
        setShowDialog(true)
        setRawMaterial(rawMat)
    }

    const content = 
        <div className='w-96 bg-onPrimary-light rounded-xl p-4'>
            <h1 className='text-onPrimary-dark pb-4 text-lg'> Enter amount count </h1>

            <Input 
                placeholder="Amount"
                name="amount"
                type = "number"
                value={amount}
                handleChange={handleChange}
            />

            <div className='flex pt-4 gap-4'>
                <div onClick={() => setShowDialog(false)} className='bg-red-400 px-4 py-2 rounded-full w-full cursor-pointer hover:bg-red-400/50'>Cancel</div>
                <div onClick={() => onRequest()} className='bg-button px-4 py-2 rounded-full w-full cursor-pointer hover:bg-button/50'>Request</div>
            </div>
        </div>
    
    const loadingContent = <div className='w-96 bg-onPrimary-light rounded-xl px-4 py-16'>
                <LoaderSmall/>
            </div>

    return(
        <>
            <div>
                <RawMaterialsList rawMaterials={rawMaterials} clickable={true} onClick={(rawMat) => {onClickCard(rawMat)}}/>
                <DialogModal open = {showDialog} toggle={() => setShowDialog(!showDialog)} content = {content}/>
                <DialogModal open={isLoading} toggle = {() => {}} content = { loadingContent }/>
            </div>
        </>
    )
}

export default RequestRawMaterial;