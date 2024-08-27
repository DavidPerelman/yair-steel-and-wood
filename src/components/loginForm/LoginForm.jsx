"use client";

import { useFormState } from "react-dom";
// import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  // const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);

  return (
    <form action={formAction}>
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      {/* <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link> */}
    </form>
  );
};

export default LoginForm;
