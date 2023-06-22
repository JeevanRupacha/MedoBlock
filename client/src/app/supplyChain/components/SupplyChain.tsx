"use client"

import BlockchainData from '@/shared/models/BlockchainData.model';
import LeftNav from '@/shared/ui/components/LeftNav';
import LeftNavItem from '@/shared/ui/components/LeftNavItem';
import Spacer from '@/shared/ui/components/Spacer';
import { trimAddressLong } from '@/shared/utils/trimAddressLong';
import { BlockchainContext } from '@/store/context/BlockchainContext';
import React, { useContext, useEffect, useState } from 'react';
import RawMatRequest from './RawMatRequest';
import { trimAddress } from '@/shared/utils/trimAddress';
import { timeStampToString } from '@/shared/utils/DateConverter';
import RawMatAccept from './RawMatAccept';
import TransReq from './TransReq';
import TransReqAccept from './TransReqAccept';
import TransportInit from './TransportInit';
import TransOnWay from './TransOnWay';
import TransCompleted from './TransCompleted';
import CreateMedicine from './CreateMedicine';
import FdaReq from './FdaReq';
import FdaAccept from './FdaAccept';
import TransMedReq from './TransMedReq';
import DistributorCollected from './DistributorCollected';
import BoughtCst from './BoughtCst';


/// "rawMaterialRequest" -> "rawMaterialAccept" -> "transportRequest" -> "transportReqAccept" -> "transportInit" -> "transportOnWay" -> "transportCompleted" -> "createMedicine" -> "fdaRequest" -> "fdaAccept" -> "transportRequest" -> "distributorMedicine" -> "buyMedicine"

interface IContractData{
    key?: string;
    value?: string;
}

interface ISupplyChain{
    rawMatRequest: string;
    rawMatAccept: string;
    transReq: string;
    transReqAccept: string;
    transportInit: string;
    transOnWay: string;
    transCompleted: string;
    createMedicne: string;
    fdaReq: string;
    fdaAccept: string;
    transReqMed: string;
    distributorCollected: string;
    boughtCst: string
}

const SupplyChain = () => {
    const [selectedNav, setNav] = useState<number | undefined>()
    const [addresses, setAddresses] = useState<string[]>([])
    const [data, setData] = useState<IContractData[]>([])
    const [isAddressLoading, setAddressLoading] = useState(false)
    const [supplyChainData, setSupplyChainData] = useState<ISupplyChain>()
    const [dateTimes, setDateTimes] = useState<MObject>({})

    const {
        supplyChainFactoryContract,
        getSupplyChainContract
    } = useContext(BlockchainContext) as BlockchainData


    const getSupplyChainAddresses= async () => {
        setAddressLoading(true)
        const addresses: string[] = await supplyChainFactoryContract?.getAllAddresses()
        console.log("addresses", addresses);
        if(addresses?.length){
            const copy = [...addresses]
            const reversed = copy.reverse();
            setAddresses(reversed)
        }

        if(getSupplyChainContract != undefined){
            addresses?.forEach( async (addr) => {
                const resultContract = await getSupplyChainContract(addr)
                const keys: string[] = await resultContract?.getSupplyChainKeys()
                console.log(addr, keys)
                
                const timeStamp = await resultContract?.timeStamp();

                const milliTimeStamp = timeStamp.toNumber() * 1000
                setDateTimes({...dateTimes, [addr]: timeStampToString(milliTimeStamp)})
                let contractData = {}
                
                for( const index in keys){
                    const data = await resultContract?.getSupplyChain(keys[index])
                    contractData = {...contractData, [keys[index]]: data}   
                }

                const cData = {key: addr, value: contractData} as IContractData
                const newData = data
                newData.push(cData)
                setData(newData)
            });
        }
        setAddressLoading(false)
    }

    const onClickAddr = (addr: string, index: number) => {
        setNav(index)
        const result = (data.find(it => it.key == addr) as IContractData).value 
        if(result == undefined) return
        const supplyResult = result as unknown as ISupplyChain
        console.log("Result", supplyResult)
        setSupplyChainData(supplyResult)
    }

    const LeftNavItems = 
        <>
            {addresses?.map((address) => {
                const index = addresses.indexOf(address)
                const dateTime = dateTimes[address]
                return <LeftItem isSelected = {selectedNav == index} label={trimAddress(address)} dateTime ={dateTime} onClick={() => {onClickAddr(address, index)}}/>
            })}
        </>

    useEffect(() => {
         getSupplyChainAddresses();   
    }, [supplyChainFactoryContract])

    return(
        <>
            <div className='pt-16 flex'> 
                <LeftNav children = {LeftNavItems} isLoading={isAddressLoading}/> 
                <div className='pl-16 pt-2'>
                    <div className="relative border-gray-400 dark:border-gray-700">                  
                        <Li isActive={supplyChainData?.rawMatRequest != undefined ? true  : false} content={<RawMatRequest data = {supplyChainData?.rawMatRequest}/>}/>
                        <Li isActive={supplyChainData?.rawMatAccept != undefined ? true  : false} content={<RawMatAccept data = {supplyChainData?.rawMatAccept}/>}/>
                        <Li isActive={supplyChainData?.transReq != undefined ? true  : false} content={<TransReq data = {supplyChainData?.transReq}/>}/>
                        <Li isActive={supplyChainData?.transReqAccept != undefined ? true  : false} content={<TransReqAccept data = {supplyChainData?.transReqAccept}/>}/>
                        <Li isActive={supplyChainData?.transportInit != undefined ? true  : false} content={<TransportInit data = {supplyChainData?.transportInit}/>}/>
                        <Li isActive={supplyChainData?.transOnWay != undefined ? true  : false} content={<TransOnWay data = {supplyChainData?.transOnWay}/>}/>
                        <Li isActive={supplyChainData?.transCompleted != undefined ? true  : false} content={<TransCompleted data = {supplyChainData?.transCompleted}/>}/>
                        <Li isActive={supplyChainData?.createMedicne != undefined ? true  : false} content={<CreateMedicine data = {supplyChainData?.createMedicne}/>}/>
                        <Li isActive={supplyChainData?.fdaReq != undefined ? true  : false} content={<FdaReq data = {supplyChainData?.fdaReq}/>}/>
                        <Li isActive={supplyChainData?.fdaAccept != undefined ? true  : false} content={<FdaAccept data = {supplyChainData?.fdaAccept}/>}/>
                        <Li isActive={supplyChainData?.transReqMed != undefined ? true  : false} content={<TransMedReq data = {supplyChainData?.transReqMed}/>}/>
                        <Li isActive={supplyChainData?.distributorCollected != undefined ? true  : false} content={<DistributorCollected data = {supplyChainData?.distributorCollected}/>}/>
                        <Li isActive={supplyChainData?.boughtCst != undefined ? true  : false} content={<BoughtCst data = {supplyChainData?.boughtCst}/>}/>
                    </div>
                </div>
            </div>
        </>
    )
}


