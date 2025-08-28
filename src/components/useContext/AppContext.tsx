'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { boxItem } from '@/data/prod/cart-items';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type AppContentType = {
    items: string;
    cartItem: boxItem[];
    setItem: React.Dispatch<React.SetStateAction<string>>;
    handleAddToCart: (prod: boxItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    handleLogout: () => void;
    totalPrice: number;
};

const AppContext = createContext<AppContentType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProviderComp = ({ children }: AppProviderProps) => {
    const [items, setItem] = useState('');
    const [cartItem, setCartItem] = useState<boxItem[]>([]);
    const router = useRouter();

    const handleAddToCart = (item: boxItem) => {
        const form = localStorage.getItem("user-form-data");

        if (!form) {
            toast.error("Please sign up to continue");
            return; 
        }

        const userData = JSON.parse(form);

        if (!userData.email || !userData.password) {
            toast.error("Please sign up to continue");
            return;
        }

        setCartItem((prev) => {
            const existing = prev.find((p) => p.id === item.id);

            if (existing) {
                toast.error("Product quantity increase");
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

    const handleLogout = () => {
        localStorage.removeItem('user-form-data');
        router.push('/auth/login');
    }


    return (
        <AppContext.Provider value={{
            handleAddToCart,
            items,
            setItem,
            updateQuantity,
            removeItem,
            cartItem,
            totalPrice,
            handleLogout
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