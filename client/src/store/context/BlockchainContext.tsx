"use client";

import React, { useEffect, useState} from 'react';
import { ethers } from 'ethers';
import InitBlockchain from '@/blockchain/InitBlockchain';

import {rawMaterialRequestABI, rawMaterialsABI, supplyChainABI, supplyChainFactoryABI, transportRequestABI} from '../../shared/utils/abis';
import BlockchainData from '@/shared/models/BlockchainData.model';
import IRawMaterial from '@/shared/models/RawMaterial.model';
import { compare } from '@/shared/utils/compare';
import { timeStampToString } from '@/shared/utils/DateConverter';
import IRawMaterialRequest from '@/shared/models/RawMaterialRequest.model';
import ITransportRequest from '@/shared/models/TransportRequest.model';

import { 
    RAW_MATERIALS_ADDRESS, 
    RAW_MATERIAL_REQUEST_ADDRESS, 
    SUPPLY_CHAIN_FACTORY_ADDRESS, 
    TRANSPORT_REQUEST_ADDRESS, 
} from '@/shared/utils/Constants';
import { TrashIcon } from '@heroicons/react/24/outline';

export const BlockchainContext = React.createContext<BlockchainData | null>(null);

let ethereum;

if(typeof window !== "undefined"){
    ethereum = window.ethereum 
}
// const { ethereum } = window;


const getRawMaterialsContract = () => {
    if(!ethereum) return;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(RAW_MATERIALS_ADDRESS, rawMaterialsABI, signer);
}

const getSupplyChainFactoryContract = () =>{
    if(!ethereum) return;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const result =  new ethers.Contract(SUPPLY_CHAIN_FACTORY_ADDRESS, supplyChainFactoryABI, signer);
    return result;
}

const getSupplyChainContract = (address?: string) =>{
    if(address == undefined) return alert("Address needed")
    if(!ethereum) return;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(address,supplyChainABI, signer);
}

const getRawMaterialRequestContract = () => {
    if(!ethereum) return;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(RAW_MATERIAL_REQUEST_ADDRESS, rawMaterialRequestABI, signer);
}

const getTransportRequestContract = () => {
    if(!ethereum) return;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(TRANSPORT_REQUEST_ADDRESS, transportRequestABI, signer);
}

interface BlockchainProviderProps{
    children: React.ReactNode
}

