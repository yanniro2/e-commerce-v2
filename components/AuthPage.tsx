"use client";

import Header from "@/app/Header";
import Footer from "@/app/Footer";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type AuthPageProps = {
  mode: "login" | "sign-in";
};

export default function AuthPage({ mode }: AuthPageProps) {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [hasGoogleProvider, setHasGoogleProvider] = useState(false);
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const isLogin = mode === "login";

  const title = isLogin ? "login" : "sign in";
  const alternate = isLogin
    ? { label: "sign in", href: `/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}` }
    : { label: "login", href: `/login?callbackUrl=${encodeURIComponent(callbackUrl)}` };

  useEffect(() => {
    getProviders().then((providers) => {
      setHasGoogleProvider(Boolean(providers?.google));
    });
  }, []);

  return (
    <main className="bg-gray min-h-screen pt-[7rem]">
      <Header />
      <section className="container mx-auto grid min-h-[calc(100vh-7rem)] grid-cols-[1fr_28rem] items-center gap-12 py-16">
        <div className="overflow-hidden rounded-lg bg-black">
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt="Premium headphones"
            width={720}
            height={600}
            priority
            className="h-[34rem] w-full object-cover opacity-80"
          />
        </div>

        <div className="bg-white p-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h1 className="h3">{title}</h1>
            <Link href={alternate.href} className="btn btn-3 px-0 py-0">
              {alternate.label}
            </Link>
          </div>

          {session ? (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="p-body font-bold">{session.user?.name}</p>
                  <p className="p-body opacity-50">{session.user?.email}</p>
                </div>
              </div>
              <Link href={callbackUrl} className="btn btn-1 text-center">
                continue
              </Link>
              <button className="btn btn-2" type="button" onClick={() => signOut()}>
                sign out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <button
                className="btn btn-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                disabled={status === "loading"}
                onClick={() =>
                  signIn("demo", {
                    callbackUrl,
                    email: "guest@audiophile.dev",
                    password: "demo",
                  })
                }>
                continue as guest
              </button>
              {hasGoogleProvider && (
                <button
                  className="btn btn-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="button"
                  disabled={status === "loading"}
                  onClick={() => signIn("google", { callbackUrl })}>
                  continue with google
                </button>
              )}
              <Link href="/" className="btn btn-3 text-center">
                continue shopping
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
