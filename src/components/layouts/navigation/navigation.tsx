import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className="top-0 left-0 w-60 bg-white bg-opacity-50 z-10 overflow-auto">
            <div className="p-8">
                <ul className="text-lg">
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/" className="flex items-center w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="mr-2 rounded-full"><path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75" /></svg>
                            <span className="ml-2 text-base text-left w-full">ホーム</span>
                        </Link>
                    </li>
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/later" className="flex items-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.75 3a3.25 3.25 0 0 1 3.245 3.066L21 6.25v11.5a3.25 3.25 0 0 1-3.065 3.245L17.75 21H6.25a3.25 3.25 0 0 1-3.245-3.066L3 17.75V9.372a2.25 2.25 0 0 0 1.5 0v8.378a1.75 1.75 0 0 0 1.607 1.744l.143.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V6.25a1.75 1.75 0 0 0-1.606-1.744L17.75 4.5H6.25c-.6 0-1.13.302-1.445.763a2.23 2.23 0 0 0-1.581-.201a3.25 3.25 0 0 1 2.842-2.057L6.25 3zm-4.504 10.003a.75.75 0 0 1 .102 1.493l-.102.007H8.748a.75.75 0 0 1-.102-1.493l.102-.007zm2.006-3.507a.75.75 0 0 1 .102 1.493l-.102.007H8.748a.75.75 0 0 1-.102-1.493l.102-.007zM3.75 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" /></svg>
                                <span className="ml-2 text-base	text-left w-full">後で解く問題</span>
                        </Link>
                    </li>
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/follow" className="flex items-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8" /></svg>
                                <span className="ml-2 text-base	text-left w-full">フォローしている人</span>
                        </Link>
                    </li>
                </ul>
                <ul className="text-lg border-t border-gray-300 mt-4 py-5">
                    <li className="px-2 mb-4 hover:bg-gray-200 rounded-lg">
                        <Link href="/mypage" className="flex items-center w-full">
                                <span className="ml-2">マイページ ＞</span>
                        </Link>
                    </li>
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/history" className="flex items-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 6.965 7.481l.053-.998l.49.017a6.5 6.5 0 1 0-4.65-1.951l.006.007l.136.15V10h1v4H0v-1h2.37l-.234-.258A7.477 7.477 0 0 1 0 7.5m7 0V3h1v4.293l2.854 2.853l-.708.708l-3-3A.5.5 0 0 1 7 7.5" clip-rule="evenodd" /></svg>
                                <span className="ml-2 text-base text-left w-full">履歴</span>
                        </Link>
                    </li>
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/playlist" className="flex items-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 15.77v-1h7.02v1zm0-4v-1h10.962v1zm0-4v-1h10.962v1zM16.442 20v-5.942l4.577 2.98z" /></svg>
                                <span className="ml-2 text-base text-left w-full">プレイリスト</span>
                        </Link>
                    </li>
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/favorite" className="flex items-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4M8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.003 2.003 0 0 1 2 2Z" /></svg>
                                <span className="ml-2 text-base text-left w-full">高く評価した問題</span>
                        </Link>
                    </li>
                    <li className="px-2 mb-4 flex items-center hover:bg-gray-200 rounded-lg">
                        <Link href="/create" className="flex items-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m9.5 16.5l7-4.5l-7-4.5zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"/></svg>
                                <span className="ml-2 text-base text-left w-full">問題作成</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
