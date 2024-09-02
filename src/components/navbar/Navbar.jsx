"use client";

import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({ menuSrc, open, setOpen }) => {
  const openMenuClick = () => {
    setOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    const navbar = document.querySelector("#navbar");

    const onResize = () => {
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);
    };

    navbar.classList.remove(styles.menuOpen);

    if (open) {
      navbar.classList.add(styles.menuOpen);
      navbar.classList.add(styles.stickyMenuOpen);
    } else {
      navbar.classList.remove(styles.menuOpen);
      navbar.classList.remove(styles.stickyMenuOpen);
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
      navbar.classList.remove(styles.home);
    }
  }, [open, pathname]);

  return (
    <div id="navbar" className={styles.container}>
      <Links open={open} openMenuClick={openMenuClick} menuSrc={menuSrc} />
      <Link href="/">
        <Image
          src="https://files.edgestore.dev/514s5z6elosh9is0/myPublicImages/_public/9c0aa524-1694-414b-a248-c10b54e40754.png"
          width={95}
          height={95}
          alt="logo"
        />
      </Link>
      <div className={styles.contact}>
        <Link target="_blank" href="tel:0584455456">
          <Image
            src="/call.png"
            width={30}
            height={30}
            alt="phone-logo"
            className={styles.contactLogo}
          />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image
            src="/instagram.png"
            width={33}
            height={33}
            alt="instagram-logo"
            className={styles.contactLogo}
          />
        </Link>
        <Link target="_blank" href="https://wa.me/972584422401">
          <Image
            className={styles.contactLogo}
            src="/whatsapp.png"
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
            className={styles.contactLogo}
            src="/gmail.png"
            width={33}
            height={33}
            alt="whatsapp-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
