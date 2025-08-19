'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type AppContentType = {
    items: string;
    setItem: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContentType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProviderComp = ({ children }: AppProviderProps) => {
    const [items, setItem] = useState('');

    return (
        <AppContext.Provider value={{ items, setItem }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};