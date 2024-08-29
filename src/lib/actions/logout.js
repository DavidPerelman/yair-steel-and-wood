import { getSession, signOut } from "next-auth/react";

export default async function logout(req, res) {
  const session = await getSession({ req });

  if (session) {
    await signOut({ req });
  }
}
