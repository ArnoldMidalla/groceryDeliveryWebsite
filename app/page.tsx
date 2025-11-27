"use client";

import { useState } from "react";
import ActualProducts from "./components/actualProducts";
import TypeProduct from "./components/typeProduct";
import { useCart, useStore } from "./zust";
import TopSellers from "./components/topSellers";
import AP2ndDesign from "./components/aP2ndDesign";
import { item } from "./data/items";
import { products } from "./data/products";
import { sellers } from "./data/sellers";
import Link from "next/link";

export default function Home() {
  const { type, setAll, setVegetables, setDesserts, setDrinks } = useStore();
  const { cart, toggleCart } = useCart();
  const inCart = cart.includes(products[2].key);

  function addToCart() {
    toggleCart(products[2].key);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6 pt-40 pb-14 max-w-88 sm:max-w-3xl  lg:max-w-5xl">
        <section className="grid grid-cols-2 md:grid-cols-7 space-y-2 md:space-y-0 justify-between">
          {item.map((item) => (
            <TypeProduct
              key={item.id}
              title={item.title}
              sub={item.sub}
              image={item.image}
              id={item.id}
            />
          ))}
        </section>
        <section className="flex gap-2 sm:gap-4 w-full h-80 ">
          <div className="bg-pink-400 rounded-lg sm:rounded-xl h-full w-full overflow-hidden relative">
            <img src="/1.jpg" alt="" className="object-cover w-full h-full" />
            <div className="absolute left-6 top-16 font-dmSans flex flex-col gap-3">
              <div>
                <h1 className="text-4xl tracking-tight font-semibold text-white">
                  Fresh Organic
                </h1>
                <p className="text-yellow-100">Free for all</p>
                <p className="text-white font-semibold text-3xl">$55</p>
              </div>
              <Link
                href={"/"}
                className="py-2 px-5 rounded-full bg-yellow-200 font-medium text-yellow-800 max-w-fit"
              >
                Buy now
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 h-full w-full">
            <div className="bg-blue-200 rounded-lg sm:rounded-xl w-full h-full overflow-hidden relative">
              <img src="/2.jpg" alt="" className="object-cover w-full h-full" />
              <div className="absolute left-6 top-3 font-dmSans flex flex-col gap-1">
                <div>
                  <h1 className="text-3xl tracking-tight font-semibold text-white">
                    Fresh Organic
                  </h1>
                  <p className="text-cyan-100">Free for all</p>
                  <p className="text-white font-semibold text-2xl">$55</p>
                </div>
                <Link
                  href={"/"}
                  className="py-1 px-3 rounded-full bg-cyan-800 font-medium text-white max-w-fit"
                >
                  Buy now
                </Link>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4 h-full w-full">
              <div className="bg-blue-900 rounded-lg sm:rounded-xl w-full h-full overflow-hidden">
                <img
                  src="/3.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-full bg-orange-200 rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src="/3.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="pb-2 font-dmSans flex justify-between items-center">
            <h1 className="font-medium text-xs sm:text-sm opacity-80 leading-3.5">
              Featured Products
            </h1>
            <div className="text-xs sm:text-sm flex md:gap-2 font-medium opacity-80">
              <button
                onClick={setAll}
                className={`px-3 py-1 rounded-md duration-200 ${
                  type === "All" && "text-green-800 font-semibold scale-105"
                }`}
              >
                All
              </button>
              <button
                onClick={setVegetables}
                className={`px-3 py-1 rounded-md duration-200 ${
                  type === "Vegetables" &&
                  "text-green-800 font-semibold scale-105"
                }`}
              >
                Vegetables
              </button>
              <button
                onClick={setDesserts}
                className={`px-3 py-1 rounded-md duration-200 ${
                  type === "Desserts" &&
                  "text-green-800 font-semibold scale-105"
                }`}
              >
                Desserts
              </button>
              <button
                onClick={setDrinks}
                className={`px-3 py-1 rounded-md duration-200 ${
                  type === "Drinks" && "text-green-800 font-semibold scale-105"
                }`}
              >
                Drinks
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-5 md:gap-20 lg:gap-5 min-h-73">
            {(type === "All"
              ? products
              : products.filter((p) => p.category === type)
            ).map((p) => (
              <ActualProducts
                key={p.key}
                productId={p.key}
                category={p.category}
                name={p.name}
                image_description={p.image_description}
                image={p.image}
                rating={p.rating}
                price={p.price}
                price_range={p.options.price_range}
              />
            ))}
          </div>
        </section>
        {/* <section className="flex justify-between h-30">
          <div className="rounded-xl bg-blue-200 w-80 h-full"></div>
          <div className="rounded-xl bg-yellow-200 w-80 h-full"></div>
          <div className="rounded-xl bg-pink-200 w-80 h-full"></div>
        </section> */}
        <section className="font-dmSans">
          <h1 className="font-medium text-xs sm:text-sm opacity-80 pb-2">
            Top Sellers
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sellers.map((sellers) => (
              <TopSellers
                key={sellers.id}
                id={sellers.id}
                name={sellers.name}
                stars={sellers.rating}
                featured={sellers.featured}
                image={sellers.image}
              />
            ))}
          </div>
        </section>
        <section className="bg-purple-100 py-3 md:py-4 px-4.5 md:px-8 rounded-lg font-dmSans tracking-tight flex flex-col gap-1 sm:gap-0">
          <h1 className="text-purple-900 text-lg font-bold leading-4.5 sm:leading-6">
            In store or online, your health & safety is our top priority
          </h1>
          <p className="text-xs sm:text-sm opacity-70 leading-3.5">
            The only supermarket that makes your life easier, makes you enjoy
            life and makes it better
          </p>
        </section>
        <section className="font-dmSans hidden md:flex flex-col">
          <h1 className="font-medium text-sm opacity-80 pb-2">Best Sellers</h1>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 w-1/3">
              <AP2ndDesign
                key={products[0].key}
                name={products[0].name}
                category={products[0].category}
                image={products[0].image}
                image_description={products[0].image_description}
                productId={products[0].key}
                price={products[0].price}
                discount={products[0].discount}
              />
              <AP2ndDesign
                key={products[1].key}
                name={products[1].name}
                category={products[1].category}
                image={products[1].image}
                image_description={products[1].image_description}
                productId={products[1].key}
                price={products[1].price}
                discount={products[1].discount}
              />
              <AP2ndDesign
                key={products[2].key}
                name={products[2].name}
                category={products[2].category}
                image={products[2].image}
                image_description={products[2].image_description}
                productId={products[2].key}
                price={products[2].price}
                discount={products[2].discount}
              />
            </div>
            <div className="w-1/3 border-2 border-purple-800 rounded-lg overflow-hidden flex flex-col">
              <div className="h-1/2 w-full overflow-hidden">
                <img
                  src={products[2].image}
                  alt={products[2].name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="font-dmSans px-4 flex flex-col justify-between h-1/2 py-4">
                <div className="flex flex-col gap-2 h-1/2">
                  <h1 className="font-bold tracking-tight leading-5">
                    {products[2].name}
                  </h1>
                  <p className="text-xl font-bold tracking-tight">
                    {products[2].price}
                  </p>
                  <p className="text-sm tracking-tight">
                    {products[2].image_description}
                  </p>
                </div>
                <div className="h-1/2 flex flex-col justify-between">
                  <p className="text-sm tracking-tight">
                    Only <span className="text-lg font-semibold">33</span>{" "}
                    products available
                  </p>
                  <div className="h-1 w-full bg-orange-700 rounded-full"></div>
                  <button
                    className="py-3 bg-purple-800 hover:bg-purple-900 hover:scale-101 duration-200 rounded-lg text-white font-semibold tracking-tight w-full"
                    onClick={addToCart}
                  >
                    {inCart ? "Item added to cart" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-3 gap-2 w-1/3">
              <AP2ndDesign
                key={products[3].key}
                name={products[3].name}
                category={products[3].category}
                image={products[3].image}
                image_description={products[3].image_description}
                productId={products[3].key}
                price={products[3].price}
                discount={products[3].discount}
              />
              <AP2ndDesign
                key={products[4].key}
                name={products[4].name}
                category={products[4].category}
                image={products[4].image}
                image_description={products[4].image_description}
                productId={products[4].key}
                price={products[4].price}
                discount={products[4].discount}
              />
              <AP2ndDesign
                key={products[2].key}
                name={products[2].name}
                category={products[2].category}
                image={products[2].image}
                image_description={products[2].image_description}
                productId={products[2].key}
                price={products[2].price}
                discount={products[2].discount}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
