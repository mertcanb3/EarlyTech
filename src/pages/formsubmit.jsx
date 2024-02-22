import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import whatsapp from "../assets/output-onlinegiftools.gif";
import email from "../assets/emailgif.gif";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    color: "#081631",
    backgroundColor: "#FFFFFF",
    border: "1px solid black",
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const CustomLabel = styled(Typography)({
  marginBottom: "8px",
  fontWeight: "bold",
  // Add more custom styles here
});

const phoneOptions = [
  { value: "+1", label: "USA (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+49", label: "Germany (+49)" },
  // Add other options as needed
];

function FormSubmit() {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const whatsAppMessage = encodeURIComponent(
    "Hello, I'd like to request a consultation."
  );

  const whatsAppNumber = "447552487007"; // Format without '+' or spaces

  // Combine country code and phone number
  const getFullPhoneNumber = () => `${countryCode}${phoneNumber}`;

  const CustomButton = styled(Button)({
    backgroundColor: "#FAD64B", // Example: Change to any color you want
    color: "#081631", // Text color
    fontSize: "22px", // Change text size
    fontWeight: "900",
    borderRadius: "3px", // Adjust border radius
    padding: "15px 48px", // Example: Change border color and width as needed
    "&:hover": {
      backgroundColor: "#e3bc24", // Darker shade for hover state
      borderColor: "#005cbf", // Optionally change the border color on hover
    },
    transition: "all 0.7s",
    textTransform: "none",
    letterSpacing: "1px",
  });
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-[1000px] bg-grey-200 relative bottom-20 ">
      <div className="flex flex-col  w-9/12">
        <h5 className="font-source-serif text-[3.75rem] font-extrabold">
          Request a consultation.
        </h5>
        <div className="w-9/12 text-gray-800 text-lg font-[400] flex flex-wrap">
          Schedule a call today and one of our experts will be happy to help you
          decide which professional service is ideal for your business and talk
          to you about next steps.{" "}
          <p className="flex">
            Reach us through
            <a
              href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-300 mx-1 font-semibold underline flex items-center relative bottom-2"
            >
              WhatsApp
              <img src={whatsapp} alt="WhatsApp Logo" className="ml-1 h-12" />
            </a>
            or
            <a
              href="mailto:gokhan@earlytech.com"
              className="text-blue-800 hover:text-blue-300 mx-1 font-semibold underline flex items-center relative bottom-2"
            >
              E-mail
              <img src={email} alt="Email Logo" className="ml-2 h-10" />
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col w-9/12 mt-7  ">
        <div className="flex justify-between mb-12 ">
          <div className="flex flex-col w-full ">
            <CustomLabel
              variant="subtitle1"
              sx={{ position: "relative", left: "3px" }}
            >
              First Name <span className=" text-[#A7233A]">*</span>
            </CustomLabel>
            <CustomTextField
              id="filled-basic-1"
              variant="filled"
              sx={{ width: "95%" }}
            />
          </div>
          <div className="flex flex-col w-full">
            <CustomLabel
              variant="subtitle1"
              sx={{ position: "relative", left: "3px" }}
            >
              Last Name <span className=" text-[#A7233A]">*</span>
            </CustomLabel>
            <CustomTextField
              id="filled-basic-2"
              variant="filled"
              sx={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <CustomLabel
            variant="subtitle1"
            sx={{ position: "relative", left: "3px" }}
          >
            E-mail Adress<span className=" text-[#A7233A]">*</span>
          </CustomLabel>
          <CustomTextField
            id="filled-basic-3"
            variant="filled"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="flex mt-12 ">
          <div className="flex flex-col w-auto mr-3 ">
            <CustomLabel
              variant="subtitle1"
              sx={{ position: "relative", left: "3px" }}
            >
              Phone Number <span className=" text-[#A7233A]">*</span>
            </CustomLabel>
            <CustomTextField
              select
              variant="filled"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              sx={{ width: "150px" }}
            >
              {phoneOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomTextField>
          </div>
          <div className="flex flex-col w-full">
            <CustomTextField
              variant="filled"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                width: "102%",
                position: "relative",
                right: "18px",
                top: "36px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 justify-start  w-9/12">
        <p className="text-xs text-gray-700 ">
          By submitting your information you provide written consent to Bluehost
          and its family of brands contacting you.{" "}
          <span className="font-bold text-black-900 underline ">
            *See full details.
          </span>
        </p>
        <div className="w-6/12 mt-6">
          <CustomButton variant="contained">Submit</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default FormSubmit;
