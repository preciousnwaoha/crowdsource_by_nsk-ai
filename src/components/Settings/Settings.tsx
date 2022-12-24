import React from "react"
import Link from "next/link"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"

const Settings = () => {
    return <Paper elevation={0}>
        <Box sx={{
            py: 2,
        }}>
        <Typography variant="h6" sx={{
            fontWeight: 500,
            fontSize: "1.125rem",
            my: 2,
        }}>
            Email & Notifications
        </Typography>
        <Typography variant="body1" sx={{
            my: 2,
        }}>
            Set your preferences for receiving emails and notifications from Crowdsource.a
        </Typography>
        <Link href="/settings/email-and-notifications">
        <Button variant="contained" color="primary" sx={{
            textTransform: "none",
            
        }}>
            Set my preferences
        </Button>
        </Link>
        <Divider sx={{
            mt: 2,
        }}/>
        </Box>
        
    </Paper>

}

export default Settings