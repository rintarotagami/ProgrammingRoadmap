"use client";

import React, { useEffect } from 'react';
import { useNavigation } from '../../../contexts/UserContext';

const Hamburger = () => {
    const { toggleNavigation, isOpen } = useNavigation();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                toggleNavigation();
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [toggleNavigation]);

    return (
        <div className="hamburger-menu z-20 p-2 mr-4 rounded-full hover:bg-black hover:bg-opacity-10" onClick={toggleNavigation}>
            {isOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ zIndex: 10, transform: "scaleX(-1)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: "scaleX(-1)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
        </div>
    );
};

export default Hamburger;