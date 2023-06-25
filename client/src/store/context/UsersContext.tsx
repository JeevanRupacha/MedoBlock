"use client";

import UserContextData from '@/shared/models/UserContextData.model';
import React, { useEffect, useState} from 'react';
import { getAllUsers } from '../../shared/utils/apiHelper'

export const UsersContext = React.createContext<UserContextData | null>(null);

interface UsersProviderProps{
    children: React.ReactNode
}

export const UsersProvider = ({children}: UsersProviderProps) => {   

    const [data, setData] = useState<UserContextData>({users: []})

    const getUsers = async () => {
        const result = await getAllUsers();

        const userString = localStorage.getItem('user')
        const user = JSON.parse(userString?userString:'')

        setData({
            users: result,
            currentUser: user
        } as UserContextData);
    }
    
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UsersContext.Provider value={data}>
            {children}
        </UsersContext.Provider>
    );
}