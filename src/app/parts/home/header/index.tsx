"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

import AppLogo from "@/components/AppLogo";

import NavbarLinks from "@/app/parts/home/header/navbar-links";
import SearchInput from "@/app/parts/home/header/search";
import Counter from "@/app/parts/home/header/counter";

const Header: FC = () => {
  const [mobNav, setMobNav] = useState<boolean>(false);

  const toggleNav = () => {
    setMobNav(!mobNav);
  };

  return (
    <header className="sticky top-0 w-full h-[80px] bg-white z-10">
      <div className="flex justify-between items-center p-[20px]">
        <div className="flex space-x-[32px] items-center">
          <Link href="/" className="z-50">
            <AppLogo />
          </Link>

          {/* Navbar */}
          <div className="hidden lg:inline-flex">
            <NavbarLinks />
          </div>
        </div>

        <div className="flex items-center space-x-[24px]">
          <div className="hidden lg:inline">
            <SearchInput />
          </div>

          <div className="flex space-x-[20px]">
            <Link href="#">
              <Image
                alt="wishlist icon"
                src="/icons/wishlist.svg"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                alt="profile icon"
                src="/icons/profile.svg"
                height={24}
                width={24}
              />
            </Link>
            <Link href="/cart" className="relative">
              <div className="relative">
                <Image
                  alt="cart icon"
                  src="/icons/cart.svg"
                  width={24}
                  height={24}
                />
                <Counter />
              </div>
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => toggleNav()}>
            <Image
              alt="menu/cross icon"
              src={`/icons/${mobNav ? "close.svg" : "menu.svg"}`}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={
          mobNav
            ? "fixed top-0 h-full w-[85%] bg-white flex flex-col space-y-4 px-2 pt-16 md:hidden opacity-100 scale-1 border-r-2 border-doveGray/25 z-40"
            : "fixed top-0 h-full w-[85%] bg-white flex flex-col space-y-4 px-2 pt-16 md:hidden opacity-0 pointer-events-none ml-[-100%]"
        }
      >
        <SearchInput />
        <div className="ml-4">
          <NavbarLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
