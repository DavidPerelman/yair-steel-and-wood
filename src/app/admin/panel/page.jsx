import { auth } from "@/auth";
import styles from "./panel.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
import { redirect } from "next/navigation";
import { googleLogout } from "@/lib/action";

const AdminPage = async () => {
  const session = await auth();

  // if (!session?.user) redirect("/admin");

  return (
    <div className={styles.container}>
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <UploadImage />
          <form action={googleLogout}>
            <button type="submit">Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
