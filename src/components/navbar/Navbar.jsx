"use client";

import Image from "next/image";
import Links from "../links/Links";
import styles from "./navbar.module.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const onResize = () => {
      const navbar = document.querySelector("#navbar");
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);
    };

    window.addEventListener("scroll", onResize);
  }, []);

  return (
    <div id="navbar" className={styles.container}>
      <Links />
      <Image src="/logo.png" width={100} height={100} alt="logo" />
      <div>Social</div>
    </div>
  );
};

export default Navbar;
