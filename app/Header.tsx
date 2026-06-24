"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "@/components/Cart";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { handleClick, cart } = useContext(CartContext);
  const { data: session, status } = useSession();
  const pathName = usePathname();
  const links = [
    { label: "home", href: "/" },
    { label: "headphones", href: "/headphones" },
    { label: "speakers", href: "/speakers" },
    { label: "earphones", href: "/earphones" },
  ];

  return (
    <>
      <nav className="w-full h-min bg-black fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto py-8 text-white flex items-center justify-between border-b-[1px] border-b-bGray">
          <a href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo img"
              className="object-contain"
              width={143}
              height={25}
            />
          </a>
          <ul className="flex items-center gap-5 justify-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    (pathName === link.href && pathName !== "/") ||
                    (pathName.startsWith(link.href) && link.href !== "/") ||
                    (pathName === "/" && link.href === "/")
                      ? "link-active"
                      : "link"
                  }`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            {status !== "loading" && (
              session ? (
                <button
                  className="link"
                  onClick={() => signOut()}>
                  sign out
                </button>
              ) : (
                <Link
                  className="link"
                  href="/login">
                  sign in
                </Link>
              )
            )}
            <button onClick={handleClick} className="relative">
              <Image
                src="/assets/shared/desktop/icon-cart.svg"
                alt="shop icon"
                width={23}
                height={20}
              />
              {cart.length === 0 ? (
                <></>
              ) : (
                <div className="w-[2rem] h-[2rem] bg-primary absolute -top-[1rem] -right-[1rem] rounded-full text-white flex items-center justify-center font-semibold">
                  {cart.length}
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
      <Cart />
    </>
  );
};

export default Header;
