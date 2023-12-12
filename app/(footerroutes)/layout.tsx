import "@/styles/globals.css";
import Providers from "@/app/Providers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import LiveChatButton from "@/app/LiveChatButton";
import FootNavbar from "@/components/FootNavbar";

export default function FooterLayout({
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
          <FootNavbar />
          <div className="max-w-full h-1/2 justify-center items-center mx-auto">
            {children}
          </div>
          <LiveChatButton />
        </body>
      </Providers>
    </html>
  );
}
