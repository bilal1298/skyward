import { useState, useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/UI/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Router from "next/router";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

function MyApp({ Component, pageProps }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="theme-color" content="#002eff" />
      </Head>
      {/* <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        key={router.route}
        transition={{ duration: 0.3 }}
        variants={{
          initialState: { opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
          animateState: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
          exitState: { clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)" },
        }}
      > */}

      <Layout offset={offset}>
        <Component {...pageProps} />
      </Layout>
      {/* </motion.div> */}
    </>
  );
}

export default MyApp;
