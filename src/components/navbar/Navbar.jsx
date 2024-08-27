"use client";

import Image from "next/image";
import Links from "../links/Links";
import styles from "./navbar.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const onResize = () => {
      const navbar = document.querySelector("#navbar");
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);
    };

    const navbar = document.querySelector("#navbar");
    if (pathname === "/") {
      window.addEventListener("scroll", onResize);
      navbar.classList.add(styles.home);
    } else {
      navbar.classList.remove(styles.home);
    }
  }, [pathname]);

  return (
    <div id="navbar" className={styles.container}>
      <Links />
      <Link href="/">
        <Image
          src="https://files.edgestore.dev/514s5z6elosh9is0/myPublicImages/_public/9c0aa524-1694-414b-a248-c10b54e40754.png"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image
            src="https://files.edgestore.dev/514s5z6elosh9is0/myPublicImages/_public/f39d4c78-d6d7-46f0-be67-ea20575c7ead.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
