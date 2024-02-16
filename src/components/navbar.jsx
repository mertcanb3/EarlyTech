import React from "react";
import logo from "../assets/logo.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function Navbar() {
  const dividerStyle = {
    py: 2,
    borderRadius: 2,
    mr: "30px",
    border: "2px solid black",
    borderColor: "divider",
    backgroundColor: "#4D93FF",
  };

  const CustomButton = styled(Button)({
    backgroundColor: "#FFFFFF", // Example: Change to any color you want
    color: "#1A74FF", // Text color
    fontSize: "15px", // Change text size
    fontWeight: "900",
    borderRadius: "30px", // Adjust border radius
    padding: "10px 50px", // Example: Change border color and width as needed
    "&:hover": {
      backgroundColor: "#e3bc24", // Darker shade for hover state
      borderColor: "#005cbf", // Optionally change the border color on hover
      color: "#0056E0",
    },
    transition: "all 1s ease-in-out",
    letterSpacing: "1.5px",
    // Add other states (active, focus) if needed
  });

  return (
    <div className="bg-blue-1000 pt-2">
      <div className="flex h-20  items-center justify-between text-white-0 opacity-90 sticky top-0 bg-blue-1000 z-50 pb-3 ">
        <div className="ml-10 text-3xl">
          <img src={logo} alt="logo" className="h-20 " />
        </div>
        <div className="flex [&>*]:mx-2 mr-12 font-semibold tracking-widest text-xl items-center ">
          <h3>MISSION</h3>
          <h3>TEAM</h3>
          <h3>FAQ</h3>
          <Divider variant="middle" sx={dividerStyle} />
          <CustomButton variant="contained">Get Started</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
