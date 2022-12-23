import React from "react";
import Image from "next/image";
// import Link from "next/link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import BadgeInfo from"./BadgeInfo"

type badgeType = {
    name: string,
    imageSrc: string,
    badgeId: string,
    level: number,
    link: string,
}

const defaultBadges: badgeType[] =  [
    {
        name: "Contributor",
        imageSrc: "",
        badgeId: "1",
        level: 0,
        link: "https://google.com",

    },
    {
        name: "Contributor",
        imageSrc: "",
        badgeId: "2",
        level: 2,
        link: "https://google.com",
    },
    {
        name: "Contributor",
        imageSrc: "",
        badgeId: "3",
        level: 5,
        link: "https://google.com",
    },
    {
        name: "Contributor",
        imageSrc: "",
        badgeId: "4",
        level: 7,
        link: "https://google.com",
    },
]

const Badges = () => {
    const [openBadgeInfo, setOpenBadgeInfo] = React.useState(false);
    const handleOpenBadgeModal = () => {
        setOpenBadgeInfo(true)
    }

    const handleCloseBadgeModal = () => {
        setOpenBadgeInfo(false)
    }

  return (
    <Paper variant="elevation" elevation={2} sx={{
        borderRadius: 0,
        background: "rgba(0,0,0,0.03)",
    }}>
        <Typography variant="h3" sx={{
            fontSize: "0.85rem",
            fontWeight: 500,
            textTransform: "uppercase",
            py: 3,
            px: 2,
            m: 0,
            color: "primary.main",
            
        }}>Badges</Typography>
        <Divider />
        <Grid container spacing={0} sx={{
            bgcolor: "transparent"
        }}>
            {defaultBadges.map(badge => {
                return (
                <>
                <Grid key={badge.badgeId} item xs={6} md={4} >
                    <Box sx={{
                        // border: 1,
                        display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    m: 1,
                    cursor: "pointer",
                    }}  onClick={handleOpenBadgeModal}>
                        <Paper sx={{
                        width: "80px",
                        height: "80px",
                        boder: 1,
                        borderRadius: "50%",
                        p: "4px",
                        position: "relative",
                    }}>
                        {/* <Image src={badge.imageSrc} alt={badge.name} fill /> */}
                    </Paper>
                    <Typography variant="body2" sx={{
                        color: "primary.main",
                        p: 1,
                    }}>
                        {badge.name}
                    </Typography>
                    </Box>
                    
                </Grid>
                <BadgeInfo open={openBadgeInfo} onHandleClose={handleCloseBadgeModal} badge={badge} />
                </>
                )
            })}
        </Grid>
        
    </Paper>
  )
}

export default Badges