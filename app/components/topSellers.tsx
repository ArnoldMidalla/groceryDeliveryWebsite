import { Star } from "lucide-react";
import Link from "next/link";

export default function TopSellers({
  name,
  stars,
  featured,
  image,
  id,
}: topSellers) {
  return (
    <Link
      href={`/vendors/${id}`}
      className="p-2 rounded-md bg-neutral-50 flex gap-2 items-center hover:-translate-y-0.5 hover:scale-102 duration-300"
    >
      <div className="overflow-hidden size-20 rounded">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-1 sm:gap-0">
        <h1 className="text-sm font-semibold leading-3.5">{name}</h1>
        <div className="flex items-start gap-1">
          <p className="text-xs font-medium">{stars}</p>
          <Star size={14} strokeWidth={2.6} fill="gold" color="gold" />
        </div>
      </div>
    </Link>
  );
}
