"use client"

import BlockchainData from '@/shared/models/BlockchainData.model';
import LeftNav from '@/shared/ui/components/LeftNav';
import LeftNavItem from '@/shared/ui/components/LeftNavItem';
import Spacer from '@/shared/ui/components/Spacer';
import { trimAddressLong } from '@/shared/utils/trimAddressLong';
import { BlockchainContext } from '@/store/context/BlockchainContext';
import React, { useContext, useEffect, useState } from 'react';


const SupplyChain = () => {

    const [selectedNav, setNav] = useState(0)
    const [addresses, setAddresses] = useState<string[]>([])
    const [data, setData] = useState({})

    const {
        supplyChainFactoryContract,
        getSupplyChainContract
    } = useContext(BlockchainContext) as BlockchainData


    const getSupplyChainAddresses= async () => {
        const addresses: string[] = await supplyChainFactoryContract?.getAllAddresses()
        console.log("addresses", addresses);
        const copy = [...addresses]
        const reversed = copy.reverse();
        setAddresses(reversed)

        if(getSupplyChainContract != undefined){
            addresses?.forEach( async (addr) => {
                if( addr != '0xcB70b6b78eA04fDC6D4432f33A639Ab3266f1C48') return 

                const resultContract = await getSupplyChainContract(addr)
                const keys: string[] = await resultContract?.getSupplyChainKeys()

                console.log("keys = ", keys)


                let contractData = {}
                await keys.forEach( async key => {
                    const data = await resultContract?.getSupplyChain(key)
                    console.log("data = ", data);
                    contractData = {...contractData, [key]: data} 
                    setData({...data, [addr]: contractData})

                    console.log("addr ", addr)
                    console.log("Main data = ", data);
                    //console.log("Contract Data", contractData)
                })

                //console.log("Contract data = ", contractData);
            });
        }
    }

    const content1 = <div className='text-onPrimary-dark'>
        <img className="h-16 w-auto" src={'supplier.svg'} alt="Supplier" />
    </div>

    const content2 = <div className='text-onPrimary-dark'>
        <img className="h-16 w-auto" src={'distributor.svg'} alt="Supplier" />
    </div>

    const content3 = <div className='text-onPrimary-dark'>
        <img className="h-16 w-auto" src={'manufacturer.svg'} alt="Supplier" />
    </div>

    const content4 = <div className='text-onPrimary-dark'>
        <img className="h-16 w-auto" src={'customer.svg'} alt="Supplier" />
    </div>

    const LeftNavItems = 
        <>
            {addresses?.map((address) => {
                const index = addresses.indexOf(address)
                return <LeftItem isSelected = {selectedNav == index} label={trimAddressLong(address)} onClick={() => {setNav(index)}}/>
            })}
        </>

    useEffect(() => {
         getSupplyChainAddresses();   
    }, [supplyChainFactoryContract])

    return(
        <>
            <div className='pt-16 flex'> 
                <LeftNav children = {LeftNavItems} /> 
                <div className='pl-16 pt-2'>
                    <div className="relative border-gray-400 dark:border-gray-700">                  
                            <Li isActive={true} content={content1}/>
                            <Li isActive={true} content={content2}/>
                            <Li isActive= {false} content={content3}/>
                            <Li isActive= {false} content={content4}/>
                    </div>
                </div>
            </div>
            
        </>
    )
}


interface LeftItemProps{
    label: string,
    onClick: () => void,
    isSelected: boolean
}

const LeftItem = ({
    label, onClick, isSelected
}: LeftItemProps) => {
    return(
        <>
            <div
              onClick={() => onClick()} 
              className={`${isSelected && ("bg-primary-dark")} p-2 flex items-center hover:bg-primary-dark rounded-md cursor-pointer w-auto`}
            > 
              <p className="pl-2 select-none">{label}</p>
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