export const BlockchainProvider = ({children}: BlockchainProviderProps) => {
    const [isWalletConnect, setWalletConnect] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(''); 
    const [data, setData] = useState<BlockchainData>({} as BlockchainData);

    const [rawMaterialsContract, setRawMaterialsContract] = useState<ethers.Contract>()
    const [supplyChainFactoryContract, setSupplyChainFactoryContract] = useState<ethers.Contract>()
    const [rawMaterialRequestContract, setRawMaterialRequestContract] = useState<ethers.Contract>()
    const [transportReqContract, setTransportReqContract] = useState<ethers.Contract>()

    const [rawMaterials, setRawMaterials] = useState<IRawMaterial[]>()
    const [rawMatRequests, setRawMatRequests] = useState<IRawMaterialRequest[]>()
    const [transportRequests, setTransportRequests] = useState<ITransportRequest[]>()


    const checkIfWalletConnected = async () => {
        if(!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({method: 'eth_accounts'});
        
        if(accounts.length){
            console.log("acc1", accounts[0])
            setCurrentAccount(accounts[0])
            console.log("current a ", currentAccount)
            setData({...data, walletAddress: currentAccount})
            setWalletConnect(true);

            console.log(isWalletConnect)
        }else{
            setWalletConnect(false)
            connectWallet()
        }
    }

    const connectWallet = async () => {
        try{
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0])
            console.log("acc2", accounts[0])
            console.log("current Acc ", currentAccount)
            setData({...data, walletAddress: accounts[0]})
        }catch(error){
            console.log(error)
        }
    }


    const getRawMaterials = async () => {
        try{
            const keys: string[] = await rawMaterialsContract?.getRawMaterialsKeys();

            let rawMatResult: Array<IRawMaterial> = []    

            for (const key of keys) {
                let rawMaterial = await rawMaterialsContract?.getRawMaterial(key);

                const milliTimeStamp = rawMaterial.timeStamp.toNumber() * 1000
                rawMatResult.push({
                    id: rawMaterial.id,
                    name: rawMaterial.name,
                    description: rawMaterial.description,
                    timeStamp: timeStampToString(milliTimeStamp),
                    supplierId: rawMaterial.supplierId,
                    amount: rawMaterial.amount,
                    price: rawMaterial.price,
                    unit: rawMaterial.unit 
                });
                rawMatResult = rawMatResult.sort(compare)
              }
             
            setRawMaterials(rawMatResult);
        }catch(error){
            console.log(error)
        }
    }

    const getRawMaterialRequests = async () => {
        try{
            const keys: string[] = await rawMaterialRequestContract?.getRequestKeys();

            let rawMatReqResult: Array<IRawMaterialRequest> = []    

            for (const key of keys) {
                let rawMaterialReq = await rawMaterialRequestContract?.getRequest(key);

                //const milliTimeStamp = rawMaterial.timeStamp.toNumber() * 1000
                
                if(rawMaterialReq == undefined){
                    return 
                }

                rawMatReqResult.push({
                    id: rawMaterialReq.id,
                    name: rawMaterialReq.name,
                    count: rawMaterialReq.count,
                    date: rawMaterialReq.date,
                    manuId: rawMaterialReq.manuId,
                    supplierId: rawMaterialReq.supplierId,
                    rawMaterialId: rawMaterialReq.rawMaterialId,
                    requestStatus: rawMaterialReq.requestStatus, 
                    medSupplyChainAddr: rawMaterialReq.medSupplyChainAddr
                });
                //rawMatResult = rawMatResult.sort(compare)
              }
             
            setRawMatRequests(rawMatReqResult);
        }catch(error){
            console.log(error)
        }
    }

    const getTransportRequests = async () => {
        try{
            const keys: string[] = await transportReqContract?.getTransportRequestKeys();

            let transportRequests: Array<ITransportRequest> = []    

            for (const key of keys) {
                let transRequest = await transportReqContract?.getTransportRequest(key);

                //const milliTimeStamp = rawMaterial.timeStamp.toNumber() * 1000
                
                if(transRequest == undefined){
                    return 
                }

                transportRequests.push({
                    id: transRequest.id,
                    initDate: transRequest.initDate,
                    completeDate: transRequest.completedDate,
                    transporterId: transRequest.transporterId,
                    fromUserId: transRequest.fromUserId,
                    toUserId: transRequest.toUserId,
                    status: transRequest.status,
                    cost: transRequest.cost,
                    fromLocation: transRequest.fromLocation,
                    toLocation: transRequest.toLocation,
                    medSupplyChainAddr: transRequest.medSupplyChainAddr
                });
                //rawMatResult = rawMatResult.sort(compare)
              }
            setTransportRequests(transportRequests.reverse());
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        checkIfWalletConnected();    
        setRawMaterialsContract(getRawMaterialsContract());
        setSupplyChainFactoryContract(getSupplyChainFactoryContract());
        setRawMaterialRequestContract(getRawMaterialRequestContract());
        setTransportReqContract(getTransportRequestContract());
    }, [])

    useEffect(() => {
        getRawMaterials()
    }, [rawMaterialsContract])

    useEffect(() => {
        getRawMaterialRequests()
    }, [rawMaterialRequestContract])

    useEffect(() =>{
        getTransportRequests()
    }, [transportReqContract])

    useEffect(() => {
           setData({
               ...data,
               rawMaterials: rawMaterials,
               rawMaterialRequests: rawMatRequests,
               transportRequests: transportRequests,
               walletAddress: currentAccount,
               getRawMaterials: () => getRawMaterials(),
               getSupplyChainContract: (address) => getSupplyChainContract(address),
               rawMaterialsContract: rawMaterialsContract,
               supplyChainFactoryContract: supplyChainFactoryContract,
               rawMaterialRequestContract: rawMaterialRequestContract,
               transportRequestContract: transportReqContract
           })
    }, [currentAccount,
        rawMaterialsContract,
        rawMaterials, 
        rawMatRequests,
        supplyChainFactoryContract, 
        rawMaterialRequestContract,
        transportReqContract
    ])

    return (
        <BlockchainContext.Provider value={data}>
            {children}
        </BlockchainContext.Provider>
    );
}