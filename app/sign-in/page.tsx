import AuthPage from "@/components/AuthPage";
import { Suspense } from "react";

export const metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <Suspense>
      <AuthPage mode="sign-in" />
    </Suspense>
  );
}
