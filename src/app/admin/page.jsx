import { auth } from "@/lib/auth";
import styles from "./admin.module.css";
import { handleGithubLogin, login, register } from "@/lib/action";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <h1>התחברות</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={login}>
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
          </form>
          {/* <form action={register}>
            <button type="submit" name="action" value="google">
              register
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
