import React, { useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

import AboutNavDrawer from "./AboutNavDrawer";
const pages = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "How it works",
    link: "/about/how-it-works",
  },
  {
    text: "Community",
    link: "/about/community",
  },
  {
    text: "Open Source",
    link: "/about/open-source",
  },

];

const AboutNavBar = () => {
  const appBarRef = useRef<HTMLDivElement | null>(null)
 

  return (
      <AppBar
        sx={{
          position: "relative",
        }}
        elevation={0}
        variant="outlined"
      >
        <Toolbar
            ref={appBarRef}
          sx={{
            display: {sx: "block", md: "flex"},
            justifyContent: {xs: "auto", md: "space-between"},
            alignItems: {xs: "flex-start", md: "auto"},
            flexDirection: {xs: "column", md: "row"},
            px: 0,
          }}
        >
        
        <Box sx={{
            display: "flex",
            alignItems: "center",
            width: {xs: "100%", md: "auto"},
            borderBottom: 1,
            borderColor: "rgba(0, 0, 0, 0.15)",
            
            p: 1,
        }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <AboutNavDrawer anchor="left" pages={pages} />
            </Box>
        
            <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "1.375rem",
              fontWeight: 500,
              textDecoration: "none",
              px: 1,
              py: 1,
              
              // color: "inherit",
            }}
            >
            Crowdsource
            </Typography>
        </Box>
          
          <Box sx={{
            p: 1,
            width: {xs: "100%", md: "auto"},
          }}>
          <Button variant={"outlined"} sx={{
                textTransform: "none",
                display: {xs: "none", md: "inline-block"},
            }} >
                Get started
            </Button>

            <Button fullWidth variant={"contained"} sx={{
                textTransform: "none",
                py: 1,
                display: {xs: "block", md: "none"},
                fontSize: {xs: "1rem"},
                fontWeight: 400,
            }} >
                Get started
            </Button>
          </Box>

            
        </Toolbar>
        
      </AppBar>
      
            
  );
};

export default AboutNavBar;
