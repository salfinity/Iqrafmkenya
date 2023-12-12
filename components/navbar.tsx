import Link from "next/link";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import React from "react";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="max-w-8xl justify-center items-center">
      <div className="border-b mx-auto border-neutral-400 dark:border-neutral-300 max-w-6xl">
        <Container>
          <div className="relative px-2 sm:px-2 lg:pr-6 lg:pl-6 flex h-16 items-center">
            <Link
              href="/businesses"
              className="ml-0 mr-auto flex lg:ml-0 gap-x-2"
            >
              <p className="font-bold text-xl">STORE</p>
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
