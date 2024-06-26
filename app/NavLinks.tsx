"use client";

import { categories } from "@/constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavlLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  // console.log(categories);

  return (
    <nav
      className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm
    gap-4 pb-10 w-full mx-auto border-b"
    >
      {categories &&
        categories.map((category) => (
          <NavLink
            key={category}
            category={category}
            isActive={isActive(category)}
          />
        ))}
    </nav>
  );
}

export default NavlLinks;
