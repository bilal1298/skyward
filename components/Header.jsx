import { useState } from "react";
import classes from "../styles/Header.module.css";
import Link from "next/link";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesSub from "./ServicesSub";
import Image from "next/image";
import logo from "../public/illwhite.png";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./UI/Button";

const Header = (props) => {
  const [serviceActive, setServiceActive] = useState(false);
  return (
    <>
      <header className={`${classes.header} ${props.offset > 30 ? classes.scrolled : undefined}`}>
        <nav className={`container ${classes.nav}`}>
          <div className={classes.logo}>
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
          </div>
          <div className={classes.menu}>
            <ul>
              <li onMouseEnter={() => setServiceActive(true)} onMouseLeave={() => setServiceActive(false)}>
                <Link href="/services">
                  Services <FontAwesomeIcon icon={faCaretDown} />
                </Link>
              </li>
              <li>
                <Link href="/services">Resources</Link>
              </li>
              <li>
                <Link href="/services">Pricing</Link>
              </li>
              <li>
                <Link href="/services">About</Link>
              </li>
              <li className={classes.headerButton}>
                <Link className={classes.button} href="/">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <AnimatePresence>
          {serviceActive && (
            <motion.div initial={{ scale: 0, y: -150 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: -150 }} transition={{ duration: 0.3 }} className={classes.subContainer}>
              <ServicesSub setServiceActive={setServiceActive} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
