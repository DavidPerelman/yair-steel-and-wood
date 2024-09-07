"use client";

import Link from "next/link";
import "./navLink.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className="link">
      {item.path === pathname ? (
        <h3 className={`navLinkTitle underline`}>{item.title}</h3>
      ) : (
        <h3 className={`navLinkTitle`}>{item.title}</h3>
      )}
    </Link>
  );
};

export default NavLink;
