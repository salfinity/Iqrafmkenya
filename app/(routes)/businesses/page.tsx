import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ed3b339c-fca8-477a-9dd7-c7cb211f0180");

  return (
    <div className="container max-w-7xl">
      <ToastProvider />
      <ModalProvider />
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
      <div className="flex justify-center ml-auto">
        <button
          className="max-w-6xl border-4 mt-6 mb-10 md:mt-4 md:mb-12 
     dark:border-white border-black rounded-md px-4 py-2"
        >
          <Link href="/businesses">
            <p
              className="text-bold text-black dark:text-white cursor-pointer 
          items-center flex pl-4 pr-4 gap-2"
            >
              <RiArrowGoBackFill className="text-bold" />
              Back to Homepage
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
