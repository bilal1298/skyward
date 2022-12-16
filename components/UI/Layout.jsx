import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
const Layout = (props) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <AnimatePresence>
        <Header offset={props.offset} />
        <main>{props.children}</main>
        <Footer />
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Layout;
