import * as React from 'react';
import Image from "next/image"
import Link from "next/link"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
      Simple questions. Endless fun.
      </Typography>

      <Typography variant="body1" sx={{
        fontWeight: 300,
      }}>
      Make a real difference in just few seconds.
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
      

     

      

      <Typography variant="h3" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.75rem"},
        mt: 4,
        py: 2,
        textAlign: "center",
      }}>
      How Crowdsource Works
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Paper variant="elevation"elevation={1} sx={{
                position: "relative",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                my: 2,

                "& img": {
                    objectFit: "contain",
                }
            }}>
                
            </Paper>
            <Typography variant="body1" sx={{
        fontWeight: 400,
        my: 2,
        textAlign: "center",
      }}>
      How Crowdsource Works
      </Typography>
      <Typography variant="body1" sx={{
        fontWeight: 300,
        textAlign: "center",
      }}>
      Spotting food or animals in photos, identifying the emotional impact of sentences in your own language, and so much more! Crowdsource has many fascinating and fun activities for you.
      </Typography>

            </Box>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Paper variant="elevation"elevation={1} sx={{
                position: "relative",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                my: 2,

                "& img": {
                    objectFit: "contain",
                }
            }}>
                
            </Paper>
            <Typography variant="body1" sx={{
        fontWeight: 400,
        my: 2,
        textAlign: "center",
      }}>
      Level up as you earn badges and milestones on the leaderboards
      </Typography>
      <Typography variant="body1" sx={{
        fontWeight: 300,
        textAlign: "center",
      }}>
      As a member of the global Crowdsource community, you can earn cool badges, level up on the leaderboards, and gain recognition from other Crowdsourcers and Google.
      </Typography>

            </Box>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Paper variant="elevation"elevation={1} sx={{
                position: "relative",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                my: 2,

                "& img": {
                    objectFit: "contain",
                }
            }}>
                
            </Paper>
            <Typography variant="body1" sx={{
        fontWeight: 400,
        my: 2,
        textAlign: "center",
      }}>
            Join the global Crowdsource community

      </Typography>
      <Typography variant="body1" sx={{
        fontWeight: 300,
        textAlign: "center",
      }}>
        Tune into local Crowdsource community events, or organize your own. Be a part of the expanding Crowdsource revolution.
      </Typography>

            </Box>
            
        </Grid>

      </Grid>

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