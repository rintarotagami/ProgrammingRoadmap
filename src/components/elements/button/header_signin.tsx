import React from 'react';
import { useNavigate } from 'react-router-dom';

const SigninButton = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signin');
    };

    return (
        <button onClick={handleSignIn} className="p-2 w-30 h-30 rounded-full bg-blue-500 hover:bg-blue-700 text-white">
            ログイン
        </button>
    );
};

export default SigninButton;
