import React from "react";
import backgroundImage from "../assets/layered-waves-haik.svg";

function Teams() {
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Teams;
