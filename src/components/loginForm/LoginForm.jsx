"use client";

import { useFormState } from "react-dom";
// import { login } from "@/lib/action";
import { useState, useEffect } from "react";
import { login } from "@/lib/actions/login";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <form action={formAction}>
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginForm;
