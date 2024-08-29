import { signIn } from "next-auth/react";

export const login = async (previousState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password, redirect: false });
    return;
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    throw error;
  }
};
