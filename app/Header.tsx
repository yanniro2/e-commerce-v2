"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "@/components/Cart";
import { useState } from "react";

const Header = () => {
  const [hide, setHide] = useState<boolean>(false);
  const handleClick = () => {
    setHide(() => !hide);
  };
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
              src="/desktop/header/logo.svg"
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
          <button onClick={handleClick}>
            <Image
              src="/desktop/header/icon-cart.svg"
              alt="shop icon"
              width={23}
              height={20}
            />
          </button>
        </div>
      </nav>
      {hide && <Cart hide={hide} handleClick={handleClick} />}
    </>
  );
};

export default Header;
