import * as React from 'react';
import Image from "next/image"
import Link from "next/link"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

import HelpIcon from '@mui/icons-material/Help';
import AboutNavbar from "../../src/components/Layout/AboutNavbar"
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
      Help make AI serve everyone, everywhere
      </Typography>

      <Typography variant="body1" sx={{
        fontWeight: 300,
      }}>
      Help Google create AI that understands your language and culture. Make your favorite apps and services even more useful and delightful for your community.
      </Typography>

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
      <Typography variant="h2" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.75rem"},
        mt: 4,
        py: 2,
      }}>
      What is Crowdsource?
      </Typography>

      <Typography variant="body1" sx={{
        fontWeight: 300,
      }}>
      Crowdsource is a fun, easy way for you to use your own abilities to contribute to the building blocks of Artificial Intelligence (AI). This helps us make the Google products that you love even better for your language, region and culture. Answers from you and millions of others around the world are used in Machine Learning based products, making them work well for the diversity of global population.
      </Typography>

      <Divider />

      <Typography variant="h3" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.75rem"},
        mt: 4,
        py: 2,
      }}>
      Why it matters?
      </Typography>

      <Typography variant="body1" sx={{
        fontWeight: 300,
      }}>
     Artificial Intelligence (AI) powers some of the most magical experiences in your favorite apps and products. It helps organize your photos, understand your voice commands, show you the most relevant reviews for products and businesses, and much more!

AI learns these skills by studying vast numbers of examples. The more examples it has for your language, region, or culture, the better it gets for you and everybody in your community.
      </Typography>

      <Box sx={{
        height: "200px",
        position: "relative",
        "& img": {
                    objectFit: "contain",
                }
      }}>
        <Image src={Community1} alt="People working together to solve" fill priority={true} />
      </Box>

      <Typography variant="h3" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.75rem"},
        mt: 4,
        py: 2,
        textAlign: "center",
      }}>
      Diversity in AI
      </Typography>

      <Typography variant="body1" sx={{
        fontWeight: 300,
        textAlign: "center",
      }}>
     You bring your own unique background, experiences, and perspectives to Crowdsource. As a member of our global community of contributors, you&apos;re helping to create AI that can best serve the rich and varied diversities of our planet!
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