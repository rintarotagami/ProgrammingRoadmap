import React from "react";
import { auth } from "../../../../auth"

import SigninButton from '../../elements/button/header_signin'; // ログインボタンのインポートが必要です
import SignupButton from '../../elements/button/header_signup'; // サインアップボタンのインポートが必要です
import ProfileToggleButton from '../../elements/button/header_profile';
import ConfigButton from '../../elements/button/header_config';

export default async function SignWrap(){
    const session = await auth();
    if(!session?.user) {
        return (
            <>
                <SigninButton />
                <SignupButton />
            </>
        );
    }
    return (
        <>
            <ProfileToggleButton />
            <ConfigButton />
        </>
    );
}