import Link from "next/link";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    { title: "ראשי", path: "/" },
    { title: "פרויקטים", path: "/projects" },
    { title: "אודות", path: "/about" },
    { title: "צור קשר", path: "/contact" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link className={styles.link} key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
