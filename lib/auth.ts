import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const hasGoogleCredentials =
  Boolean(process.env.GOOGLE_CLIENT_ID) &&
  Boolean(process.env.GOOGLE_CLIENT_SECRET);

const providers: NonNullable<NextAuthOptions["providers"]> = [
  CredentialsProvider({
    id: "demo",
    name: "Demo Account",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    authorize(credentials) {
      if (
        credentials?.email === "guest@audiophile.dev" &&
        credentials.password === "demo"
      ) {
        return {
          id: "demo-user",
          name: "Demo Customer",
          email: credentials.email,
        };
      }

      return null;
    },
  }),
];

if (hasGoogleCredentials) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  );
}

export const authOptions: NextAuthOptions = {
  providers,
  session: {
    strategy: "jwt",
  },
  secret:
    process.env.NEXTAUTH_SECRET ??
    (process.env.NODE_ENV === "development" ? "audiophile-dev-secret" : undefined),
  pages: {
    signIn: "/login",
  },
};
