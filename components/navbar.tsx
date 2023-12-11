"use client";

import Link from "next/link";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import DarkModeButton from "@/app/DarkModeButton";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import { Category } from "@/types";

const Navbar = () => {
  const [subscribeVisible, setSubscribeVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        // Handle the error (e.g., show a message to the user)
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render.

  const toggleSubscribe = () => {
    setSubscribeVisible(!subscribeVisible);
  };

  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-8xl justify-center items-center">
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon
          className="h-8 w-8 cursor-pointer"
          onClick={toggleSubscribe}
        />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-xl md:text-4xl text-center">
            <span
              className="underline decoration-6 
       decoration-orange-400"
            >
              IQRA
            </span>{" "}
            -BIASHARA
          </h1>
        </Link>

        <div
          className="flex items-center justify-end
     space-x-2"
        >
          {/* DarkModeButton */}
          <DarkModeButton />
          <button
            className="hidden md:inline bg-slate-900 
      text-white px-4 lg:px-8 ly-2 lg:py-4 rounded-full
       dark:bg-slate-800"
            onClick={handleButtonClick}
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleButtonClick}>
        <div className="my-4">
          <h3 className="text-black font-bold">IQRABIASHARA SELLERS</h3>
          <p className="text-sm text-black">
            To join Iqrabiashara as a seller, please get in touch with us at
            0712345678. Kindly provide detailed information about your business,
            including its location (online, shop-based, or home-based), the
            products or services you offer, and any other relevant details.
            Please note that a registration fee of 1000 Kenyan Shillings is
            required to become a seller. Once you have completed the
            registration process and submitted the necessary information, we
            will feature your products on our platform, making it easy for
            potential buyers to discover and explore what you have to offer.
          </p>
          {/* Add more content as needed */}
        </div>
      </Modal>

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
