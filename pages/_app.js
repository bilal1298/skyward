import { useState, useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/UI/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "../components/UI/Loader";
import { motion, AnimatePresence } from "framer-motion";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <AnimatePresence>
        <motion.div key={1} exit={{ x: "-100vw" }}>
          <Loader />
        </motion.div>
      </AnimatePresence>
    )
  );
}

function MyApp({ Component, pageProps }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#002eff" />
      </Head>

      <Layout offset={offset}>
        <Loading />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
