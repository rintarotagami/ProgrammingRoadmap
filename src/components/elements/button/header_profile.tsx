import React from 'react';

const ProfileToggleButton = ({ profileImageUrl }: { profileImageUrl?: string }) => {
    return (
        <button className="p-2 w-30 h-30 rounded-full border border-white">
            {profileImageUrl ? (
                <img src={profileImageUrl} alt="プロフィール画像" className="w-8 h-8 rounded-full" />
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="white" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
                </svg>
            )}
        </button>
    );
};

export default ProfileToggleButton;
