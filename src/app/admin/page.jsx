"use client";

import { upload } from "@/lib/upload";
import styles from "./admin.module.css";
// import { handleGithubLogin } from "@/lib/action";
// import RegisterForm from "@/components/registerForm/RegisterForm";
// import LoginForm from "@/components/loginForm/LoginForm";
import { useFormState } from "react-dom";

const AdminPage = () => {
  const [url, formAction] = useFormState(upload, null);
  console.log(url);

  return (
    <div className={styles.container}>
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <RegisterForm /> */}
          <br />
          {/* <LoginForm /> */}
          <br />
          {/* <form action={handleGithubLogin}>
            <button>Login with github</button>
          </form> */}
          <form action={formAction}>
            <input type="file" accept="video/*" name="video" />
            <button
              type="submit"
              className="bg-blue-800 text-white p-2 rounded-md"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
