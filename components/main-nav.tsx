"use client";

import * as React from "react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Check, PlusCircle, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { usePathname, useRouter } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter(); // Use the useRouter hook

  const routes = data.map((route) => ({
    href: `/businesses/category/${route.id}`,
    label: route.name,
    active: pathname === `/businesses/category/${route.id}`,
  }));

  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);

  const filteredRoutes = routes.filter((route) =>
    route.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySelect = (route: { href: string; label: string }) => {
    setSelectedCategory(route);
    setOpen(false);

    // Navigate to the selected category's route
    router.push(route.href);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <nav className="mx-6 flex items-center space-x-4 ml-auto mr-auto lg:space-x-6">
          <button
            className={cn(
              "text-sm flex font-medium transition-colors hover:text-gray-600 focus:outline-none",
              open ? "text-gray-500" : "text-neutral-600"
            )}
            onClick={() => setOpen(!open)}
          >
            Categories
            <ChevronsUpDown className="ml-1 h-4 w-4 opacity-50" />
          </button>
        </nav>
      </PopoverTrigger>
      {open && (
        <PopoverContent className="w-[200px] p-0 rounded-lg bg-white dark:bg-slate-800" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <Command>
            <CommandList>
              <CommandItem>
                <CommandEmpty>No categories found.</CommandEmpty>
              </CommandItem>
              <CommandGroup heading="Categories">
                <CommandItem>
                  <input
                    type="text"
                    placeholder="Search category..."
                    className="w-full p-2 border rounded"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </CommandItem>
                {filteredRoutes.map((route) => (
                  <CommandItem
                    key={route.href}
                    onSelect={() => handleCategorySelect(route)}
                    className="text-sm"
                  >
                    {route.label}
                    {selectedCategory?.href === route.href && <Check className="ml-auto h-4 w-4" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem onClick={() => setOpen(false)}>
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create Category
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default MainNav;
