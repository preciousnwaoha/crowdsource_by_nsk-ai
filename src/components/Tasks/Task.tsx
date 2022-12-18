import React, {useState} from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Translation from "./TaskTypes/Translation"
import TranslationValidation from "./TaskTypes/TranslationValidation"
import AudioValidation from "./TaskTypes/AudioValidation"
import AudioDonation from "./TaskTypes/AudioDonation"

import {taskType} from "../../../lib/tasks"

type propType ={
    task: taskType
}

const Task = ({task}: propType) => {
    // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleSkip = () => {
        console.log("skip")
    }

    const handlePrev = () => {
        console.log("skip")
    }

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorEl(null);
      };
    
    return <Paper variant="elevation" elevation={0} sx={{
        pt: 8,
        pb: 9,
        // border: 1,
        // borderColor: "red",
        position: "relative",
        overflowY: "hidden",
        height: {xs: "calc(100vh - 3.5rem)", md: "calc(100vh - 3.5rem)"},
        maxHeight: {xs: "calc(100vh - 3.5rem)", md: "calc(100vh - 3.5rem)"}
    }}>
        
        
        <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            bgcolor: "background.paper",
            // border: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
            pr: 1,
        }}>
        <Typography variant="h5" component="h2" sx={{
            fontSize: "1.125rem",
            p: 0,
            m:0,
            width: "auto",
        }}>
            {task.name}
        </Typography>
        <IconButton size="large"
                aria-label="menu for current task"
                aria-controls="task-menu"
                aria-haspopup="true"
                onClick={handleOpenMenu} sx={{
            // color: "inherit",
        }}>
            <MoreVertOutlinedIcon />
        </IconButton>
        <Menu
                id="task-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>Report</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Help</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Feedback</MenuItem>
                <MenuItem onClick={handleCloseMenu}>How to answer</MenuItem>
              </Menu>
        </Box>
        
        {task.link === "translation" && <Translation /> }
        {task.link === "translation-validation" && <TranslationValidation /> }
        {task.link === "audio-validation" && <AudioValidation /> }
        {task.link === "audio-donation" && <AudioDonation /> }
        
        
        <Paper variant="outlined" sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            p: 2,
            outline: 0,
            border: 0,
            borderTop: 2,
            borderColor: "rgba(0,0,0,0.075)",
            
            borderRadius: 0,
        }}>
            <Button variant="text" sx={{
            textTransform: "none",
        }} onClick={handlePrev} startIcon={<ChevronLeftOutlinedIcon />}>
            Previous
        </Button>
        <Button variant="text" sx={{
            textTransform: "none",
        }} onClick={handleSkip} endIcon={<ChevronRightOutlinedIcon />}>
            Skip
        </Button>
        </Paper>
        

    </Paper>
}

export default Task