"use client";

import Link from "next/link";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'; // useAuth フックをインポート
import SearchBar from '../../elements/search/searchBar';
import Hamburger from '../../elements/button/header_hamburger';
import SignWrap from "@/components/layouts/header/headerSignWrap"

const Header = ({ webTitle }: { webTitle: string }) => {
    const [showNavigation, setShowNavigation] = useState(false);
    const toggleNavigation = () => setShowNavigation(!showNavigation);

    return (
        <header className="w-full px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-between">
            <div className="flex items-center justify-start">
                <Hamburger />
                <Link href="/" className="logo">
                    <span style={{ color: 'white', fontSize: 'large' }}>{webTitle}</span>
                </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <SearchBar />
            </div>
            <div className="flex items-center justify-end">
                <SignWrap />
            </div>
        </header>
    );
};

export default Header;