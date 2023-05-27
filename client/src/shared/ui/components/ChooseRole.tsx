"use client";

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Spacer from './Spacer';
import RounedButton from './RoundedButton';
import UserRole from '@/shared/models/UserRole.model';

interface ChooseRoleProps{
    open: boolean,
    onSelect: (role: UserRole) => void 
}

export default function ChooseRole({
    open = false,
    onSelect
}: ChooseRoleProps) {
    const cancelButtonRef = useRef(null)
  
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className='w-96 bg-onPrimary-light rounded-xl p-4'>
                    <h1 className='text-onPrimary-dark text-lg'>Choose Role</h1>
                    <div className='m-auto mt-1 h-0.5 bg-onSecondary-dark/10 w-1/3'></div>
                    <Spacer height={8}/>
                    <img className='w-20 m-auto' src = "teamwork.png"></img>
                    <Spacer height={8}/>
                    <Spacer height={8}/>
                    
                    <div className='px-6'>
                      <RounedButton 
                        onClick={() => onSelect(UserRole.SUPPLIER)}
                        buttonText={"Supplier"}
                      />
                    </div>
                    <div className='px-6 mt-4'>
                      <RounedButton 
                        onClick={() => onSelect(UserRole.FDA_ADMIN)}
                        buttonText={"Fda Admin"}
                    />
                    </div>
                    <div className='px-6 mt-4'>
                      <RounedButton 
                        onClick={() => onSelect(UserRole.CARRIER)}
                        buttonText={"Carrier"}
                      />
                    </div>  
                    <div className='px-6 mt-4'>
                      <RounedButton 
                        onClick={() => onSelect(UserRole.MANUFACTURER)}
                        buttonText={"Manufacturer"}
                      />
                    </div>  
                    <div className='px-6 mt-4'>
                      <RounedButton 
                        onClick={() => onSelect(UserRole.RETAILER)}
                        buttonText={"Retailer"}
                      />
                    </div>  
                    <Spacer height={6}/>
                    <div className='m-auto mt-1 h-0.5 bg-onSecondary-dark/10 w-1/3'></div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }