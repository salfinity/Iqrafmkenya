import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="container">
       <h1 className='font-serif text-2xl md:text-4xl text-center mt-3 mb-6'>
       <span className='underline decoration-6 
       decoration-orange-400'>WELCOME TO</span> {" "}
        IQRA BIASHARA</h1>
        <div className="border-b">
            <Container>
              <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
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