"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
const Footer = () => {
    
    const links = [
      { label: "home", href: "/" },
      { label: "headphones", href: "/headphones" },
      { label: "speakers", href: "/speakers" },
      { label: "earphones", href: "/earphones" },
    ];

    const social_links = [
      { icon: <GrFacebook/>, href: "/facebook" },
      { icon: <GrInstagram/>, href: "/instagram" },
      { icon: <GrTwitter/>, href: "/twitter" },
    ];
  return (
    <footer className="w-full h-[50vh] bg-black">
      <div className="container mx-auto flex py-[5rem] h-full relative">
        <div className="w-[100px] h-[4px] bg-primary absolute top-0 left-0"></div>
        <div className="w-1/2 h-full flex justify-between flex-col items-start">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo img"
            className="object-contain"
            width={143}
            height={25}
          />
          <p className="text-white opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&rsquo;re open 7 days a week.
          </p>

          <p className="text-white opacity-50 font-medium">
            Copyright © {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-[5rem]">
          <ul className="flex items-end gap-5 justify-end">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-end gap-5 justify-end">
            {social_links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white text-[1.5rem]">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer
