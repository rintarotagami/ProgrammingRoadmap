"use client";


import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'; // useAuth フックをインポート
import SearchBar from '../../elements/search/searchBar';
import Hamburger from '../../elements/button/header_hamburger';
import ProfileToggleButton from '../../elements/button/header_profile';
import ConfigButton from '../../elements/button/header_config';
import SigninButton from '../../elements/button/header_signin'; // ログインボタンのインポートが必要です

const Header = ({ webTitle }: { webTitle: string }) => {
    const [showNavigation, setShowNavigation] = useState(false);
    const isLoggedIn = useAuth(); // ログイン状態を取得

    const toggleNavigation = () => setShowNavigation(!showNavigation);

    return (
        <header className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between">
            <div className="flex items-center justify-start">
                <Hamburger />
                <div className="logo">
                    <span style={{ color: 'white', fontSize: 'large' }}>{webTitle}</span>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <SearchBar />
            </div>
            <div className="flex items-center justify-end">
                {isLoggedIn ? (
                    <>
                        <ProfileToggleButton />
                        <ConfigButton />
                    </>
                ) : (
                    <SigninButton />
                )}
            </div>
        </header>
    );
};

export default Header;