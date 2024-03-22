"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "@/components/Cart";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const Header = () => {
  const { handleClick, cart } = useContext(CartContext);
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
                    pathName === link.href ? "link-active" : "link"
                  }`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
      </nav>
      <Cart />
    </>
  );
};

export default Header;