interface LeftItemProps{
    label: string;
    dateTime: string;
    onClick: () => void;
    isSelected: boolean;
}

const LeftItem = ({
    label, onClick, isSelected, dateTime
}: LeftItemProps) => {
    return(
        <>
            <div
              onClick={() => onClick()} 
              className={`${isSelected && ("bg-primary-dark")} p-2 flex items-center hover:bg-primary-dark rounded-md cursor-pointer w-auto`}
            > 
              <p className="pl-2 select-none pr-4">{label}</p>
              <p>{dateTime}</p>
            </div>
            <div className="h-2"></div>
        </>
    )
}

interface LiProps{
    content: React.ReactNode,
    isActive: boolean
}

const Li = ({content, isActive}: LiProps) => {
    return(
        <>
        <div className='flex gap-4'>
            <div className='pt-2'>
                <span className={`flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ${isActive? 'ring-white': 'ring-green-50/30'}  dark:ring-gray-900 dark:bg-blue-900`}>
                    {/* <img className="rounded-full shadow-lg" src="https://via.placeholder.com/150/0000FF/" alt="Bonnie image"/> */}
                    <div className={`w-8 h-6 ${isActive ? 'bg-red-500' : 'bg-red-300'} rounded-full`}> </div>
                </span>
                <div className={`w-[1px] h-full mt-8 ${isActive ? 'border-white': 'border-gray-400/50'} border-l-2 border-dotted`}></div>
            </div>   
            <div className={`mb-10 ml-8 mt-3 ${isActive?'opacity-100': 'opacity-25'}`}>    
                <div className={`mb-[-40px] ml-[-8px] w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-r-[20px] border-r-blue/40
                    border-b-[10px] border-b-transparent`}>
                </div>  
                <div className={`${isActive? 'bg-blue/40': 'bg-gray-500'} ml-3 cursor-pointer box-border hover:border-1 hover:border-red-400/50 border-1  border-transparent justify-between items-center p-4 bg-blue-100 rounded-lg border shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600`}>
                    {content}
                </div>
                <Spacer height={8}/>
            </div> 
        </div>
            
        </>
    )
}

export default SupplyChain;