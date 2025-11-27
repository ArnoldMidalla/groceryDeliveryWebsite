import { Heart, Star } from "lucide-react";
import { useCart } from "../zust";

export default function AP2ndDesign({
  category,
  image,
  image_description,
  name,
  rating,
  productId,
  price,
  discount,
}: actualProducts) {
  const { cart, toggleCart } = useCart();
  const inCart = cart.includes(productId);

  function addToCart() {
    toggleCart(productId);
  }

  return (
    <div className="border border-neutral-200 flex justify-between items-center rounded-md px-3 py-2 font-dmSans w-full">
      <div className="min-w-32 max-w-30 overflow-hidden rounded-md h-38 my-2">
        <img
          src={image}
          alt={image_description}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-40 flex flex-col justify-between h-32">
        <h1 className="font-semibold leading-4 line-clamp-2 tracking-tight">
          {name}
        </h1>
        <p className="text-sm opacity-80 line-clamp-1 tracking-tight">
          {image_description}
        </p>
        <div className="flex gap-2 items-center tracking-tight">
          <p className="text-lg font-semibold text-red-700">{price}</p>
          <p className="text-xs font-medium opacity-80">{discount || "0%"} off</p>
        </div>
        <button
          className="text-sm py-1.5 bg-green-50 hover:bg-green-100 hover:scale-102 duration-200 rounded-lg text-green-800 font-semibold tracking-tight hover:cursor-pointer"
          onClick={addToCart}
        >
          {inCart ? "Item added to cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
