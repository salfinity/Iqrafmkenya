import "@/styles/globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import LiveChatButton from "@/app/LiveChatButton";
import BusinessFooter from "@/components/footer";
import NavInBiz from "@/components/NavInBiz";

export default function BusinessesLayout({
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
          <GoogleAnalytics />
          <NavInBiz />
          <Navbar />
          <div className="max-w-full h-1/2 justify-center items-center mx-auto">
            {children}
          </div>
          <BusinessFooter />
          <LiveChatButton />
        </body>
      </Providers>
    </html>
  );
}
