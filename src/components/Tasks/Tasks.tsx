import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import DefaultImage from "../../../public/images/tasks/test.svg"
import { grey } from '@mui/material/colors';


const DEFAULT_TASKS = [
    {
        name: "Audio Donation",
        imageSrc: "../",
        link: "/",
        completed: true,
    },
    {
        name: "Audio Donation",
        imageSrc: "../",
        link: "/",
        completed: false,
    },
    {
        name: "Audio Donation",
        imageSrc: "../",
        link: "/",
        completed: false,
    }
]



const Tasks = () => {

    const handleTaskNotAvailable = () => {
        console.log("task not available")
    }
  return (
    <Grid container spacing={1}>
        {DEFAULT_TASKS.map((task, index )=> {
            return <Grid key={task.name.replace(" ", "") + `${index}`} item xs={6} md={4}>
                {!task.completed && <Link href={task.link} >
                <Paper elevation={3} sx={{
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                    overflow: "hidden",
                    "&:hover": {
                        background: grey[100]
                    }
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        
                        "& img": {
                            objectFit: "contain"
                        }
                    }}>
                    <Image src={DefaultImage} alt={task.name} />
                    </Box>
                    
                    <Typography variant="h4" sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        mt: 2,
                       
                    }} >
                        {task.name}
                    </Typography>
                </Paper>
                </Link>}
                {task.completed && <Paper elevation={3} sx={{
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                        background: grey[100]
                    }

                }} onClick={handleTaskNotAvailable}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        
                        "& img": {
                            objectFit: "contain"
                        }
                    }}>
                    <Image src={DefaultImage} alt={task.name}  />
                    </Box>
                    
                    <Typography variant="h4" sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        mt: 2,
                       
                    }} >
                        {task.name}
                    </Typography>
                </Paper>}
            </Grid>
        })}
    </Grid>
  )
}

export default Tasks