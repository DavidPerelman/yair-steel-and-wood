"use client";

import { useFormState } from "react-dom";
// import { login } from "@/lib/action";
import { useState, useEffect, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  // const [state, formAction] = useFormState(login, undefined);
  const [isClient, setIsClient] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <section className="w-full h-screen flex items-center justify-center">
            <form
              className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
        border border-solid border-black bg-white rounded"
              onSubmit={handleSubmit}
            >
              {error && <div className="text-black">{error}</div>}
              <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>
              <label className="w-full text-sm">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-8 border border-solid border-black rounded p-2"
                name="email"
              />
              <label className="w-full text-sm">Password</label>
              <div className="flex w-full">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-8 border border-solid border-black rounded p-2"
                  name="password"
                />
              </div>
              <button className="w-full border border-solid border-black rounded">
                Sign In
              </button>

              <Link
                href="/register"
                className="text-sm text-[#888] transition duration-150 ease hover:text-black"
              >
                Don&apos;t have an account?
              </Link>
            </form>
          </section>
        </>
      ) : (
        // <form action={formAction}>
        //   <input type="text" placeholder="email" name="email" />
        //   <input type="password" placeholder="password" name="password" />
        //   <button>Login</button>
        // </form>
        <></>
      )}
    </>
  );
};

export default LoginForm;
