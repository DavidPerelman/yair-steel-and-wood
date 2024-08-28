"use client";

import { googleLogin } from "@/lib/action";
import styles from "./admin.module.css";
// import { handleGithubLogin } from "@/lib/action";
// import RegisterForm from "@/components/registerForm/RegisterForm";
// import LoginForm from "@/components/loginForm/LoginForm";
import { CldUploadWidget } from "next-cloudinary";

const AdminPage = () => {
  const uploadSuccess = (results) => {
    console.log(results.info.secure_url);
  };

  return (
    <div className={styles.container}>
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <RegisterForm /> */}
          <br />
          {/* <LoginForm /> */}
          <br />
          <form action={googleLogin}>
            <button type="submit" name="action" value="google">
              Login With Google
            </button>
          </form>

          <CldUploadWidget uploadPreset="ngj2sv5f" onSuccess={uploadSuccess}>
            {({ open }) => {
              return <button onClick={() => open()}>Upload an File</button>;
            }}
          </CldUploadWidget>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
