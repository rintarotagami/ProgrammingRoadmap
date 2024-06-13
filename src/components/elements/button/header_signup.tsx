import React from 'react';
import Link from 'next/link';

const SignupButton = () => {
    return (
        <Link href="/signup">
            <div className="p-2 w-30 h-30 rounded-full bg-gray-400 hover:bg-gray-700 text-white">
                アカウント作成
            </div>
        </Link>
    );
};

export default SignupButton;


