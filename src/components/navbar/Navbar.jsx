"use client";

import Image from "next/image";
import Links from "../links/Links";
import styles from "./navbar.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import LogoutForm from "../logoutForm/LogoutForm";

const Navbar = () => {
  const pathname = usePathname();

  // console.log("pathname");

  useEffect(() => {
    console.log("useEffect");

    const onResize = () => {
      const navbar = document.querySelector("#navbar");
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);
    };

    const navbar = document.querySelector("#navbar");

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
      <div className={styles.contact}>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724775580/images/ecesznayvsrzlfxaptap.png"
            width={50}
            height={50}
            alt="instagram-logo"
          />
        </Link>
        <Link target="_blank" href="https://wa.me/972584422401">
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724777187/images/kuc6cyctjol0r0yfjy5a.png"
            width={43}
            height={43}
            alt="whatsapp-logo"
          />
        </Link>
      </div>
      <div>{/* <LogoutForm /> */}</div>
    </div>
  );
};

export default Navbar;
