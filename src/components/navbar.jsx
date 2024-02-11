import React from "react";
import logo from "../assets/logo-removebg-preview.png";

function Navbar() {
  return (
    <div className="flex h-20  items-center justify-between text-blue-1000 border-b-4 border-blue-400">
      <div className="ml-10 text-3xl">
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <div className="flex [&>*]:mx-2 mr-12 font-semibold tracking-widest text-xl items-center ">
        <h3>Mission</h3>
        <h3>Team</h3>
        <h3>FAQs</h3>
      </div>
    </div>
  );
}

export default Navbar;
