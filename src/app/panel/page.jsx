import { handleLogout } from "@/lib/action";
import styles from "./panel.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
import CustomHead from "@/components/customHead/CustomHead";

const AdminPage = async () => {
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
          <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
