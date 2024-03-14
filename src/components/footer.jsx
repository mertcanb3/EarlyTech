import React from "react";
import bannerlogo from "../assets/fullLogo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function Footer() {
  const dividerStyle = {
    my: 2,
    width: "95%",
    borderRadius: 2,
    backgroundColor: "#00B2E1",
    border: "2px solid black",
    borderColor: "divider",
  };

  const dividerStyleTwo = {
    my: 1,
    backgroundColor: "#00B2E1",
  };

  const CustomButton = styled(Button)({
    backgroundColor: "#FAD64B", // Example: Change to any color you want
    color: "#081631", // Text color
    fontSize: "16px", // Change text size
    fontWeight: "900",
    borderRadius: "30px", // Adjust border radius
    padding: "10px 14px", // Example: Change border color and width as needed
    "&:hover": {
      backgroundColor: "#e3bc24", // Darker shade for hover state
      borderColor: "#005cbf",
      color: "#FAD64B",
    },
    transition: "all 0.7s",
    textTransform: "none",
    letterSpacing: "1px",
  });

  return (
    <div className="flex flex-col  md:h-[480px] bg-blue-1000 border-t-4 border-blue-0 ">
      <div className="flex my-auto flex-wrap justify-around md:mx-8 sm:mx-0 sm:[&>*]:mx-12 mt-12 sm:[&>*]:mt-12">
        <div className="flex flex-col   items-center">
          <img
            src={bannerlogo}
            alt="bannerLogo"
            className="h-32 relative top-4 left-4"
          />
          <Divider variant="middle" sx={dividerStyle} />
          <p className="text-xs tracking-widest font-semibold text-blue-0">
            Coopyright | Policies | Contact
          </p>
        </div>
        <div className="flex flex-col sm:items-center md:items-start">
          <div className="flex flex-col ">
            <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
              FOLLOW US:
            </h5>
            <div className="flex md:ml-[-10px] sm:ml-0 md:mb-[-70px] sm:mb-0">
              <LinkedInIcon
                sx={{ color: "#00B2E1", fontSize: "120px" }}
                className="relative bottom-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
              LINKS:
            </h5>
            <p className="font-semibold text-gray-400">
              <span className="text-blue-200">》</span>Mission
            </p>
            <p className="font-semibold text-gray-400">
              <span className="text-blue-200">》</span>Team
            </p>
            <p className="font-semibold text-gray-400">
              <span className="text-blue-200">》</span>FAQ
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
                WORK WITH US:
              </h5>
              <CustomButton variant="contained">View Jobs</CustomButton>
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
              RATE US:
            </h5>
            <CustomButton variant="contained">TrustPilot.com</CustomButton>
          </div>
        </div>
        <div className="flex flex-col md:w-2/12 sm:w-7/12 md:mb-0 sm:mb-12">
          <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
            RESOURCES:
          </h5>
          <div className="flex flex-col ">
            <div className="flex items-center mb-5">
              <MailIcon sx={{ color: "#00B2E1", fontSize: "40px" }} />
              <p className="font-semibold text-gray-400 ml-4">
                gokhan@earlytech.com
              </p>
            </div>
            <div className="flex items-center mb-5">
              <LocalPhoneIcon sx={{ color: "#00B2E1", fontSize: "40px" }} />
              <p className="font-semibold text-gray-400 ml-4">
                +44 (755) 248 70-07
              </p>
            </div>
            <div className="flex items-center">
              <LocationOnIcon sx={{ color: "#00B2E1", fontSize: "40px" }} />
              <p className="font-semibold text-gray-400 ml-4 ">
                1 Spinney Close, Emmer Green, Reading, UK RG4 8TB
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider variant="full" sx={dividerStyleTwo} />
      <div className="flex justify-end mb-2 mr-8 text-xs tracking-widest font-semibold text-gray-400">
        Copyright @ 2024 <span className="text-gray-200 ml-1"> EarlyTech </span>
        . All rights reserved
      </div>
    </div>
  );
}

export default Footer;
