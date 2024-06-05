import React from 'react';
import Link from 'next/link';

const ReturnHome = () => {
    return (
        <button className="text-white hover:bg-red-600 hover:bg-opacity-50 font-medium rounded-lg text-sm px-5 py-1 text-center">
            <Link href="/">
                ✕
            </Link>
        </button>
    );
}

export default ReturnHome;