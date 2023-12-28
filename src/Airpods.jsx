import React from "react";
import "./Airpods.css";
import GI from "./air.jpg";
import GO from "./airs.jpg";
function Airpods() {
  return (
    <div className="air">
      {/* <img src="https://www.mobigyaan.com/wp-content/uploads/2022/09/Apple-AirPods-Pro-2-1.jpeg" alt="" /> */}
      <img src={GO} alt="" />
      <div className="collect">
        <p className="pi">AirPods Pro</p>
        <p className="yes">Adaptive Audio. Now playing.</p>
      </div>
      <a className="li" href="a">
        Learn more
      </a>
      <a className="lin" href="f">
       
        Buy
      </a>
    </div>
  );
}

export default Airpods;
