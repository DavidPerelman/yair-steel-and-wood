import Link from "next/link";
import styles from "./links.module.css";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const Links = async () => {
  const links = [
    { title: "ראשי", path: "/" },
    { title: "פרויקטים", path: "/projects" },
    { title: "אודות", path: "/about" },
    { title: "צור קשר", path: "/contact" },
  ];

  const session = await auth();
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link className={styles.link} key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
      {session ? (
        <>
          <form action={handleLogout}>
            <button className={styles.link}>Logout</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Links;
