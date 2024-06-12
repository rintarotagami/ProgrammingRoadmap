import React from 'react';
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "ProgrammerRoadmap",
    description: "プログラミング学習者の為のロードマップ。ロードマップ作成ツール",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            {children}
        </html>
    );
}