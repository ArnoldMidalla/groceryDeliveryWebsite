"use client";

import { useHeart } from "../zust";
import { products } from "../data/products";

export default function Saved() {
  const { heart } = useHeart();
  console.log(heart);

  const savedProducts = products.filter((p) => heart.includes(p.key));

  if (heart.length > 0) {
    return (
      <div className="flex justify-center">
        <section className="pt-40 min-h-dvh max-w-88 sm:max-w-2xl lg:max-w-5xl flex justify-center font-dmSans">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 h-fit">
            {savedProducts.map((item) => (
              <div key={item.key} className="flex gap-2 items-center">
                <img
                  src={item.image}
                  className="min-w-32 h-32 object-cover rounded-lg"
                />
                <div className="font-dmSans flex flex-col gap-2">
                  <h1 className=" font-semibold leading-4 tracking-tight">{item.name}</h1>
                  <p className="text-sm leading-3 opacity-80">{item.image_description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <section className="pt-40 min-h-dvh min-w-dvw flex justify-center items-center font-dmSans">
        <h1 className="text-center font-bold text-2xl tracking-tight leading-7">
          You haven't saved an item
          <br />
          Continue browsing
        </h1>
      </section>
    );
  }
}
