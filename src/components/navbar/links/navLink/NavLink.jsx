"use client";

import Link from "next/link";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.link}>
      <h4>{item.title}</h4>
    </Link>
  );
};

export default NavLink;
