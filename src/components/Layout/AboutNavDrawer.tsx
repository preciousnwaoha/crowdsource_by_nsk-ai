import * as React from 'react';
import Link from "next/link"
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

type anchorType = "left" | "top" | "bottom" | "right"
type propTypes = {
    anchor: anchorType;
    pages: {
        text: string;
        link: string;
    }[];
}

const pagesX = [
    {
        text: "About Crowdsource",
        link: "/about",
        icon: <Diversity1OutlinedIcon />,
      },
      
      {
        text: "Help",
        link: "/help",
        icon: <HelpOutlineOutlinedIcon />,
      },
      {
        text: "Feedback",
        link: "/feedback",
        icon: <FeedbackOutlinedIcon />,
      },
      
]

export default function NavDrawer({anchor="left", pages }: propTypes) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const router = useRouter();


  const toggleDrawer = (anchor: anchorType, open: boolean) => (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    
    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerWithKey = (anchor: anchorType, open: boolean) => (event: React.KeyboardEvent<HTMLDivElement> ) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor: anchorType) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "90vw",
      position: "relative", }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawerWithKey(anchor, false)}
    >
        <Box sx={{
          display: "flex",
          alignItems: "center",
          py: 2,
          px: 2,
            
        }}>
         
          <Typography variant="h4" sx={{
            fontSize: "1.25rem",
            fonWeight: 700,
            m: 0
          }}>
            Crowdsource
          </Typography>
        </Box>
        <Divider />
        <Box sx={{
            pt: 3,
            pr: 1,
        }}>
          {pages.map((page) => {
            return <Link key={page.text.replace(" ", "")} href={page.link} style={{
                color: "inherit",
                textDecoration: "none",
            }}>
                    <Typography variant="body1" sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,
                    mb: "3px",
                    fontWeight: 500,
                    borderRadius: "0 1.5rem 1.5rem 0",
                    color: "rgba(0,0,0,0.65)",

                    "&:hover": {
                      background: "#f8f9fa",
                      color: "black",
                    }
                }}>
                    {page.text}
                    </Typography>
                
                
          </Link>
          })}
          
      
        </Box>
        
    </Box>
  );

  return (
    
        <React.Fragment >
        <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(anchor, true)}
              sx={{
                p: 1.5,
                borderRadius: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}

            <Paper elevation={6} sx={{
            p: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}>
          

            <Button fullWidth variant={"contained"} sx={{
                textTransform: "none",
                py: 1,
                display: {xs: "block", md: "none"},
                fontSize: {xs: "1rem"},
                fontWeight: 400,
            }} >
                Get started
            </Button>
          </Paper>
          </Drawer>
        </React.Fragment>
      
  );
}