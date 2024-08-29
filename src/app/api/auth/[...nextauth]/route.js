// export { GET, POST } from "@/auth";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/models";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectToDb();

          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            // throw new Error("Wrong Password");
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.email = user.email;
      }

      return token;
    },
    async session(session, token) {
      if (session.user) {
        session.user.email = token.email;
      }

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/admin/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
