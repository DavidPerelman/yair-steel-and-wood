"use client";

import { Inter, Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomHead from "@/components/customHead/CustomHead";
import Head from "next/head";
import AuthProvider from "@/components/Provider";
const assistant = Assistant({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuSrc, setMenuSrc] = useState("");

  useEffect(() => {
    setOpen(false);
    const container = document.querySelector(".container");
    console.log(container);

    if (pathname !== "/") {
      setMenuSrc("/menu-gray.png");
      container.classList.add("homePageContainer");
    } else {
      setMenuSrc("/menu-white.png");
      container.classList.remove("homePageContainer");
    }

    if (pathname === "/") {
      container.classList.add("homePageContainer");
    } else {
      container.classList.remove("homePageContainer");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <CustomHead title="יאיר ברזל ועץ" description="יאיר ברזל ועץ" />
      <body className={assistant.className}>
        <AuthProvider>
          <Navbar open={open} setOpen={setOpen} menuSrc={menuSrc} />
          <div className="container">{children}</div>
        </AuthProvider>
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
