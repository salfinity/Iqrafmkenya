import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/businesses/category/${route.id}`,
    label: route.name,
    active: pathname === `/businesses/category/${route.id}`,
  }));

  return (
    <Menubar>
      <MenubarTrigger>Categories</MenubarTrigger>
      <MenubarContent>
        {routes.map((route) => (
          <MenubarItem key={route.href}>
            <Link href={route.href}>
              <a
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  route.active
                    ? "text-black bg-gray-100"
                    : "text-neutral-500 hover:text-black hover:bg-gray-100"
                )}
              >
                {route.label}
              </a>
            </Link>
          </MenubarItem>
        ))}
      </MenubarContent>
    </Menubar>
  );
};

export default MainNav;
