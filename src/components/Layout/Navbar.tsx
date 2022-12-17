import React, { useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NavDrawer from "./NavDrawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";

const pages = [
  {
    text: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    text: "Achievements",
    link: "/achievements",
    icon: <EmojiEventsOutlinedIcon />,
  },
  {
    text: "Leaderboard",
    link: "/leaderboard",
    icon: <LeaderboardOutlinedIcon />,
  },
  {
    text: "Settings",
    link: "/settings",
    icon: <SettingsOutlinedIcon />,
  },
  {
    text: "Invite code",
    link: "/invite-code",
    icon: <ScatterPlotOutlinedIcon />,
  },
];

const NavBar = () => {
  const appBarRef = useRef<HTMLDivElement | null>(null)
  const [anchorElUser, setAnchorElUser] =
    React.useState<HTMLDivElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(appBarRef.current as HTMLDivElement);
    // setAnchorElUser(event.currentTarget as HTMLButtonElement);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "white",
          //   borderBottom: 1,
          //   borderColor: "rgba(0,0,0,0.12)",
          color: "rgba(0,0,0,0.44)",
          position: "relative",
          
        }}
        elevation={6}
        
      >
        <Toolbar
            ref={appBarRef}
          sx={{
            // border: 1,
            // borderColor: "red",
            px: 1,
          }}
        >
          {/* Small Screens */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavDrawer anchor="left" pages={pages} />
          </Box>
          {/* <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 400,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Crowdsource
          </Typography>

          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 1.5, fontSize: "1.25rem" }}
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
        
      </AppBar>
      <Popover
                id={Boolean(anchorElUser) ? 'account-popover' : undefined}
              open={Boolean(anchorElUser)}
              anchorEl={anchorElUser}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}

              sx={{
                // border: 1,
                // borderColor: "blue",
              }}
              PaperProps={{
                sx: {
                    // border: 1,
                    // borderColor: "red",
                    width: "calc(100% - 28px)",
                    maxWidth: "400px",
                    minHeight: "400px",
                    m: 0,
                    mt: 1,

                }
              }
              }
            >
              <Box
                
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Box>
            </Popover>
            
    </React.Fragment>
  );
};

export default NavBar;
