import { auth } from "@/auth";
import styles from "./panel.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/admin");

  return (
    <div className={styles.container}>
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <UploadImage />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
