export const authConfig = {
  pages: {
    signIn: "/admin",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isOnAdminPanelPage = request.nextUrl?.pathname.startsWith("/panel");

      //   ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      //   ONLY AUTHENTICADED USERS CAN REACH THE BLOG PAGE
      if (isOnAdminPanelPage && !user) {
        return false;
      }

      //   ONLY UNAUTHENTICADED USERS CAN REACH THE LOGIN PAGE
      if (isOnAdminPage && user) {
        return Response.redirect(new URL("/panel", request.nextUrl));
      }

      return true;
    },
  },
};
