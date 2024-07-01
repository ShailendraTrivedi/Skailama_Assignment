import React from "react";
import { Home, Notification, Setting } from "../assets";

const Navbar = () => {
  console.log(Home);
  return (
    <div className="logo_main">
      <div className="logo_left">
        <img src="/imgs/directright.png" alt="" className="" />
        <p className="logo_text">LAMA.</p>
      </div>
      <div className="logo_right">
        <Notification />
        <Setting />
      </div>
    </div>
  );
};

export default Navbar;
