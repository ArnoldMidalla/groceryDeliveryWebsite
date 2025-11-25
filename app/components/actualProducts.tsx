import { Heart, Star } from "lucide-react";
import { useHeart } from "../zust";
import { useCart } from "../zust";

export default function ActualProducts({
  category,
  image,
  image_description,
  name,
  rating,
  productId,
}: {
  category: string;
  image: string;
  image_description: string;
  name: string;
  rating: number;
  productId: number;
}) {
  const { heart, toggleHeart } = useHeart();
  const isLiked = heart.includes(productId);

  function toggleItem() {
    toggleHeart(productId);
  }

  const { cart, toggleCart } = useCart();
  const inCart = cart.includes(productId);

  function addToCart() {
    toggleCart(productId);
  }

  return (
    <div className="border border-neutral-200 flex flex-col gap-1 rounded-md px-3 py-2 font-dmSans w-50">
      <div className="flex justify-between items-center pt-1">
        <p className="text-xs font-medium opacity-70">{category}</p>
        <Heart
          size={14}
          strokeWidth={2.6}
          className={`hover:scale-110 duration-200 cursor-pointer ${
            isLiked ? "fill-red-500 stroke-red-500" : "opacity-70"
          }`}
          onClick={toggleItem}
        />
      </div>
      <div className="w-full h-28 overflow-hidden rounded my-2">
        <img
          src={image}
          alt={image_description}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="font-semibold leading-4 line-clamp-2 tracking-tight">
        {name}
      </h1>
      <p className="text-sm opacity-80 line-clamp-1 tracking-tight">
        {image_description}
      </p>
      <div className="flex gap-1">
        <Star color="#EFBF04" fill="#EFBF04" size={14} />{" "}
        <p className="text-xs opacity-80 font-medium">{rating} stars</p>
      </div>
      <button
        className="text-sm py-2 bg-green-50 hover:bg-green-100 hover:scale-102 duration-200 rounded-lg text-green-800 font-semibold tracking-tight"
        onClick={addToCart}
      >
        {inCart ? "Item added to cart" : "Add to cart"}
      </button>
    </div>
  );
}
