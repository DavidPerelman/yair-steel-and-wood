"use client";

import styles from "./panel.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
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
      <div className={styles.pageHeader}></div>
      {/* <div className={styles.container}> */}
      <div className={styles.wrapper}>
        <Link className={styles.logoutBtn} href={"/panel/menu"}>
          <h2 className={styles.linkHeader}>עריכת תפריט</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/video"}>
          <h2 className={styles.linkHeader}>סרטוט בדף הראשי</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/projects"}>
          <h2 className={styles.linkHeader}>עריכת פרויקטים</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/about"}>
          <h2 className={styles.linkHeader}>עריכת אודות</h2>
        </Link>
        <Link className={styles.logoutBtn} href={"/panel/contact"}>
          <h2 className={styles.linkHeader}>עריכת צור קשר</h2>
        </Link>
        {/* <UploadImage /> */}
        {/* <br /> */}
        <button className={styles.logoutBtn} onClick={logout}>
          <h2 className={styles.linkHeader}>Logout</h2>
        </button>
      </div>
    </div>
    // </div>
  );
};

export default AdminPage;
