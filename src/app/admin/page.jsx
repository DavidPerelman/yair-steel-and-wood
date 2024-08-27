import styles from "./admin.module.css";
import { handleGithubLogin } from "@/lib/action";
// import RegisterForm from "@/components/registerForm/RegisterForm";
// import LoginForm from "@/components/loginForm/LoginForm";

const AdminPage = async () => {
  return (
    <div className={styles.container}>
      <h1>ניהול אתר</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <RegisterForm /> */}
          <br />
          {/* <LoginForm /> */}
          <br />
          <form action={handleGithubLogin}>
            <button>Login with github</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
