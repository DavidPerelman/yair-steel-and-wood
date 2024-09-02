"use client";

import { useEffect } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const links = [
  { title: "ראשי", path: "/" },
  { title: "פרויקטים", path: "/projects" },
  { title: "אודות", path: "/about" },
  { title: "צור קשר", path: "/contact" },
  { title: "ניהול", path: "/panel" },
];

const Links = ({ open, openMenuClick }) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
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
