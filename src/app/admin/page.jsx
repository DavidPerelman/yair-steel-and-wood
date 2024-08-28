"use client";

import { googleLogin } from "@/lib/action";
import styles from "./admin.module.css";
// import RegisterForm from "@/components/registerForm/RegisterForm";
// import LoginForm from "@/components/loginForm/LoginForm";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <h1>התחברות</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={googleLogin}>
            <button type="submit" name="action" value="google">
              Login With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
