import React from 'react';
import Link from 'next/link';

interface NavigationButtonProps {
    href: string;
    iconPath: string;
    label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ href, iconPath, label }) => {
    return (
        <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
            <Link href={href} className="flex items-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="mr-2">
                    <path fill="currentColor" d={iconPath} />
                </svg>
                <span className="ml-2 text-base text-left w-full">{label}</span>
            </Link>
        </li>
    );
};

export default NavigationButton;
