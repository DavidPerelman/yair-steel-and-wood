"use client";

import Link from "next/link";
import "./navLink.css";

const NavLink = ({ item }) => {
  return (
    <Link href={item.path} className="link">
      <h3 className="navLinkTitle">{item.title}</h3>
    </Link>
  );
};

export default NavLink;
