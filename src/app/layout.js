"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomHead from "@/components/customHead/CustomHead";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuSrc, setMenuSrc] = useState("");

  useEffect(() => {
    setOpen(false);

    if (pathname !== "/") {
      setMenuSrc("/menu-gray.png");
    } else {
      setMenuSrc("/menu-white.png");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <CustomHead title="יאיר ברזל ועץ" description="יאיר ברזל ועץ" />
      <body className={inter.className}>
        <Navbar open={open} setOpen={setOpen} menuSrc={menuSrc} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

// RootLayout.getInitialProps = async () => {
//   const metadata = await fetchMetadata();

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// };
