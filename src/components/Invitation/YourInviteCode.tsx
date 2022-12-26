import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const YourInviteCode = () => {
    const [copied, setCopied] = React.useState(false)


    const inviteLink = "red"
    const inviteCode = "blue"

    const handleCopy = (_text : string) => {
        navigator.clipboard.writeText("red");

        setCopied(true)

        // const timer = setTimeout(() => {
        //           setCopied(false)
        // }, 2000);
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setCopied(false);
      };


  return (
    <div>
        <Box sx={{
          position: "relative",
            height: "180px",
            // border: 1,
            m: 2,

            "& img": {
              objectFit: "contain"
            }
        }}>
            <Image src={"https://ssl.gstatic.com/social/villagecrowdui/images/influencer_intro.svg"} alt="Two people celebrating" fill priority={true} />
        </Box>

        <Box sx={{
            px: 2,
        }}>
        <Typography variant="body1" component="h3" sx={{
          fontWeight: 500,
          my: 2,
          textAlign: "center",

        }}>
          Invite your friends by sharing your code
        </Typography>

        <Typography variant="body2" sx={{
            fontWeight: 500,
            my: 1,
        }}>
         Join link with your invite code
        </Typography>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 2,
            bgcolor: "rgba(0,0,0,0.05)",
            mb: 2,
            
        }}>
            <Typography variant="body1" sx={{
                p:2,
            }}>
            https://crowdsource.app.goo.gl/STLU
        </Typography>
            <IconButton color="primary" onClick={() => {handleCopy(inviteLink)}} >
                <ContentCopyIcon />
            </IconButton>
        </Box>

        <Typography variant="body2" sx={{
            fontWeight: 500,
            my: 1,
        }}>
         Join link with your invite code
        </Typography>

        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 2,
            bgcolor: "rgba(0,0,0,0.05)",
            mb: 2,
            
        }}>
            <Typography variant="body1" sx={{
                p:2,
            }}>
            Your invite code
        </Typography>
            <IconButton color="primary" onClick={() => {handleCopy(inviteCode)}} >
                <ContentCopyIcon />
            </IconButton>
        </Box>
        </Box>
        <Snackbar
        open={copied}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied"
        action={<IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>}
      />
        
    </div>
  )
}

export default YourInviteCode