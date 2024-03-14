import React, { useState } from "react";
import logo from "../assets/logo.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    setIsDrawerOpen(false);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const CustomButton = styled(Button)({
    backgroundColor: "#FFFFFF",
    color: "#1A74FF",
    fontSize: "15px",
    fontWeight: "900",
    borderRadius: "30px",
    padding: "10px 50px",
    "&:hover": {
      backgroundColor: "#FAD64B",
      color: "#000000",
    },
    transition: "all 1s ease-in-out",
    letterSpacing: "1.5px",
  });

  const drawerStyle = {
    width: "100%",
    minHeight: "300px", // Changed to minHeight to allow expansion
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around", // Changed to space-around for even spacing
    backgroundColor: "#002D86",
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "15px 0", // Added padding top and bottom
  };

  const dividerStyle = {
    my: 0,
    width: "100%",
    borderRadius: 2,
    border: "2px solid black",
    borderColor: "divider",
    backgroundColor: "#1A74FF",
  };

  const whatsAppMessage = encodeURIComponent(
    "Hello, I'd like to request a consultation."
  );

  const whatsAppNumber = "447552487007";

  return (
    <div className="bg-blue-1000 pt-2">
      <div className="flex h-20 items-center justify-between text-white-0 opacity-90 sticky top-0 bg-blue-1000 z-50 pb-3">
        <div className="ml-10">
          <img src={logo} alt="logo" className="h-20" />
        </div>
        <div className="flex mr-12 font-semibold tracking-widest text-xl items-center">
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon
                  sx={{ fontSize: "45px", position: "relative", left: "20px" }}
                />
              </IconButton>
              <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <div style={drawerStyle}>
                  <div className="flex justify-between w-full mx-8">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-16 ml-4"
                      onClick={() => setIsDrawerOpen(false)}
                    />
                    <button
                      className="mr-8 text-3xl"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      X
                    </button>
                  </div>
                  <Divider sx={dividerStyle} />
                  <a
                    href="#mission-section"
                    onClick={(e) => handleScroll(e, "team-section")}
                  >
                    TEAM
                  </a>
                  <Divider sx={dividerStyle} />
                  <a
                    href="#team-section"
                    onClick={(e) => handleScroll(e, "contact-section")}
                  >
                    CONTACT US
                  </a>
                  <Divider sx={dividerStyle} />
                  <a
                    href="#faq-section"
                    onClick={(e) => handleScroll(e, "faq-section")}
                  >
                    FAQ
                  </a>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <div className="flex [&>*]:mx-2">
                <a
                  href="#mission-section"
                  onClick={(e) => handleScroll(e, "team-section")}
                >
                  TEAM
                </a>
                <a
                  href="#team-section"
                  onClick={(e) => handleScroll(e, "contact-section")}
                >
                  CONTACT US
                </a>
                <a
                  href="#faq-section"
                  onClick={(e) => handleScroll(e, "faq-section")}
                >
                  FAQ
                </a>
              </div>
              <Divider
                variant="middle"
                sx={{
                  py: 2,
                  borderRadius: 2,
                  mr: "30px",
                  border: "2px solid black",
                  borderColor: "divider",
                  backgroundColor: "#00B2E1",
                }}
              />
              <CustomButton variant="contained">
                {" "}
                <a
                  href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
                >
                  Get Started
                </a>
              </CustomButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
