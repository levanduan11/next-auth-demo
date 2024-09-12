import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const allowedDomains = ["gmail.com"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET
  })],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const email = profile?.email;
        const isAllowedDomain = allowedDomains.reduce(
          (acc, domain) => acc || (!!email && email?.endsWith(domain)),
          false
        );
        if (!isAllowedDomain) {
          return false;
        } else {
          return true;
        }
      }
      return true;
    },
    redirect() {
      return "/";
    },
    
  },
  pages: {
    error: "/error/auth",
  },
});
