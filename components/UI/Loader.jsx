import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/illwhite.png";
const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div key={router.route} initial={{ x: "100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{ type: "stiff", duration: 0.3 }} className="loadingContainer">
          <Image src={logo} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
