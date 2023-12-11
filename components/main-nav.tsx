"use client";
// Import necessary modules and components
import * as React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Check, PlusCircle, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { usePathname, useRouter } from "next/navigation";

// Define MainNavProps interface
interface MainNavProps {
  data: Category[];
}

// MainNav component
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter(); // Use the useRouter hook

  // Create an array of routes based on the provided data
  const routes =
    data && data.length
      ? data.map((route) => ({
          href: `/businesses/category/${route.id}`,
          label: route.name,
          active: pathname === `/businesses/category/${route.id}`,
        }))
      : [];

  // Sort the routes alphabetically by label
  const sortedRoutes = [...routes].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  // State variables for the popover
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category | null>(null);

  // Filter the routes based on the search query
  const filteredRoutes = sortedRoutes.filter((route) =>
    route.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle category selection and route navigation
  const handleCategorySelect = (route: { href: string; label: string }) => {
    const selectedCategory: Category = {
      href: route.href,
      id: "", // replace with the actual id
      name: route.label,
      billboard: {
        id: "",
        label: "",
        imageUrl: "",
      }, // replace with the actual Billboard
    };

    setSelectedCategory(selectedCategory);
    setOpen(false);

    // Navigate to the selected category's route
    router.push(route.href);
  };

  // Return the JSX structure for the component
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <nav className="mx-6 text-xl flex items-center justify-center space-x-4 ml-auto mr-auto lg:space-x-6">
          <button
            className={cn(
              "text-xl flex font-medium transition-colors hover:text-gray-600 focus:outline-none",
              open ? "text-gray-500" : "text-neutral-600"
            )}
            onClick={() => setOpen(!open)}
          >
            {selectedCategory ? selectedCategory.name : "Categories"}
            <ChevronsUpDown className="flex ml-3 h-6 w-6 opacity-50" />
          </button>
        </nav>
      </PopoverTrigger>
      {open && (
        <PopoverContent
          className="w-[210px] p-5 rounded-lg bg-white dark:bg-slate-800"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <Command>
            <CommandList>
              <CommandItem className="justify-center">
                <input
                  type="text"
                  placeholder="Search category..."
                  className="w-[180px] p-2 border rounded fixed bg-neutral-300 dark:bg-slate-900 z-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CommandItem>
              <CommandSeparator />
              <CommandItem>
                <div
                  style={{
                    paddingTop: "40px",
                    overflowY: "auto",
                    height: "calc(100% - 50px)",
                  }}
                >
                  {/* Scrollable category content here */}
                  <CommandGroup heading="CATEGORIES">
                    {filteredRoutes.map((route) => (
                      <CommandItem
                        key={route.href}
                        onSelect={() => handleCategorySelect(route)}
                        className="text-sm"
                      >
                        {route.label}
                        {selectedCategory?.href === route.href && (
                          <Check className="ml-auto h-4 w-4" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </div>
              </CommandItem>
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

// Export the MainNav component
export default MainNav;
