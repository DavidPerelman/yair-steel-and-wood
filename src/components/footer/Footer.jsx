import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.footerRight}>
        <span>&copy;</span>
        <span>יאיר פרלמן</span>
        <div>
          <span className={styles.span}></span>
        </div>
        <span>{year}</span>
        <div>
          <span className={styles.span}></span>
        </div>
        <span>
          <Link href="/privacy-policy">תנאי שימוש ומדיניות פרטיות</Link>
        </span>
      </div>
      {/* <span>-</span> */}
      <div className={styles.footerLeft}>
        <span>
          עיצוב ופיתוח האתר <span>:</span>
          <Link target="_blank" href="https://wa.me/972584455456">
            &nbsp;דוד פרלמן
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
