import { Overpass, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-overpass",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});


export const metadata = {
  title: "BlogR",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overpass.variable} ${ubuntu.variable}  antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}