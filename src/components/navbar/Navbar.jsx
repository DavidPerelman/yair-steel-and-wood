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
    const logos = document.querySelectorAll(".logo");

    const onResize = () => {
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);

      console.log(logos);

      Object.entries(logos).map((element) =>
        element[1].classList.toggle(styles.logoGray, window.scrollY > 0)
      );
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
      Object.entries(logos).map((element) =>
        console.log(element[1].classList.remove(styles.logoWhite))
      );
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

    if (pathname === "/") {
      Object.entries(logos).map((element) =>
        console.log(element[1].classList.add(styles.logoWhite))
      );
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
            className="logo"
            src="/call.svg"
            width={27}
            height={27}
            alt="phone-logo"
          />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image
            className="logo"
            src="/instagram.svg"
            width={33}
            height={33}
            alt="instagram-logo"
          />
        </Link>
        <Link target="_blank" href="https://wa.me/972584422401">
          <Image
            id={styles.whatsappLogo}
            className="logo"
            src="/whatsapp.svg"
            width={26}
            height={26}
            alt="whatsapp-logo"
          />
        </Link>
        <Link
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yair.steelandwood@gmail.com"
        >
          <Image
            id={styles.gmailLogo}
            className="logo"
            src="/gmail.svg"
            width={28}
            height={28}
            alt="whatsapp-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
