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
          src="https://instagram.fsdv2-1.fna.fbcdn.net/v/t51.2885-19/419279788_233022136515472_58428490118301314_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsdv2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=r5Os1k4QcQ8Q7kNvgHpduTu&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYAnxcisoOdxglaCN8DUXvfi4g-G3bkHR4i5rC0Zk1ITkQ&oe=66D3595D&_nc_sid=8f1549"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image src="/instagram-logo.png" width={50} height={50} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
