import { Alata, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const alata = Alata({
  subsets: ["latin"],
  variable: "--font-alata",
  weight: ["400"]
});
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: ["300"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin_sans.variable} ${alata.variable} antialiased min-h-screen w-full`}>
        <div className="h-full flex flex-col justify-between">
          <Header />
          <main className="flex-1" >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
