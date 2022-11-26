import { useState } from "react";
import classes from "../styles/Header.module.css";
import Link from "next/link";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesSub from "./ServicesSub";
import Image from "next/image";
import logo from '../public/illwhite.png'

const Header = (props) => {
  const [serviceActive, setServiceActive] = useState(false);
  return (
    <>
      <header className={`${classes.header} ${props.offset > 30 ? classes.scrolled : undefined}`}>
        <nav className={`container ${classes.nav}`}>
          <div className={classes.logo}>
            <Image src={logo} alt="" />
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
        {serviceActive && <ServicesSub setServiceActive={setServiceActive} />}
      </header>
    </>
  );
};

export default Header;
