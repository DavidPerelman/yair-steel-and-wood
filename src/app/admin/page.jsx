import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./admin.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import axios from "axios";
// import { register } from "@/lib/action";

const AdminPage = async () => {
  const register = async () => {
    "use server";
    try {
      const res = await axios.post("http://localhost:3000/api/register", {});
    } catch (error) {
      console.log(error);
    }
  };

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
          <form action={register}>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
