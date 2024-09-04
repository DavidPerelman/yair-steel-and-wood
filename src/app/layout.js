"use client";

import { Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomHead from "@/components/customHead/CustomHead";
import AuthProvider from "@/components/Provider";
const assistant = Assistant({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("check");

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
      <CustomHead title="יאיר ברזל ועץ" description="יאיר ברזל ועץ" />
      <body className={assistant.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <Navbar open={open} setOpen={setOpen} />
          <div className="container">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
