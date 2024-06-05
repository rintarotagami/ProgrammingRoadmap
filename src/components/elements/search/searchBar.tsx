import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('検索語:', searchTerm);
        // 検索処理をここに実装するか、または外部関数を呼び出す
    };

    return (
        <div className="rounded-lg border border-gray-300 bg-white focus-within:border-blue-500 focus-within:border-2">
            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-3 pl-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="検索"
                    className="focus:outline-none w-96 h-10"
                />
                <button type="submit" className="p-3 rounded-lg focus:border-blue-500 focus:border-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;

