import React from "react";
import bannerlogo from "../assets/namebanner-removebg-preview.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <div className="flex flex-col h-[480px] bg-grey-200 ">
      <div className="flex my-auto justify-around">
        <div className="fle flex-col">
          <img src={bannerlogo} alt="bannerLogo" className="h-32" />
          <hr />
          <p>Coopyright | Privacy | Policies | Contact | Newsroom</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h5>FOLLOW US:</h5>
            <div className="flex">
              <XIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h5>LINKS:</h5>
            <p>》Mission</p>
            <p>》Team</p>
            <p>》FAQs</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <h5>WORK WITH US:</h5>
              <p>View Jobs</p>
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h5>RATE US:</h5>
            <p>Rate on TrustPilot</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5>RESOURCES:</h5>
          <div className="flex flex-col">
            <div className="flex">
              <MailIcon />
            </div>
            <div className="flex">
              <LocalPhoneIcon />
            </div>
            <div className="flex">
              <LocationOnIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        Copyright @ <b>EarlyTech </b>2024. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
