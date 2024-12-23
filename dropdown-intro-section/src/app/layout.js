import { Epilogue } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: ["--font-epilogue"],
  weight: ["500", "700"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable}  antialiased min-h-screen bg-almost-white`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
