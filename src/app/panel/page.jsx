"use client";

import styles from "./panel.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
import CustomHead from "@/components/customHead/CustomHead";
import { signOut } from "next-auth/react";
import logout from "@/lib/actions/logout";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - ניהול אתר"
        description="יאיר ברזל ועץ - ניהול אתר"
      />
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <UploadImage />
          <button className={styles.logout} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
