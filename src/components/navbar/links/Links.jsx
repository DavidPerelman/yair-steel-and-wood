"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { useEffect, useState } from "react";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { title: "ראשי", path: "/" },
  { title: "פרויקטים", path: "/projects" },
  { title: "אודות", path: "/about" },
  { title: "צור קשר", path: "/contact" },
];

const Links = ({ open, openMenuClick, menuSrc }) => {
  const pathname = usePathname();
  // const [menuSrc, setMenuSrc] = useState("");

  useEffect(() => {
    // if (pathname !== "/") {
    //   setMenuSrc("/menu-gray.png");
    // } else {
    //   setMenuSrc("/menu-white.png");
    // }
  }, []);

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
        {/* <button
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button> */}
        <Image
          className={styles.menuButton}
          src={menuSrc}
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
