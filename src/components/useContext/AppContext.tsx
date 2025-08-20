'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { boxItem } from '@/data/prod/cart-items';

type AppContentType = {
    items: string;
    cartItem: boxItem[];
    setItem: React.Dispatch<React.SetStateAction<string>>;
    handleAddToCart: (prod: boxItem) => void;
};

const AppContext = createContext<AppContentType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProviderComp = ({ children }: AppProviderProps) => {
    const [items, setItem] = useState('');
    const [cartItem, setCartItem] = useState<boxItem[]>([]);

    const handleAddToCart = (item: boxItem) => {
        setCartItem(prevCart => {
            const exists = prevCart.some(cartProd => cartProd.id === item.id);
            if (exists) {
                alert('You cannot add the same product twice')
                return prevCart;
            }
            localStorage.setItem('cart', JSON.stringify(cartItem));
            return [...prevCart, item];
        });
    };

    useEffect(() => {
        console.log("Updated cartItem:", cartItem);
    }, [cartItem]);


    return (
        <AppContext.Provider value={{
            handleAddToCart,
            items,
            setItem,
            cartItem
        }}>
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