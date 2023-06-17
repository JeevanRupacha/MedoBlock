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

    const {
        supplyChainFactoryContract
    } = useContext(BlockchainContext) as BlockchainData


    const getSupplyChainAddresses= async () => {
        const addresses = await supplyChainFactoryContract?.getAllAddresses()
        setAddresses(addresses)
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
                    <ol className="relative border-l border-gray-400 dark:border-gray-700">                  
                            <Li isActive={true} content={content1}/>
                            <Li isActive={true} content={content2}/>
                            <Li isActive= {false} content={content3}/>
                            <Li isActive= {false} content={content4}/>
                    </ol>
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
            <li className={`mb-10 ml-6 ${isActive?'opacity-100': 'opacity-25'}`}>      
                <div className='flex-col'>
                    <span className={`flex absolute -left-3  justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ${isActive? 'ring-white': 'ring-green-50/30'}  dark:ring-gray-900 dark:bg-blue-900`}>
                        <img className="rounded-full shadow-lg" src="https://via.placeholder.com/150/0000FF/" alt="Bonnie image"/>
                    </span>
                </div>      
               
                <div className={`${isActive? 'bg-blue': 'bg-gray-500'} bg-blue bg-opacity-30 justify-between ml-4 items-center p-4 bg-blue-100 rounded-lg border border-gray-200/10 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600`}>
                    {content}
                </div>
                <Spacer height={8}/>
            </li>
        </>
    )
}

export default SupplyChain;