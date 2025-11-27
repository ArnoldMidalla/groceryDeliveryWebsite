import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DropdownMenuTest() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {/* <DropdownMenuLabel>Menu</DropdownMenuLabel> */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/"}>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/Pages"}>Pages</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/Shop"}>Shop</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/Vendor"}>Vendor</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/Elements"}>Elements</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/Blog"}>Blog</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/Contact"}>Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
