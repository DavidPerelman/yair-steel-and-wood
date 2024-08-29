// export { GET, POST } from "@/auth";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/models";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const loginuser = {
  email: "dperelman1@gmail.com",
  password: "123456",
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        // const { email, password } = credentials;
        try {
          await connectToDb();

          const user = await User.findOne({ email: loginuser.email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            loginuser.password,
            user.password
          );

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
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }

      console.log(session);

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
