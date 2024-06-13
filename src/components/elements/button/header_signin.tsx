import React from 'react';
import Link from 'next/link';

const SigninButton = () => {
    return (
        <Link href="/signin">
            <div className="p-2 w-30 h-30 rounded-full bg-gray-400 hover:bg-gray-700 text-white">
                ログイン
            </div>
        </Link>
    );
};

export default SigninButton;


