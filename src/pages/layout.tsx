import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({

  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{padding: 40, fontSize: 30}}>Soy el header</header>
        {children}
      <footer style={{padding: 40, fontSize: 30}}>SOY EL FOOTER</footer>
      </body>
    </html>
  );
}
