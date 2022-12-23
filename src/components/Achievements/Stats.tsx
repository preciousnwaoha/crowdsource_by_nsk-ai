import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LinearProgress, {
    linearProgressClasses,
  } from "@mui/material/LinearProgress";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import AllLevels from "./AllLevels"
import ContributionBreakdown from "./ContributionBreakdown"


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    my: 2,
    borderRadius: 4,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 4,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));


const Stats = () => {
  const [openViewLevels, setOpenViewLevels] = React.useState(false);
  const [openContributions, setOpenContributions] = React.useState(false);
  const handleOpenViewLevels = () => {
    setOpenViewLevels(true)
  };

  const handleCloseViewLevels = () => {
    
    setOpenViewLevels(false)
  };

  const handleOpenContribution = () => {
    setOpenContributions(true)
  }
  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        mt: 3,
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: "125px",
          px: 3,
          py: 3.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">LEVEL</Typography>
        <Typography
          variant="h4"
          component="h5"
          sx={{
            fontSize: "3.5rem",
            m:0,
          }}
        >
          0
        </Typography>

        {/* <Image src="" /> */}
        <Button
          onClick={handleOpenViewLevels}
          variant="text"
          sx={{
            textTransform: "none",
            position: "absolute",
            top: "8px",
            right: "16px",
          }}
          endIcon={<ChevronRightOutlinedIcon />}
        >
          View all levels 
        </Button>
        <AllLevels open={openViewLevels} onHandleClose={handleCloseViewLevels} />
      </Box>

      <Box sx={{
        borderTop: 1,
        borderBottom: 1,
        borderColor: "rgba(0,0,0,0.15)",
        p: 2,
      }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            p: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="body1" sx={{
                fontWeight: 400,
                fontSize: "1.5rem",
            }}>0</Typography>
            <Typography variant="body2">Contribution</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="body1" sx={{
                fontWeight: 400,
                fontSize: "1.5rem",
            }}>0</Typography>
            <Typography variant="body2">Points</Typography>
          </Box>
          
        </Box>
        <BorderLinearProgress variant="determinate" value={50} />
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 0.5,
        }}>
            <Typography variant="caption" component="p"  sx={{
                // fontSize: "1.25rem",
            }}>0 points</Typography>
            <Typography variant="caption" component="p" sx={{
                // fontSize: "1.25rem",
            }}>3 points</Typography>
        </Box>
      </Box>
        
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Button
          onClick={handleOpenContribution}
          variant="text"
          sx={{
            textTransform: "none",
            my: 1,
          }}
        >
          Contribution breakdown
        </Button>
        </Box>
        {openContributions && <ContributionBreakdown />}
    </Paper>
  );
};

export default Stats;
