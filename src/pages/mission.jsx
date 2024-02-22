import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import AddchartIcon from "@mui/icons-material/Addchart";
import TextField from "@mui/material/TextField";
import banner from "../assets/banner-removebg-preview.png";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const CustomTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      ...props.InputProps,
    }}
    {...props}
  />
))({
  "& .MuiInputBase-root": {
    color: "#081631",
    backgroundColor: "#F3F4F6",
    borderRadius: "40px 0 0 40px",
    fontSize: "28px",
    padding: "0px 100px",
    "& fieldset": {
      border: "0px", // ensure border is removed
      backgroundColor: "#F3F4F6",
    },
    "&:hover fieldset": {
      backgroundColor: "#F3F4F6",
      // Ensure the borderColor on hover is the same as the default state to avoid visual changes
      borderColor: "black", // This should match the default borderColor set in "& fieldset"
    },
    "&.Mui-focused fieldset": {
      backgroundColor: "#F3F4F6",
      borderColor: "black", // Customize this as needed for the focus state
      boxShadow: "0 0 0 2px rgba(8,22,49,0.5)", // Optional: Adjust boxShadow for focus indicator
    },
  },

  "&:hover": {
    outline: "none",
    border: "0px", // Match this to the default state if necessary
  },
});

const CustomButton = styled(Button)({
  backgroundColor: "#FAD64B",
  color: "#081631",
  fontSize: "23px",
  fontWeight: "900",
  borderRadius: "5px",
  padding: "14px 48px",
  "&:hover": {
    backgroundColor: "#e3bc24",
    borderColor: "#005cbf",
  },
  transition: "all 0.7s",
  textTransform: "none",
  letterSpacing: "1px",
});

const CustomButtonTwo = styled(Button)({
  backgroundColor: "#081631", // Example: Change to any color you want
  color: "#00000", // Text color
  fontSize: "22px", // Change text size
  fontWeight: "900",
  borderRadius: "3px", // Adjust border radius
  padding: "15px 52px", // Example: Change border color and width as needed
  "&:hover": {
    backgroundColor: "#e3bc24", // Darker shade for hover state
    borderColor: "#005cbf", // Optionally change the border color on hover
  },
  transition: "all 0.7s",
  textTransform: "none",
  letterSpacing: "1px",
});

function Mission() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const sections = [
    {
      title: "Planning and Roadmap",
      icon: (
        <ContentPasteSearchIcon
          fontSize="large"
          sx={{ color: "#1A74FF", fontSize: "50px" }}
        />
      ),
      content: [
        "• Assess objectives",
        "• Digital strategy and roadmap",
        "• Identify initiatives and prioritize",
      ],
      learnMoreLink: "google.com",
    },
    {
      title: "Technology Integration",
      icon: (
        <ImportantDevicesIcon
          fontSize="large"
          sx={{ color: "#1A74FF", fontSize: "50px" }}
        />
      ),
      content: [
        "• Implement appropriate technologies",
        "• Design solutions and enhance efficiency.",
        "• Provide guidance and find strategies.",
      ],
      learnMoreLink: "google.com",
    },
    {
      title: "KPI and Optimization",
      icon: (
        <AddchartIcon
          fontSize="large"
          sx={{ color: "#1A74FF", fontSize: "50px" }}
        />
      ),
      content: [
        "• Assess capabilities and objectives",
        "• Digital strategy and roadmap",
        "• Identify key initiatives and prioritize",
      ],
      learnMoreLink: "google.com",
    },
  ];

  return (
    <>
      <div className="h-[550px] bg-blue-1000">
        <div
          style={
            isMobile
              ? {
                  backgroundImage: `url(${banner})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }
              : {}
          }
          className="flex items-center"
        >
          <div className="flex flex-col text-white-100 w-[50%] mt-24 ml-4 relative left-5 bottom-10">
            <h4 className="font-semibold tracking-widest">
              WEB HOSTING, DOMAINS, WORDPRESS
            </h4>
            <h5 className="leading-[75px] font-source-serif font-extrabold text-[55px]">
              EarlyTech makes Management convenient
            </h5>
            <div className="mt-4">
              <CustomButton
                sx={
                  isMobile
                    ? {
                        width: "300px",
                        marginTop:"30px"
                      }
                    : { }
                }
                variant="contained"
              >
                Get Started
              </CustomButton>
            </div>
            <p className="mt-4">
              Rated ★★★★★ on{" "}
              <span className="font-source-serif font-extrabold text-2xl">
                TrustPilot.com{" "}
              </span>
            </p>
          </div>
          {!isMobile && <img src={banner} alt="banner" className="h-[550px]" />}
        </div>
      </div>

      <div className="bg-blue-400 md:h-[800px]  ">
        <div className="flex flex-wrap justify-center md:pt-0 sm:pt-20  [&>*]:bg-white-200 md:[&>*]:h-[330px] sm:[&>*]:h-[460px]  md:[&>*]:w-[30%] sm:[&>*]:w-[350px] md:[&>*]:mx-5 md:[&>*]:mr-0 md:[&>*]:mt-[-60px] sm:[&>*]:mt-[30px] [&>*]:rounded-lg [&>*]:flex [&>*]:flex-col">
          {sections.map((section, index) => (
            <div key={index} className="pt-4 pl-8">
              {section.icon}
              <h5 className="text-[28px] font-bold w-11/12">{section.title}</h5>
              <a
                className="mt-2 text-xl underline underline-offset-4 text-blue-600 font-bold mb-3"
                href={section.learnMoreLink}
              >
                Learn more →
              </a>
              {section.content.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className="mt-3 w-11/12 font-medium tracking-wide text-lg mb-3"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:mx-auto sm:mx-12 items-center mt-24 ">
          <h5 className="mb-5 text-[3.75rem] font-source-serif font-[900] text-white-300">
            Get notified about our latest offers and news!
          </h5>
          <div className="flex justify-center sm:w-full md:w-8/12  md:pb-0 sm:pb-24 ">
            <CustomTextField
              id="filled-basic"
              variant="filled"
              sx={
                isMobile
                  ? {
                      padding: "0 0px",
                      fontSize: "7px",
                      width: "4000px",
                    }
                  : { width: "800px" }
              }
            />
            <CustomButtonTwo variant="contained">Join</CustomButtonTwo>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
