import React from 'react';
import Image from "next/image"
import Link from "next/link"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import HelpIcon from '@mui/icons-material/Help';
import FacebookIcon from '@mui/icons-material/Facebook';
import DiscountRounded from '@mui/icons-material/DiscountRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import AboutNavbar from "../../src/components/Layout/AboutNavbar"

// images
import Community1 from "../../public/images/about/community-1.jpg"

export default function About() {
  return (
    <>
    <header>
      <AboutNavbar />
    </header>
    <main>
    <Container maxWidth="lg" sx={{
      pt: 4,
      pb: 4,
    }}>
      <Typography variant="h2" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.85rem"},
        py: 2,
      }}>
      Join the global community of passionate Crowdsource users!
      </Typography>

      <Box sx={{
        my: 4,
        display: "flex",
        alignItems: "center",
      }}>
      <Typography variant="body2" sx={{
        fontWeight: 300,
      }}>
      Find us on:
      </Typography>
      <Box sx={{
        display: "flex",
      }}>
        <DiscountRounded />
        <TwitterIcon />
        <FacebookIcon />
      </Box>
      </Box>
      
      <Box sx={{
        height: "200px",
        position: "relative",
        "& img": {
                    objectFit: "contain",
                }
      }}>
        <Image src={Community1} alt="People working together to solve" fill priority={true} />
      </Box>

      <Divider />
      
      <Typography variant="h3" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.85rem"},
        mt: 4,
        py: 2,
        textAlign: "center",
      }}>
      Meet the Crowdsource Community
      </Typography>

      <Typography variant="body1" sx={{
        fontWeight: 300,
        textAlign: "center",
      }}>
     Get to know some of our awesome influencers!
      </Typography>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Typography sx={{
          fontWeight: 400,
          fontSize: { xs: "1.75rem"},
          textAlign: "center",
          mt: 4,
          py: 2,
        }}>Try NSK.AI Crowdsource. Make a difference.</Typography>
        <Button variant="contained" sx={{
          textTransform: "none",
          fontSize: "1rem"
        }}>
          Get started
        </Button>
      </Box>

    </Container>
    
    </main>
    <footer >
        <Box component="section" sx={{
          p: 4,
          background: "#f8f9fa",
        }}>
          <Typography  sx={{
              fontWeight: 500,
            }}>Logo</Typography>
          <Box sx={{
            display: "flex",
            flexWrap:"wrap",
            my: 4,
          }}>
            <Link href={"/about"} style={{
              margin: "0.5rem 1rem 0.5rem 0"
            }}>
            <Typography sx={{
              fontWeight: 500,
            }}>About NSK.AI</Typography>
            </Link>
            <Link href={"/about"} style={{
              margin: "0.5rem 1rem 0.5rem 0"
            }}>
            <Typography sx={{
              fontWeight: 500,
            }}>How it works</Typography>
            </Link>
            <Link href={"/about"} style={{
              margin: "0.5rem 1rem 0.5rem 0"
            }}>
            <Typography sx={{
              fontWeight: 500,
            }}>Community</Typography>
            </Link>
            <Link href={"/about"} style={{
              margin: "0.5rem 1rem 0.5rem 0"
            }}>
            <Typography sx={{
              fontWeight: 500,
            }}>Open source</Typography>
            </Link>
            
          </Box>

          <Link href={"/about"} style={{
              margin: "0.5rem 1rem 0.5rem 0"
            }}>
            <Typography sx={{
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}><HelpIcon sx={{
              m:0,
              mr: 1
            }}/> Help</Typography>
            </Link>

        </Box>
    </footer>
    
    </>
  );
}