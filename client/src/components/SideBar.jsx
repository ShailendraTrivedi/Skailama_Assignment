import React, { useState } from "react";
import { Setting } from "../assets";

const SideBar = ({ selectedMenu, setSelectedMenu }) => {
  const menu = ["Projects", "Widget Configurations", "Deployment", "Pricing"];

  return (
    <div className="">
      <div className="sidebar">
        <div className="">
          <div className="logo_left">
            <img src="/imgs/directright.png" alt="" className="" />
            <p className="logo_text">LAMA.</p>
          </div>
          <div className="podcast">Podcast Upload Flow</div>
          {menu.map((item, i) => {
            return (
              <div
                onClick={() => setSelectedMenu(i + 1)}
                className={`${
                  selectedMenu === i + 1 ? "activate" : "deactivate"
                }`}
              >
                <h3>{i + 1}</h3>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
        <div className="deactivate">
          <h3>
            <Setting />
          </h3>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
