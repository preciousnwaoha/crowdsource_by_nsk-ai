import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const LeaderboardIntro = () => {

  return (
    <Box component="section">
      <Box>
        {/* image */}
      </Box>
      <Box>
      <Typography variant="body1" component="h2" sx={{
        fontWeight: 500,
      }}>
      Rise to the top of the Leaderboard
      </Typography>
      <Typography variant="body1" component="p" >
      Compete with contributors around the world! A preview of your profile will be visible to other contributors on each task-specific Leaderboard. Here&lsquo;s what they&lsquo;ll see:
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Button variant="outlined" sx={{
            textTransform: "none",
          }}>
            Not now
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button variant="contained" sx={{
            textTransform: "none",
          }}>
            Join
          </Button>
        </Grid>
      </Grid>

      <Typography variant="caption" >
      You can always opt-out later from Settings.
      </Typography>
      </Box>
      
      <Box>
      <Typography variant="h3" component="h2" sx={{
        fontWeight: 500,
      }}>
      A new way to rank up
      </Typography>
      <Typography variant="body1" component="h2" sx={{
        fontWeight: 500,
      }}>
      Leaderboard ranks are now calculated based on points instead of total contributions.
      </Typography>
      <Typography variant="body1" component="h2" sx={{
        fontWeight: 500,
      }}>
      Both high quality answers and difficult questions yield more points.
      </Typography>
      <Grid container item sx={{
        justifyContent: "center",
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