import { NavigationProvider } from '../../../contexts/UserContext';
import Header from "../../../components/layouts/header/header";
import Footer from "../../../components/layouts/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <body>
        <Header webTitle="ProgrammerRoadmap" />
        {children}
        <Footer />
      </body>
    </NavigationProvider>
  );
}