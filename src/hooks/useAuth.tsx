import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // セッションストレージ、クッキー、またはAPIからログイン状態を取得
        const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    return isLoggedIn;
};

export default useAuth;