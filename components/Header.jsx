import { useState, useEffect } from "react";
import classes from "../styles/Header.module.css";
import Link from "next/link";
import { faCaretDown, faAlignCenter, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesSub from "./ServicesSub";
import Image from "next/image";
import logo from "../public/illwhite.png";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "./UI/Accordion";
import { useRouter } from "next/router";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const [serviceActive, setServiceActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMenuActive(false);
  }, [router]);
  return (
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
        <div className={classes.mobileMenuIcon}>
          <FontAwesomeIcon icon={faAlignCenter} className={classes.hamIcon} onClick={() => setMenuActive(true)} />
        </div>
        <AnimatePresence>
          {menuActive && (
            <motion.div initial={{ left: "-100vw" }} animate={{ left: 0 }} transition={{ type: "stiff" }} exit={{ left: "-100vw" }} className={classes.mobileMenu}>
              <div className={classes.mobileMenuTopBar}>
                <Link href={"/"}>
                  <Image src={logo} alt="" />
                </Link>
                <FontAwesomeIcon icon={faClose} className={classes.closeIcon} onClick={() => setMenuActive(false)} style={{color: '#000'}}/>
              </div>

              <Accordion
                title={"Services"}
                background={"#002eff"}
                backgroundD={"#fece1a"}
                color={"#fff"}
                desc={
                  <>
                    <Accordion
                      title={"Digital Marketing"}
                      backgroundD={"#f5f5f5"}
                      desc={
                        <>
                          <Accordion
                            title={"SEO"}
                            backgroundD={"#ebebeb"}
                            desc={
                              <ul>
                                <li>
                                  <Link href="/seo">SEO</Link>
                                </li>
                                <li>
                                  <Link href="/">Local SEO</Link>
                                </li>
                                <li>
                                  <Link href="/">Ecommerce SEO</Link>
                                </li>
                                <li>
                                  <Link href="/">National/Global SEO</Link>
                                </li>
                              </ul>
                            }
                          />
                          <Accordion
                            title={"PPC"}
                            backgroundD={"#ebebeb"}
                            desc={
                              <ul>
                                <li>
                                  <Link href="/ppc">PPC</Link>
                                </li>
                                <li>
                                  <Link href="/">Facebook Ads</Link>
                                </li>
                                <li>
                                  <Link href="/">Google Ads</Link>
                                </li>
                              </ul>
                            }
                          />
                          <Link href="/email-marketing">Email Marketing</Link>
                        </>
                      }
                    />
                    <Accordion
                      title={"Web Design"}
                      backgroundD={"#ebebeb"}
                      desc={
                        <ul>
                          <li>
                            <Link href="/">Website Design</Link>
                          </li>
                          <li>
                            <Link href="/">Wordpress</Link>
                          </li>
                          <li>
                            <Link href="/">Ecommerce</Link>
                          </li>
                          <li>
                            <Link href="/">Business & Services</Link>
                          </li>
                          <li>
                            <Link href="/">Education</Link>
                          </li>
                          <li>
                            <Link href="/">Health Care</Link>
                          </li>
                        </ul>
                      }
                    />
                    <Accordion
                      title={"White Label"}
                      backgroundD={"#ebebeb"}
                      desc={
                        <ul>
                          <li>
                            <Link href="/white-label">White Label</Link>
                          </li>
                          <li>
                            <Link href="/white-label-seo">SEO</Link>
                          </li>
                          <li>
                            <Link href="/">Web Design</Link>
                          </li>
                          <li>
                            <Link href="/">PPC</Link>
                          </li>
                          <li>
                            <Link href="/">Content Writing</Link>
                          </li>
                          <li>
                            <Link href="/">White Label Link Building</Link>
                          </li>
                        </ul>
                      }
                    />
                    <Accordion
                      title={"Design"}
                      backgroundD={"#ebebeb"}
                      desc={
                        <ul>
                          <li>
                            <Link href="/">Graphic Design</Link>
                          </li>
                          <li>
                            <Link href="/">Logo Design</Link>
                          </li>
                          <li>
                            <Link href="/">Content Writing</Link>
                          </li>
                        </ul>
                      }
                    />
                  </>
                }
              />
              <ul className={classes.mobileMenuList}>
                <li>
                  <Link href="/resources">Resources</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
        {serviceActive && (
          <motion.div initial={{ scale: 0, y: -150 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: -150 }} transition={{ duration: 0.3 }} className={classes.subContainer}>
            <ServicesSub setServiceActive={setServiceActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
