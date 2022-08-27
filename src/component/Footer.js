import React from "react";
import logo1 from "./pic/f_logo.png";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="img">
            <img src={logo1} alt="" />
          </div>
          <p>©{date.getFullYear()}. All rights reserved by A. Kaiyum.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
