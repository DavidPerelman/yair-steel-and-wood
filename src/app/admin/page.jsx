import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./admin.module.css";
// import { register } from "@/lib/action";

const AdminPage = async () => {
  return (
    <div className={styles.container}>
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
