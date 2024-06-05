"use client";
import React, { useState } from 'react';
import SearchBar from '../../elements/search/searchBar'; // 検索バーのインポート
import Hamburger from '../../elements/button/hamburger'; // ハンバーガーボタンのインポート
import ProfileToggleButton from '../../elements/button/profile'; // プロフィールボタンのインポート
import ConfigButton from '../../elements/button/config'; // 設定ボタンのインポート

const Header = () => {
    const [showNavigation, setShowNavigation] = useState(false);

    const toggleNavigation = () => setShowNavigation(!showNavigation);

    return (
        <header className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between">
            <div className="flex items-center justify-start">
                <Hamburger /> {/* ハンバーガーボタンを追加 */}
                <div className="logo">
                    <span style={{ color: 'white', fontSize: 'large' }}>WithOutput</span>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <SearchBar /> {/* 検索バーをヘッダーに追加 */}
            </div>
            <div className="flex items-center justify-end">
                <ProfileToggleButton /> {/* プロフィールボタンを追加 */}
                <ConfigButton /> {/* 設定ボタンを追加 */}
            </div>
        </header>
    );
};

export default Header;
