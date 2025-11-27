"use client";

import { Input } from "@/components/ui/input";
import { CirclePercent, Heart, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { useCart, useHeart } from "./zust";
import DropdownMenuTest from "./components/mobileMenu";

export default function Navbar() {
  const { heart } = useHeart();
  const { cart } = useCart();

  return (
    <div className="flex flex-col gap-4 fixed w-full bg-white/75 backdrop-blur-xl pb-3 z-50">
      <section className="flex items-center justify-center bg-purple-800 px-8 sm:px-0 py-2">
        <p className="font-dmSans text-white text-xs font-medium text-center leading-3">
          Free delivery & 40% discount for your next 3 orders! Place your 1st
          order
        </p>
      </section>
      <div className="flex flex-col items-center gap-4">
        <section className="flex w-full gap-4 items-center justify-between max-w-88 sm:max-w-3xl  lg:max-w-5xl">
          <Link href={"/"}>
            <img src="/logo.svg" alt="Freshly logo" className="h-6" />
          </Link>
          <Input
            type="search"
            placeholder="Type your products"
            className="h-8 text-sm focus:shadow-none max-w-24 sm:max-w-90 bg-white/70 focus:bg-white"
          />
          <div className="flex gap-4 items-center">
            <Link href={"/profile"} className="rounded-full bg-gray-100 p-2">
              <UserRound
                className="opacity-75 hover:text-green-800 duration-200"
                size={20}
              />
            </Link>
            <Link
              href={"/saved"}
              className="flex items-start gap-1 min-w-8 hover:scale-110 duration-300"
            >
              <p className="font-medium opacity-80 font-dmSans top-2 right-2 text-sm">
                {heart.length > 0 && heart.length}
              </p>
              <Heart
                className="opacity-75 duration-200"
                size={18}
                color={heart.length > 0 ? "transparent" : "black"}
                fill={heart.length > 0 ? "red" : "transparent"}
              />
            </Link>
            <Link
              href={"/cart"}
              className="flex items-start gap-1 min-w-8 hover:scale-110 duration-300"
            >
              <p className="font-medium opacity-80 font-dmSans top-2 right-2 text-sm">
                {cart.length > 0 && cart.length}
              </p>
              <ShoppingCart
                className="opacity-75 duration-200"
                size={18}
                color={cart.length > 0 ? "green" : "black"}
                fill={cart.length > 0 ? "green" : "transparent"}
              />
            </Link>
          </div>
        </section>
        <section className="font-dmSans text-xs flex justify-between items-center w-full max-w-88 sm:max-w-3xl lg:max-w-5xl">
          <div className="flex md:hidden">
            <DropdownMenuTest />
          </div>
          <div className="h-10 border border-neutral-300 hidden md:flex items-center hover:bg-white duration-200 rounded">
            <div className="flex gap-6 font-medium px-4 w-fit ">
              <Link
                href={"/"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Home
              </Link>
              <Link
                href={"/pages"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Pages
              </Link>
              <Link
                href={"/shop"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Shop
              </Link>
              <Link
                href={"/vendors"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Vendor
              </Link>
              <Link
                href={"/elements"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Elements
              </Link>
              <Link
                href={"/blog"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Blog
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-green-900 hover:scale-110 duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="text-xs flex font-medium h-10">
            <div className="flex gap-1 justify-center items-center w-34">
              <CirclePercent size={15} />
              <p>Weekly discount</p>
            </div>
            <div className=" text-white bg-purple-800 flex flex-col w-30 h-full justify-center items-center rounded-r-md">
              <p className="text-[0.67rem]">Hotline Number</p>
              <p>+9888-256-666</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
