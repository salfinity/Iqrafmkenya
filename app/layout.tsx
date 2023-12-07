import "@/styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleAnalytics from "./GoogleAnalytics";
import LiveChatButton from "./LiveChatButton";

export const metadata = {
  title: "IQRA_FM Kenya | 95.0 idhaailio tofauti",
  description: "Developed by Salfinity",
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
          <GoogleAnalytics />
          <Header />
          <div className="max-w-full h-1/2 justify-center items-center mx-auto">
            {children}
          </div>
          <Footer />
          <LiveChatButton />
        </body>
      </Providers>
    </html>
  );
}
