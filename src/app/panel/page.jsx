"use client";

import styles from "./panel.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import logout from "@/lib/actions/logout";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - ניהול אתר"
        description="יאיר ברזל ועץ - ניהול אתר"
      />
      <h1>ניהול אתר</h1>
      <div className={styles.pageHeaderLine}></div>
      <div className={styles.wrapper}>
        <Link className={styles.logoutBtn} href={"/panel/menu"}>
          <h2 className={styles.linkHeader}>עריכת תפריט</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/video"}>
          <h2 className={styles.linkHeader}>סרטון בדף הראשי</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/projectsPanel"}>
          <h2 className={styles.linkHeader}>עריכת פרויקטים</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/about"}>
          <h2 className={styles.linkHeader}>עריכת אודות</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/contact"}>
          <h2 className={styles.linkHeader}>עריכת צור קשר</h2>
        </Link>
        {/* <UploadImage /> */}
        <button className={styles.logoutBtn} onClick={logout}>
          <h2 className={styles.linkHeader}>התנתקות</h2>
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
