import React from "react";
import classes from "../../styles/NumberStrip.module.css";
import { faFaceSmile, faAward, faHeadset, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NumberStrip = () => {
  return (
    <div className={classes.numberStrip}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h3>
              <FontAwesomeIcon icon={faFaceSmile} size={"2x"} color={'#002eff'}/>
              <br />
              <br />
              100+ <br /> Happy Clients
            </h3>
          </div>
          <div className="col-3">
            <h3>
              <FontAwesomeIcon icon={faAward} size={"2x"} color={'#002eff'}/>
              <br />
              <br />
              Award Winning <br /> Agency
            </h3>
          </div>
          <div className="col-3">
            <h3>
              <FontAwesomeIcon icon={faHeadset} size={"2x"} color={'#002eff'}/>
              <br />
              <br />
              After Hours <br /> Support
            </h3>
          </div>
          <div className="col-3">
            <h3>
              <FontAwesomeIcon icon={faCheck} size={"2x"} color={'#002eff'}/>
              <br />
              <br />
              Guaranteed <br /> Results
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberStrip;
