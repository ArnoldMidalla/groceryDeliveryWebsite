import { Star } from "lucide-react";

export default function TopSellers({
  name,
  stars,
  featured,
  image,
}: {
  name: string;
  stars: number;
  featured?: boolean;
  image: string;
}) {
  return (
    <div className="p-2 rounded-md bg-neutral-50 flex gap-2 items-center">
      <div className="overflow-hidden size-20 rounded">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div>
        <h1 className="text-sm font-semibold">{name}</h1>
        <div className="flex items-start gap-1">
          <p className="text-xs font-medium">{stars}</p>
          <Star size={14} strokeWidth={2.6} fill="gold" color="gold" />
        </div>
      </div>
    </div>
  );
}
