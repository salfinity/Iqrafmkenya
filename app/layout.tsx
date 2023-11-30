import "@/styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "IQRA_FM Kenya",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className="bg-gray-200 h-full dark:bg-zinc-900 transition-all
              duration-700 items-center"
        >
          <Header />
          <div className="max-w-full h-1/2 justify-center items-center mx-auto">
            {children}
          </div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
