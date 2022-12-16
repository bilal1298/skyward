import React, { useState, useEffect, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/illwhite.png";
const Loader = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ x: "100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{ type: "stiff", duration: 0.1 }} className="loadingContainer">
        <Image src={logo} alt="" />
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(Loader);
