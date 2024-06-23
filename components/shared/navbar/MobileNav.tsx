"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const MobileNavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((el) => {
        const isActive =
          (pathname.includes(el.route) && el.route.length > 1) ||
          pathname === el.route;

        return (
          <SheetClose asChild key={el.route}>
            <Link
              href={el.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark-300"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              {/* <Image
                src={el.imgURL}
                alt={el.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              /> */}
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
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="cursor-pointer invert dark:invert-0 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-light-900">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.png" alt="Stronger Logo" width={23} height={23} />
          <p className="primary-text-gradient font-spaceGrotesk text-[24px] font-semibold leading-[31.2px]">
            Stronger
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <MobileNavContent />
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SignedOut>
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-[12px] font-medium leading-[15.6px] shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="btn-tertiary min-h-[41px] w-full rounded-lg border-light-700 px-4 py-3 text-[12px] font-medium leading-[15.6px] text-dark-400 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </SignedOut>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
