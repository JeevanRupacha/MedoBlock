import { ethers } from 'ethers';

import {rawMaterialsABI, supplyChainABI, supplyChainFactoryABI} from '../shared/utils/abis';
import { RAW_MATERIALS_ADDRESS, medSupplyChainFactoryAddress2 } from '@/shared/utils/Constants';


const InitBlockchain = () => {
    if(typeof window == 'undefined') return;
    const { ethereum } = window 
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const getRawMaterialsContract = () => {
        return new  ethers.Contract(RAW_MATERIALS_ADDRESS, rawMaterialsABI, signer);
    }

    const getSupplyChainFactoryContract = () =>{
        return new ethers.Contract(medSupplyChainFactoryAddress2, supplyChainFactoryABI, signer);
    }

    return { getRawMaterialsContract, getSupplyChainFactoryContract}
}

export default InitBlockchain;