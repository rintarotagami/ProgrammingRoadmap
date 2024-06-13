"use client";

import React, { useContext } from 'react';
import Navigation from '../components/layouts/navigation/navigation';
import { useNavigation } from '../contexts/UserContext';

export default function Template({ children }: { children: React.ReactNode }) {
    const { isOpen } = useNavigation();

    return (
        <div style={{ display: 'flex' }}>
            {isOpen && <Navigation />}
            <div style={{ flex: 1 }}>{children}</div>
        </div>
    );
}