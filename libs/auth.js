import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

export const authOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      const userSet = {
        name: session.user.name,
        image: session.user.image,
        token: session.accessToken,
      };
      const res = await fetch(process.env.BASED_URL + "api/linelogin", {
        method: "POST",
        body: JSON.stringify(userSet),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.status == 200) {
        session.accessId = data.data._id;
        session.accessStatus = data.data._id;
      }
      return session;
    },
  },
  session: {
    maxAge: 31536000,
  },
};
export default NextAuth(authOptions);
