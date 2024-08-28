import { handleLogout } from "@/lib/action";
import styles from "./panel.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";

const AdminPage = async () => {
  return (
    <div className={styles.container}>
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <UploadImage />
          <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
