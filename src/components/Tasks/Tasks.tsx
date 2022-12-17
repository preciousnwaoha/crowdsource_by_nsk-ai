import React, {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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
    const [openTaskNotAvailable, setOpenTaskNotAvailable] = React.useState(false);

  const handleOpenTaskNotAvailable = () => setOpenTaskNotAvailable(true);
  const handleCloseTaskNotAvailable = () => setOpenTaskNotAvailable(false);

 
  return (
    <>
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

                }} onClick={handleOpenTaskNotAvailable}>
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
    <Modal
        open={openTaskNotAvailable}
        onClose={handleCloseTaskNotAvailable}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              border: 0,
              borderRadius: 2,
              p: 4,

              "&:hover, &:focus":{
                ouline: 0,
                border: 0,
              }
            
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }}>
                <Image src={DefaultImage} alt="task not available" />
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                mt: 2,
                fontSize: "1.125rem",
                
            }}>
            This task isn&apos;t available right now
          </Typography>
            </Box>
          <Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Help complete a different task! Image Caption isn&apos;t available for one of these reasons:
          </Typography>

          <Button variant="contained" onClick={handleCloseTaskNotAvailable}>Got it</Button>
          </Box>

          
        </Box>
      </Modal>
    </>
    
  )
}

export default Tasks