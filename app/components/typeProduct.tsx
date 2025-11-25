import Link from "next/link";

export default function TypeProduct({
  image,
  title,
  sub,
  id,
}: {
  image: string;
  title: string;
  sub: string;
  id: number;
}) {
  return (
    <Link href={`/${id}`} className="flex gap-2 items-center hover:scale-102 duration-200">
      <div className="h-10 min-w-10 max-w-10 rounded-full overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-sm font-dmSans leading-3 font-semibold">{title}</p>
        <p className="text-xs opacity-70 font-medium">{sub}</p>
      </div>
    </Link>
  );
}
