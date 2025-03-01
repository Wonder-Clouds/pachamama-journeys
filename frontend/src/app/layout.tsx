import type { Metadata } from "next";
import { Merriweather, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsappButton";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos que usarás
  variable: '--font-poppins', // Variable CSS
});


const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos que usarás
  variable: '--font-dm-sans', // Variable CSS
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: "Pachamama Journeys",
  description: "Agencio de Turismo de Cusco-Peru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${merriweather.variable} ${dm_sans.variable} font-poppins antialiased relative`}
      >
        <Header />
        
        {children}

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
