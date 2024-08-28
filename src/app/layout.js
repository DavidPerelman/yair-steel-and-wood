"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "יאיר ברזל ועץ",
//   description: "יאיר ברזל ועץ",
// };

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
      <body className={inter.className}>
        <Navbar open={open} setOpen={setOpen} menuSrc={menuSrc} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
