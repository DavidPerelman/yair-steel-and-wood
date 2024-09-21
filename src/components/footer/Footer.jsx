import Link from "next/link";
import styles from "./footer.module.css";
import { FaCopyright } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <span className={styles.copyright}>
        <FaRegCopyright />
      </span>
      <span>יאיר פרלמן</span>
      <div>
        <span className={styles.span}></span>
      </div>
      <span>{year}</span>
      <div>
        <span className={styles.span}></span>
      </div>
      <span>
        עיצוב ופיתוח אתר <span>-</span>
        <Link target="_blank" href="https://wa.me/972584455456">
          &nbsp;דוד פרלמן
        </Link>
      </span>
      <div>
        <span className={styles.span}></span>
      </div>
      <span>
        <Link href="/privacy-policy">תנאי שימוש ומדיניות פרטיות</Link>
      </span>
    </div>
  );
};

export default Footer;
