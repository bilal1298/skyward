import React from "react";
import classes from "../../styles/UI/Pricing.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <div className={classes.main}>
      <table className={classes.priceTable}>
        <tbody>
          {/* <tr>
            <td className={classes.priceBlank}></td>
            <td className={classes.priceBlank}></td>
            <td className={classes.priceTablePopular}>Most popular</td>
            <td className={classes.priceBlank}></td>
          </tr> */}
          <tr className={classes.priceTableHead}>
            <td></td>
            <td>
              Starter
              <br />
              {/* <small style={{ fontSize: "12px", fontWeight: "400" }}>Starter plan</small> */}
            </td>
            <td>
              Standard
              <br />
              {/* <small style={{ fontSize: "12px", fontWeight: "400" }}>Longer data retention</small> */}
            </td>
            <td className={classes.greenWidth}>
              Pro
              <br />
              {/* <small style={{ fontSize: "12px", fontWeight: "400" }}>Our complete solution</small> */}
            </td>
          </tr>
          <tr>
            <td></td>
            <td className={classes.price}>
              $500/mo
              <br />
            </td>
            <td className={classes.price}>
              $100/mo
              <br />
            </td>
            <td className={classes.price}>
              $1500/mo
              <br />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-asset-updates" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem
            </td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-core-updates" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem Ipsum
            </td>
            <td>30 Days</td>
            <td>90 Days</td>
            <td>180 Days</td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-security-monitoring" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem ipsum dolor
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-uptime-monitoring" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-malware-cleanup" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem Ipsum sit amet
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-security-audit" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem Ipsum dolor
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-security-audit" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem Ipsum Dolor sit
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-priority-support" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faTimes} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              {/* <a href="#wordpress-billing" className={classes.priceTableHelp}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>{" "} */}
              Lorem Ipsum
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className={classes.price}>
              <Button href="/">Get Started</Button>
            </td>
            <td className={classes.price}>
              <Button href="/">Get Started</Button>
            </td>
            <td className={classes.price}>
              <Button href="/">Get Started</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
