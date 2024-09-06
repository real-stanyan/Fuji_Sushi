import { Josefin_Sans } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: "400",
});

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
});

export const metadata = {
  title: "Fuji Sushi",
  description: "Generated by create next app",
};

import Header from "./components/Header";
import FuncBtn from "./components/FuncBtn";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JosefinSans.variable} ${BebasNeue.variable}`}>
        <Header />
        <FuncBtn />
        {children}
      </body>
    </html>
  );
}
