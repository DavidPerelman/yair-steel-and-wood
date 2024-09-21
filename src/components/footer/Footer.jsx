import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <span>&copy;</span>
      <span>יאיר פרלמן</span>
      <div>
        <span className={styles.span}></span>
      </div>
      <span className={styles.yearSpan}>{year}</span>
      <span>-</span>
      <span>עיצוב ופיתוח האתר</span>
      <div>
        <span className={styles.span}></span>
      </div>
      <span className={styles.yearSpan}>
        <Link target="_blank" href="https://wa.me/972584455456">
          דוד פרלמן
        </Link>
      </span>
    </div>
  );
};

export default Footer;
