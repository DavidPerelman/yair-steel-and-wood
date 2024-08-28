"use client";

import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({ menuSrc, open, setOpen }) => {
  const openMenuClick = () => {
    setOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    console.log("navbar");

    const navbar = document.querySelector("#navbar");

    const onResize = () => {
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);
    };

    navbar.classList.remove(styles.menuOpen);

    if (open) {
      navbar.classList.add(styles.menuOpen);
    } else {
      navbar.classList.remove(styles.menuOpen);
    }

    if (pathname !== "/") {
      navbar.classList.add(styles.white);
    } else {
      navbar.classList.remove(styles.white);
    }

    if (pathname === "/") {
      window.addEventListener("scroll", onResize);
      navbar.classList.add(styles.home);
    } else {
      window.addEventListener("scroll", onResize);
      navbar.classList.remove(styles.home);
    }
  }, [open, pathname]);

  return (
    <div id="navbar" className={styles.container}>
      <Links open={open} openMenuClick={openMenuClick} menuSrc={menuSrc} />
      <Link href="/">
        <Image
          src="https://files.edgestore.dev/514s5z6elosh9is0/myPublicImages/_public/9c0aa524-1694-414b-a248-c10b54e40754.png"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div className={styles.contact}>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724775580/images/ecesznayvsrzlfxaptap.png"
            width={44}
            height={44}
            alt="instagram-logo"
          />
        </Link>
        <Link target="_blank" href="https://wa.me/972584422401">
          <Image
            id={styles.whatsappLogo}
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724777187/images/kuc6cyctjol0r0yfjy5a.png"
            width={33}
            height={33}
            alt="whatsapp-logo"
          />
        </Link>
        <Link
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yair.steelandwood@gmail.com"
        >
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724824960/tuw3walof8qzlasd3dpt.png"
            width={37}
            height={31}
            alt="whatsapp-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
