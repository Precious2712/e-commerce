'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { boxItem } from '@/data/prod/cart-items';
import toast from 'react-hot-toast';

type AppContentType = {
    items: string;
    cartItem: boxItem[];
    setItem: React.Dispatch<React.SetStateAction<string>>;
    handleAddToCart: (prod: boxItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    totalPrice: number;
};

const AppContext = createContext<AppContentType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProviderComp = ({ children }: AppProviderProps) => {
    const [items, setItem] = useState('');
    const [cartItem, setCartItem] = useState<boxItem[]>([]);

    const handleAddToCart = (item: boxItem) => {
        setCartItem((prev) => {
            const existing = prev.find((p) => p.id === item.id);
            if (existing) {
                toast.error('Product quantity increase');
                return prev.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCartItem((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItem((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = cartItem.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    useEffect(() => {
        try {
            console.log("Updated cartItem:", cartItem);
        } catch (err) {
            console.error("Error saving cart to localStorage", err);
        }
    }, [cartItem]);


    return (
        <AppContext.Provider value={{
            handleAddToCart,
            items,
            setItem,
            updateQuantity,
            removeItem,
            cartItem,
            totalPrice
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