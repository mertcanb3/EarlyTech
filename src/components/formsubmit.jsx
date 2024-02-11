import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

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

const phoneOptions = [
  { value: "+1", label: "USA (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+49", label: "Germany (+49)" },
  // Add other options as needed
];

function FormSubmit() {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    textTransform: "none", // Prevents text from being all uppercase
    letterSpacing: "1px",
    // Add other states (active, focus) if needed
  });
  return (
    <div className="flex flex-col items-center justify-center h-[750px] bg-grey-200">
      <div className="flex flex-col  w-9/12">
        <h5 className="font-source-serif text-[3.75rem] font-extrabold">
          Request a consultation.
        </h5>
        <p className="w-11/12 text-gray-800  text-lg font-[400]">
          Schedule a call today and one of our experts will be happy to help you
          decide which professional service is ideal for your business and talk
          to you about next steps. Call us at +44 (755) 248 70-07
        </p>
      </div>
      <div className="flex flex-col w-9/12 mt-12">
        <div className="flex justify-start mb-12">
          <CustomTextField
            id="filled-basic-1"
            variant="filled"
            sx={{ width: "400px", marginRight: "30px" }}
          />
          <CustomTextField
            id="filled-basic-2"
            variant="filled"
            sx={{ width: "400px" }}
          />
        </div>
        <CustomTextField
          id="filled-basic-3"
          variant="filled"
          sx={{ width: "830px" }}
        />
        <div className="flex mt-12">
          <CustomTextField
            select
            label="Code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            variant="filled"
            sx={{ width: "150px", marginRight: "-3px" }}
          >
            {phoneOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
          <CustomTextField
            label="(000) 000 00 00"
            variant="filled"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ width: "680px" }}
          />
        </div>
        <div className="flex flex-col mt-12">
          <p className="text-xs text-gray-700 ">
            By submitting your information you provide written consent to
            Bluehost and its family of brands contacting you.{" "}
            <span className="font-bold text-black-900 underline ">
              *See full details.
            </span>
          </p>
          <div className="w-6/12 mt-6">
            <CustomButton variant="contained">Submit</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSubmit;
