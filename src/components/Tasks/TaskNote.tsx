import React from "react"
import Image from "next/image"
import { taskType } from "../../../lib/tasks"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"

type propType = {
    task: taskType,
    onHandleClose: () => void,
}

const TaskNote = ({task, onHandleClose}: propType) => {

    const handleClose = () => {
        onHandleClose()
    }

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
            
            
        }}>
        <Typography variant="h5" component="h2" sx={{
            fontSize: "1.125rem",
            px: 2,
            pb: 1.5,
            pt: 2,
            m:0,
        }}>
            {task.name}
        </Typography>
        </Box>
        <Box sx={{
            overflowY: "scroll",
            px: 3,
            // border: 1,
            height: "100%",
        }}>
            <Box sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            // border: 1,
            height: {xs: "250px", sm: "300px", md: "300px"}
        }}>
            <Image src={task.imageSrc} alt={task.name} fill />
        </Box>
        

        <Typography variant="h6" component="h4" sx={{
            fontSize: "1rem",

        }}>
            {task.note.title}
        </Typography>
        <ul style={{
            paddingLeft: 0,
            listStyleType: "none",
        }}>
        {task.note.noteItems.map((item, index )=> {
            return <li key={index}>
                <Typography variant="body1" sx={{
            fontSize: "0.85rem",
        }} >
                - {item}

                </Typography>
            </li>
        })}
        </ul>
        <Typography variant="body1" sx={{
            fontSize: "0.85rem",
            my: 2,
        }}>
            {task.note.noteWhy}
        </Typography>

        <Typography variant="body1" sx={{
            fontSize: "0.85rem",
        }}>
            <b>Note:</b> The task content may containe sensitive, offensive, or personally indentifiable imformation. Help us by reporting it using the task menu in the top-right corner of this panel.
        </Typography>
        </Box>
        
        <Grid container item sx={{
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            p: 3,
            pt: 2,
        }}>
        <Button variant="contained" sx={{
            textTransform: "none",
            width: {xs: "60%"},
            py: 0.5,
        }} onClick={handleClose}>
            Got it
        </Button>
        </Grid>
        

    </Paper>
}

export default TaskNote