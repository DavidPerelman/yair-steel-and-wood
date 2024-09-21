"use client";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomHead from "@/components/customHead/CustomHead";
import AuthProvider from "@/components/Provider";
import Script from "next/script";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutPage, setAboutPage] = useState(pathname === "/about");

  useEffect(() => {
    setOpen(false);
    const container = document.querySelector(".container");

    if (pathname === "/") {
      container.classList.add("homePageContainer");
    } else {
      container.classList.remove("homePageContainer");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></Script>
      </head>
      <CustomHead title="יאיר ברזל ועץ" description="יאיר ברזל ועץ" />
      <body suppressHydrationWarning={true}>
        <div>
          <AuthProvider>
            <Navbar open={open} setOpen={setOpen} />
            <div className="container">{children}</div>
            {/* {!aboutPage && <Footer />} */}
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
