import AuthPage from "@/components/AuthPage";
import { Suspense } from "react";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <Suspense>
      <AuthPage mode="login" />
    </Suspense>
  );
}
