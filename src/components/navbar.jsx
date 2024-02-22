import React, { useState } from 'react';
import logo from "../assets/logo.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const CustomButton = styled(Button)({
    backgroundColor: "#FFFFFF",
    color: "#1A74FF",
    fontSize: "15px",
    fontWeight: "900",
    borderRadius: "30px",
    padding: "10px 50px",
    "&:hover": {
      backgroundColor: "#e3bc24",
      color: "#0056E0",
    },
    transition: "all 1s ease-in-out",
    letterSpacing: "1.5px",
  });

  const drawerStyle = {
    py: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4D93FF",
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "bold",
  };

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
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <div style={drawerStyle}>
                  <p onClick={() => setIsDrawerOpen(false)}>MISSION</p>
                  <p onClick={() => setIsDrawerOpen(false)}>TEAM</p>
                  <p onClick={() => setIsDrawerOpen(false)}>FAQ</p>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <div className="flex [&>*]:mx-2">
                <h3>MISSION</h3>
                <h3>TEAM</h3>
                <h3>FAQ</h3>
              </div>
              <Divider variant="middle" sx={{ py: 2, borderRadius: 2, mr: "30px", border: "2px solid black", borderColor: "divider", backgroundColor: "#4D93FF", }} />
              <CustomButton variant="contained">Get Started</CustomButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
