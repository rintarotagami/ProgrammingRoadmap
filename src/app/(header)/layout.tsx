import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NavigationProvider } from '../../contexts/UserContext';
import Header from "../../components/layouts/header/header";
import Footer from "../../components/layouts/footer/footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <NavigationProvider>
        <body>
          <Header webTitle="ProgrammerRoadmap" />
          {children}
          <Footer />
        </body>
      </NavigationProvider>
    </html>
  );
}