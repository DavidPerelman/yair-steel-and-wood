"use client";

import { useEffect } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { title: "ראשי", path: "/" },
  { title: "פרויקטים", path: "/projects" },
  { title: "אודות", path: "/about" },
  { title: "צור קשר", path: "/contact" },
  { title: "ניהול", path: "/panel" },
];

const Links = ({ open, openMenuClick, scrolled }) => {
  const pathname = usePathname();

  useEffect(() => {
    const linksContainer = document.querySelector("#links");
    const menuButton = document.querySelector("#menuButton");

    if (pathname === "/" || pathname === "/about") {
      linksContainer.classList.add(styles.whiteFilter);
      linksContainer.classList.remove(styles.grayFilter);
      menuButton.classList.add(styles.whiteFilter);
      menuButton.classList.remove(styles.grayFilter);
    } else {
      linksContainer.classList.add(styles.grayFilter);
      linksContainer.classList.remove(styles.whiteFilter);
      menuButton.classList.add(styles.grayFilter);
      menuButton.classList.remove(styles.whiteFilter);
    }

    if (scrolled) {
      linksContainer.classList.add(styles.grayFilter);
      menuButton.classList.add(styles.grayFilter);
    } else {
      linksContainer.classList.remove(styles.grayFilter);
      menuButton.classList.remove(styles.grayFilter);
    }
  }, [pathname, scrolled]);

  return (
    <div className={styles.container}>
      <div className={styles.links} id="links">
        {links.map((link) => (
          <NavLink item={link} key={link.title}>
            {link.title}
          </NavLink>
        ))}
      </div>
      <div>
        <Image
          id="menuButton"
          className={styles.menuButton}
          src={"/menu-button-gray.svg"}
          alt=""
          width={30}
          height={30}
          onClick={openMenuClick}
          unoptimized
        />
      </div>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
