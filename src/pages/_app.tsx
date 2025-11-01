import { Footer, Navbar } from "@/components/userInterface";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/config";
import { useRouter } from "next/router";
import { useAuthHeader } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Initialize auth header from store
  useAuthHeader();

  return (
    <>
      <ApolloProvider client={client}>
        {showButton && (
          <div
            className="fixed bottom-4 right-4 cursor-pointer z-50"
            onClick={scrollToTop}
          >
            <img
              src="/assets/icons/back-btn.png"
              width={50}
              className="border-2 rotate-90 border-[#E2BF4B] rounded-lg"
            />
          </div>
        )}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}
