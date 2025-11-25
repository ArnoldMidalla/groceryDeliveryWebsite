"use client";

import { useState } from "react";
import ActualProducts from "./components/actualProducts";
import TypeProduct from "./components/typeProduct";
import { useStore } from "./zust";
import TopSellers from "./components/topSellers";

const item = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww",
    title: "Vegetables",
    sub: "12 products",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fruits",
    sub: "20 products",
  },
  {
    id: 3,
    image:
      "https://static.vecteezy.com/system/resources/previews/030/666/664/large_2x/eggs-with-white-background-high-quality-ultra-hd-free-photo.jpg",
    title: "Dairy & Eggs",
    sub: "9 products",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVhdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Meat & Seafood",
    sub: "15 products",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?cs=srgb&dl=pexels-nietjuhart-1906435.jpg&fm=jpg",
    title: "Snacks & Candy",
    sub: "35 products",
  },
  {
    id: 6,
    image:
      "https://www.hdwallpapers.in/download/coca_cola_ice_cubes_splashes_beverages_hd_ice_cube-1920x1080.jpg",
    title: "Drinks",
    sub: "18 products",
  },
  {
    id: 7,
    image:
      "https://assets.epicurious.com/photos/5af21264d0e87c226f2485b1/16:9/w_2560%2Cc_limit/The-Best-Tools-for-Organizing-Your-Family's-Pantry-25022018.jpg",
    title: "Pantry Staples",
    sub: "25 products",
  },
];

const products = [
  {
    key: 1,
    category: "Vegetables",
    name: "Russet Idaho Potatoes Fresh Premium Fruit and Produce",
    image_description: "Basket of small, round potatoes",
    options: [
      { size: "100gm", price_range: "$30.00 - $38.00" },
      { size: "500gm", price_range: "$30.00 - $38.00" },
    ],
    discount: "16%",
    rating: 5.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ950eCmi2uIfVhQubfVHecBgPI3jCPhK3LwA&s",
  },
  {
    key: 2,
    category: "Desserts",
    name: "Aptamil Gold+ ProNutra Biotic Stage 1 Infant",
    image_description: "Blue and gold infant formula can",
    options: [
      { size: "100gm", price_range: "$25.00 - $30.00" },
      { size: "375ml", price_range: "$25.00 - $30.00" },
    ],
    discount: "44%",
    rating: 5.0,
    image:
      "https://waziri.ng/wp-content/uploads/2023/12/IMG_20230324_131452-1.jpg",
  },
  {
    key: 3,
    category: "Vegetables",
    name: "Whole Foods Market, Organic Trimmed Green",
    image_description: "Pile of green beans/peas",
    options: [
      { size: "100gm", price_range: "$3.00 - $8.00" },
      { size: "500gm", price_range: "$3.00 - $8.00" },
    ],
    discount: "77%",
    rating: 5.0,
    image: "https://m.media-amazon.com/images/I/61CxX7OAzLL._SL1000_.jpg",
  },
  {
    key: 4,
    category: "Vegetables",
    name: "Whole Foods Market, Romaine Hearts Salad Bag",
    image_description: "Head of romaine lettuce",
    options: [
      {
        size: "100gm",
        price_range: "$19.00 - $22.00",
        original_price: "$22.00",
      },
      { size: "500gm", price_range: null },
    ],
    discount: "14%",
    rating: 5.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkZn2MExx-1x5T_ulFR6_7qmm6f_rxqBPpg&s",
  },
  {
    key: 5,
    category: "Beverage",
    name: "Red Rock Deli Style Potato Chips, Lime & Cracked...",
    image_description: "Bag of black potato chips",
    options: [
      {
        size: "100gm",
        price_range: "$34.00 - $45.00",
        original_price: "$45.00",
      },
    ],
    discount: "24%",
    rating: 5.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QHcgY4Wd9oNYEwvIZHBBqoV-lrkS745Owg&s",
  },
];

const sellers = [
  {
    id: 1,
    name: "Eleanor Pena",
    rating: 4.5,
    image_description:
      "Older person in a greenhouse holding a basket of tomatoes.",
    image:
      "https://plus.unsplash.com/premium_photo-1686269460461-2273fbe86711?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Dianne Russell",
    featured: true,
    rating: 5.0,
    image_description:
      "Person in a greenhouse holding a basket of strawberries, wearing a sunhat.",
    image:
      "https://plus.unsplash.com/premium_photo-1678344151150-4a42c45453d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Michel Richard",
    rating: 4.5,
    image_description:
      "Man with a beard, standing in front of red flowers in pots.",
    image:
      "https://plus.unsplash.com/premium_photo-1681880821239-bb6c8f53f928?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Marvin McKinney",
    rating: 5.0,
    image_description: "Man standing outdoors, holding garden tools.",
    image:
      "https://images.unsplash.com/photo-1509506489701-dfe23b067808?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
];

export default function Home() {
  // const [type, setType] = useState("All");

  const { type, setAll, setVegetables, setDesserts, setDrinks } = useStore();

  return (
    <div className="flex flex-col gap-6 pt-40">
      <section className="grid grid-cols-7 px-20 justify-between">
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
      <section className="flex gap-4 w-full h-68 px-20">
        <div className="bg-pink-400 rounded-xl h-full w-full"></div>
        <div className="flex flex-col gap-4 h-full w-full">
          <div className="bg-blue-200 rounded-xl w-full h-full"></div>
          <div className="flex gap-4 h-full w-full">
            <div className="bg-blue-900 rounded-xl w-full h-full"></div>
            <div className="w-full h-full bg-orange-200 rounded-xl"></div>
          </div>
        </div>
      </section>
      <section className="px-20">
        <div className="pb-2 font-dmSans flex justify-between">
          <h1 className="font-medium text-sm opacity-80">Featured Products</h1>
          <div className="text-sm flex gap-2 font-medium opacity-80">
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
                type === "Desserts" && "text-green-800 font-semibold scale-105"
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
        <div className="grid grid-cols-5 gap-5 min-h-73">
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
            />
          ))}
        </div>
      </section>
      <section className="flex gap-10 h-30 px-20">
        <div className="rounded-xl bg-blue-200 w-full h-full"></div>
        <div className="rounded-xl bg-yellow-200 w-full h-full"></div>
        <div className="rounded-xl bg-pink-200 w-full h-full"></div>
      </section>
      <section className="font-dmSans px-20">
        <h1 className="font-medium text-sm opacity-80 pb-2">Top Sellers</h1>
        <div className="grid grid-cols-4 gap-4">
          {sellers.map((sellers) => (
            <TopSellers
              key={sellers.id}
              name={sellers.name}
              stars={sellers.rating}
              featured={sellers.featured}
              image={sellers.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
