import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "./Loader";
import { motion } from "framer-motion";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Loader></Loader>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Header offset={props.offset} />
        <main>{props.children}</main>
        <Footer />
      </motion.div>
    </React.Fragment>
  );
};

export default Layout;
