import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import AddchartIcon from "@mui/icons-material/Addchart";
// import TextField from "@mui/material/TextField";
import banner from "../assets/intro.png";

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

// const CustomTextField = styled((props) => (
//   <TextField
//     InputProps={{
//       disableUnderline: true,
//       ...props.InputProps,
//     }}
//     {...props}
//   />
// ))({
//   "& .MuiInputBase-root": {
//     color: "#081631",
//     backgroundColor: "#F3F4F6",
//     borderRadius: "40px 0 0 40px",
//     fontSize: "28px",
//     padding: "0px 100px",
//     "& fieldset": {
//       borderRadius: "40px 0 0 40px",
//       border: "0px",
//       backgroundColor: "#F3F4F6",
//     },
//     "&:hover fieldset, &.Mui-focused fieldset": {
//       borderRadius: "40px 0 0 40px",
//       backgroundColor: "#F3F4F6",
//       borderColor: "black",
//     },
//   },
//   "&:hover": {
//     backgroundColor: "#F3F4F6",
//     borderRadius: "40px 0 0 40px",
//   },
//   "&.Mui-focused": {
//     backgroundColor: "#F3F4F6",
//     borderRadius: "40px 0 0 40px",
//   },
// });

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

// const CustomButtonTwo = styled(Button)({
//   backgroundColor: "#081631",
//   color: "#00000",
//   fontSize: "22px",
//   fontWeight: "900",
//   borderRadius: "3px",
//   padding: "15px 52px",
//   "&:hover": {
//     backgroundColor: "#e3bc24",
//     borderColor: "#005cbf",
//   },
//   transition: "all 0.7s",
//   textTransform: "none",
//   letterSpacing: "1px",
// });

function Mission() {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const sections = [
    {
      title: "Sales Enablement",
      icon: (
        <ContentPasteSearchIcon
          fontSize="large"
          sx={{ color: "#1A74FF", fontSize: "50px" }}
        />
      ),
      content: [
        "⁠Lead engine creation and management.",
        "Success stories include securing leads for Spain, Ecuador, USA, UK, and more.",
        "Enrolling to Accelerator and incubation programs worldwide, smooth market entry into the USA, UK, Germany, and beyond.",
      ],
      learnMore: `Specialize in lead engine creation and management, facilitating market entry for tech companies globally.
      Success stories include generating leads for companies across various countries like Spain, Ecuador, USA, UK, and more.
      Secure access to accelerator and incubation programs worldwide, ensuring smooth market entry into the USA, UK, Germany, and beyond.
      `,
    },
    {
      title: "Marketing Support",
      icon: (
        <ImportantDevicesIcon
          fontSize="large"
          sx={{ color: "#1A74FF", fontSize: "50px" }}
        />
      ),
      content: [
        "Comprehensive online presence and social media optimization.",
        "Development of impactful marketing materials and strategic plans.",
        "Global growth facilitation for over 50 tech companies through tailored marketing strategies.",
      ],
      learnMore: `Comprehensive marketing services prepare tech companies for global markets by enhancing their online presence through website and social media optimization.
      Craft impactful marketing materials such as 1-pagers, case analyses, and strategic marketing plans.
      With a portfolio of over 50 tech companies, drive their global growth and expansion through tailored marketing strategies.`,
    },
    {
      title: "Investment Advisory",
      icon: (
        <AddchartIcon
          fontSize="large"
          sx={{ color: "#1A74FF", fontSize: "50px" }}
        />
      ),
      content: [
        "Investment guidance and matching with a network of 150+ angels and VCs.",
        "Expertise in financial preparation and investor scouting.",
        "Successful fundraising facilitation in regions like the UK, USA, Switzerland, Russia, and Turkey.",
      ],
      learnMore: `Offer investment guidance and matching services, connecting tech companies with a network of over 150 angels and venture capitalists globally.
      Expertise includes financial preparation, investor scouting, and Virtual Data Room (VDR) creation.
      Facilitate investment for tech companies to fuel their growth with successful fundraising experiences across various regions including the UK, USA, Switzerland, Russia, and Turkey.`,
    },
  ];

  const handleLearnMoreClick = (title, content) => {
    setDialogTitle(title);
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const whatsAppMessage = encodeURIComponent(
    "Hello, I'd like to request a consultation."
  );

  const whatsAppNumber = "447552487007";

  return (
    <>
      <div className="h-[550px] bg-blue-1000 " id="mission-section">
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
          <div className=" opacity-100 flex flex-col text-white-100 w-[50%] mt-24 ml-4 relative left-5 bottom-10">
            <h4 className="font-semibold tracking-widest">
              CO-FOUNDER AS A SERVICE.
            </h4>
            <h5 className="leading-[75px] font-source-serif font-extrabold text-[55px]">
              EarlyTech makes Growth Convenient
            </h5>
            <div className="md:mt-4 sm:mt-8">
              <CustomButton
                sx={
                  isMobile
                    ? {
                        width: "360px",
                        marginTop: "40px",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }
                    : {}
                }
                variant="contained"
              >
                <a
                  href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
                >
                  Get Started
                </a>
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

      <div className="bg-blue-400 md:h-[550px] sm:h-[210vh] ">
        <div className="flex flex-wrap justify-center md:pt-0 sm:pt-20  [&>*]:bg-white-200 lg:[&>*]:h-[460px] sm:[&>*]:h-[550px]  md:[&>*]:w-[30%] sm:[&>*]:w-[350px] md:[&>*]:mx-5 md:[&>*]:mr-0 md:[&>*]:mt-[-60px] sm:[&>*]:mt-[30px] [&>*]:rounded-lg [&>*]:flex [&>*]:flex-col">
          {sections.map((section, index) => (
            <div key={index} className="pt-4 pl-8">
              {section.icon}
              <h5 className="text-[28px] font-bold w-11/12">{section.title}</h5>
              <button
                className="mt-2 text-xl underline underline-offset-4 text-blue-600 font-bold mb-3 flex"
                onClick={() =>
                  handleLearnMoreClick(section.title, section.learnMore)
                }
              >
                Learn more →
              </button>
              {section.content.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className="mt-3 w-11/12 font-medium tracking-wide text-lg mb-3"
                >
                  <div className="flex">
                    •<p className="ml-2">{item}</p>
                  </div>
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col md:mx-auto sm:mx-12 items-center mt-24 ">
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
        </div> */}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Mission;
