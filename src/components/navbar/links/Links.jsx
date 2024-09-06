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

const Links = ({ open, openMenuClick }) => {
  const pathname = usePathname();

  useEffect(() => {
    const linksContainer = document.querySelector("#links");

    const onResize = () => {
      linksContainer.classList.toggle(
        styles.linksContainerGray,
        window.scrollY > 0
      );
    };

    if (pathname === "/") {
      window.addEventListener("scroll", onResize);
    }

    if (pathname !== "/") {
      linksContainer.classList.remove(styles.linksContainerWhite);

      linksContainer.classList.add(styles.linksContainerGray);
    } else {
      linksContainer.classList.remove(styles.linksContainerGray);
    }
  }, [pathname]);

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
