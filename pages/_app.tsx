import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/templates/Layout";
import { useState, useEffect } from "react";
import { MyProvider } from "../contexts/MyContext";
import '../public/css/edit.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [show_screen, setShowScreen] = useState(false);
  useEffect(() => {
    setShowScreen(true);
  }, []);
  return (
    <>
      {show_screen ? (
        <>
          <MyProvider>
            <Layout>
              <AnimatePresence exitBeforeEnter initial={true}>
                <Component key={router.route} {...pageProps} />
              </AnimatePresence>
            </Layout>
          </MyProvider>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MyApp;
