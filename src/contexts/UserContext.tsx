"use client";

// context/NavigationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// コンテクストの型を定義
interface NavigationContextType {
    isOpen: boolean;
    toggleNavigation: () => void;
}

// コンテクストのデフォルト値を設定（適切なデフォルト値を提供）
const NavigationContext = createContext<NavigationContextType | null>({
    isOpen: true,
    toggleNavigation: () => {}
});

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) throw new Error('useNavigation must be used within a NavigationProvider');
    return context;
};

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavigationContext.Provider value={{ isOpen, toggleNavigation }}>
            {children}
        </NavigationContext.Provider>
    );
};
