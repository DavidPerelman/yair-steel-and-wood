"use client";

import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./admin.module.css";
import CustomHead from "@/components/customHead/CustomHead";
// import { register } from "@/lib/action";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - התחברות"
        description="יאיר ברזל ועץ - התחברות"
      />
      <h1>התחברות</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LoginForm />
          {/* <form action={register}>
            <button>Register</button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
