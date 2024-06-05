"use client";
import React, { useState } from 'react';
import EditorSearchBar from '../../elements/search/editorSearch'; // 検索バーのインポート
import ReturnHome from '../../elements/button/returnHome';

const EditorHeader = () => {
    return (
        <header className="w-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between">
            <div className="w-1/3 flex items-center justify-start">
                <li style={{ listStyleType: "none" }}>
                    <button className="text-white hover:bg-gray-200 hover:bg-opacity-50 font-medium rounded-lg text-sm px-5 py-1 text-center">
                        ファイル
                    </button>
                </li>
                <li style={{ listStyleType: "none" }}>
                    <button className="text-white hover:bg-gray-200 hover:bg-opacity-50 font-medium rounded-lg text-sm px-5 py-1 text-center">
                        選択
                    </button>
                </li>
                <li style={{ listStyleType: "none" }}>
                    <button className="text-white hover:bg-gray-200 hover:bg-opacity-50 font-medium rounded-lg text-sm px-5 py-1 text-center">
                        表示
                    </button>
                </li>
                <li style={{ listStyleType: "none" }}>
                    <button className="text-white hover:bg-gray-200 hover:bg-opacity-50 font-medium rounded-lg text-sm px-5 py-1 text-center">
                        移動
                    </button>
                </li>
            </div>
            <div className="w-1/3 flex-grow flex items-center justify-center">
                <EditorSearchBar /> {/* 検索バーをヘッダーに追加 */}
            </div>
            <div className="w-1/3 flex items-center justify-end">
                <ul>
                    <li>
                        <ReturnHome />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default EditorHeader;
