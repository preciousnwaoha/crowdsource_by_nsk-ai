import React from 'react'
import Link from "next/link"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


const LeaderboardIntro = ( ) => {

  return (
    <Box component="section">
    {/*  <Box sx={{
         border: 1,
         height: "150px",
         my: 2,

    //   }}> */}
        {/* image */}
      {/* </Box> */}
      <Box>
      <Typography variant="body1" component="h2" sx={{
        fontWeight: 500,
        mb: 2,
        mt: 4,
      }}>
      Rise to the top of the Leaderboard
      </Typography>
      <Typography variant="body1" component="p" sx={{
        mb: 4,
      }}>
      Compete with contributors around the world! A preview of your profile will be visible to other contributors on each task-specific Leaderboard. Here&lsquo;s what they&lsquo;ll see:
      </Typography>
      <Grid container  sx={{
        // border: 1,
        m: 0,
        mb: 2,
      }}>
        <Grid item md={6}  xs={12}>
          <Button variant="outlined" sx={{
            textTransform: "none",
            width: "100%",
            py: 1.5,
            mt: 2,
          }}>
            Not now
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Link href={`/leaderboard/translation`}>
          <Button variant="contained" sx={{
            textTransform: "none",
            width: "100%",
            py: 1.5,
            mt: 2,
          }} >
            Join
          </Button>
          </Link>
          
        </Grid>
      </Grid>

      <Typography variant="caption" sx={{
        mt: 2,
      }}>
      You can always opt-out later from Settings.
      </Typography>
      </Box>
      
      <Box>
      <Typography variant="h6" component="h2" sx={{
        fontWeight: 500,
        my: 2,
      }}>
      A new way to rank up
      </Typography>
      <Typography variant="body1"  sx={{
        // fontWeight: 500,
      }}>
      Leaderboard ranks are now calculated based on points instead of total contributions.
      </Typography>
      <Typography variant="body1"  sx={{
        // fontWeight: 500,
      }}>
      Both high quality answers and difficult questions yield more points.
      </Typography>
      <Grid container item sx={{
        justifyContent: "center",
        my: 2,
      }}>
          <Button variant="outlined" sx={{
            textTransform: "none",
          }}>
            View your rank
          </Button>
        </Grid>
      </Box>
    </Box>
  )
}

export default LeaderboardIntro