import { NavigationProvider } from '@/contexts/UserContext';
import { NextAuthProvider } from "@/_lib/providers/NextAuthProvider";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

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
        <NextAuthProvider>
            <NavigationProvider>
                <html lang="ja">
                    <body>
                        <Header webTitle="ProgrammerRoadmap" />
                        {children}
                        <Footer />
                    </body>
                </html>
            </NavigationProvider>
        </NextAuthProvider>
    );
}