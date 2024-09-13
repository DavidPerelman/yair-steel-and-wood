"use client";

import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactLinks from "./links/contactLinks/ContactLinks";

const Navbar = ({ open, setOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const openMenuClick = () => {
    setOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    const menuButton = document.querySelector("#menuButton");
    const body = document.getElementsByTagName("body")[0];
    const navbar = document.querySelector("#navbar");
    const logos = document.querySelectorAll(".logo");
    const navLinkTitles = document.querySelectorAll(".navLinkTitle");

    navbar.classList.remove(styles.menuOpen);

    if (open) {
      navbar.classList.add(styles.menuOpen);
      navbar.classList.add(styles.stickyMenuOpen);

      Object.entries(logos).map((element) =>
        element[1].classList.add(styles.stickyLogoOpenIcons)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.add(styles.stickyNavLinkTitlesOpen)
      );

      menuButton.classList.add(styles.stickymenuButtonOpen);

      body.style.overflow = "hidden";
    } else {
      navbar.classList.remove(styles.menuOpen);
      navbar.classList.remove(styles.stickyMenuOpen);

      Object.entries(logos).map((element) =>
        element[1].classList.remove(styles.stickyLogoOpenIcons)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.remove(styles.stickyNavLinkTitlesOpen)
      );

      menuButton.classList.remove(styles.stickymenuButtonOpen);

      body.style.overflow = "";
    }

    if (pathname === "/") {
      document.getElementById("navbar").style.backgroundColor = "white";
      document.getElementById("navbar").style.borderBottom = "none";
    } else {
      document.getElementById("navbar").style.borderBottom = "inset";
    }

    if (pathname === "/") {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    } else {
      document.getElementById("navbar").style.backgroundColor = "white";
    }

    window.onscroll = () => sampleFunction();

    function sampleFunction() {
      if (window.scrollY > 0) {
        setScrolled(true);
        document.getElementById("navbar").classList.add(styles.black);
        document.getElementById("navbar").style.borderBottom = "inset";
        document.getElementById("navbar").style.backgroundColor = "white";
      } else {
        setScrolled(false);

        document.getElementById("navbar").classList.remove(styles.black);

        if (pathname === "/") {
          document.getElementById("navbar").style.backgroundColor =
            "transparent";
          document.getElementById("navbar").style.borderBottom = "none";
        } else {
          document.getElementById("navbar").style.backgroundColor = "white";
          document.getElementById("navbar").style.borderBottom = "inset";
        }
      }
    }
  }, [open, pathname]);

  return (
    <div id="navbar" className={styles.container}>
      <Links open={open} openMenuClick={openMenuClick} scrolled={scrolled} />
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725533005/yh0u2addb6vxjwdfhvnn.png"
          width={95}
          height={95}
          alt="logo"
          unoptimized
          priority
        />
      </Link>
      <ContactLinks scrolled={scrolled} />
    </div>
  );
};

export default Navbar;
