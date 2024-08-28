import { auth } from "@/lib/auth";
import styles from "./admin.module.css";
import { handleGithubLogin } from "@/lib/action";

const AdminPage = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
      <h1>התחברות</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <form action={formAction}>
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button type="submit">Login</button>
          </form> */}
          <form action={handleGithubLogin}>
            <button type="submit" name="action" value="google">
              Login With Github
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
