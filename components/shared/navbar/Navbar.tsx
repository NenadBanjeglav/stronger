"use client";

/* eslint-disable tailwindcss/no-custom-classname */
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { Button } from "@/components/ui/button";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="hidden h-full gap-6 sm:flex">
      {sidebarLinks.map((el) => {
        const isActive =
          (pathname.includes(el.route) && el.route.length > 1) ||
          pathname === el.route;

        return (
          <Link
            key={el.label}
            href={el.route}
            className={`${
              isActive ? "primary-text-gradient rounded-lg" : "text-dark-300"
            } flex items-center justify-start gap-4 bg-transparent p-4`}
          >
            <p
              className={`${
                isActive
                  ? "text-[18px] font-bold leading-[140%]"
                  : "text-[18px] font-medium leading-[25.2px]"
              }`}
            >
              {el.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const Navbar = () => {
  return (
    <nav className="shadow-light-300 fixed z-50 flex w-full items-center justify-between gap-5 bg-light-900 p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/logo.png" alt="Stronger Logo" width={23} height={23} />
        <p className="primary-text-gradient font-spaceGrotesk text-[24px] font-semibold leading-[31.2px]">
          Stronger
        </p>
      </Link>

      <NavContent />

      <div className="flex items-center justify-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ef4444",
              },
            }}
          />
        </SignedIn>
        <div className="hidden gap-3 sm:flex">
          <SignedOut>
            <Link href="/sign-in">
              <Button className="btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-[12px] font-medium leading-[15.6px] shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>

            <Link href="/sign-in">
              <Button className="btn-tertiary min-h-[41px] w-full rounded-lg border-light-700 px-4 py-3 text-[12px] font-medium leading-[15.6px] text-dark-400 shadow-none">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
