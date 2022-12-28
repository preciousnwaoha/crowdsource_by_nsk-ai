import * as React from 'react';
import Image from "next/image"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DefaultImage from "../../../public/images/tasks/why-task.svg";

type propTypes = {
    open: boolean,
    onHandleClose: Function,

}


export default function TaskNotAvailable({open, onHandleClose, }: propTypes ) {
  const handleClose = () => onHandleClose();

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "90%",
        maxWidth: "90%",
        // maxWidth: "400px",
        bgcolor: "background.paper",
        boxShadow: 24,
        border: 0,
        borderRadius: 2,
        p: 0,
        overflow: "hidden",
        maxHeight: "100%",

        "&:hover, &:focus": {
          ouline: 0,
          border: 0,
        },
      }}
    >
        <Box sx={{
            overflowY: "scroll",
            px: 4,
            pt: 4,
            maxHeight: "400px",
        }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          
        }}
      >
        <Box sx={{
          position: "relative",
          width: "100%",
          height: "200px",

          "& img": {
            objectFit: "contain"
          }
        }}>
        <Image src={DefaultImage} alt="task not available" fill />
        </Box>
        
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            mt: 2,
            fontSize:{xs: "1rem", md: "1.125rem"},
          }}
        >
          Your help matters
        </Typography>
      </Box>
      
        <Typography variant="body2" id="modal-modal-description" sx={{ mt: 2 }}>
        When you use Crowdsource by Google, you improve products like Google Translate, Google Maps, and Google Search for your local community.
        </Typography>
        <Typography variant="body2" id="modal-modal-description" sx={{ mt: 2 }}>
        Crowdsource gathers your feedback, and feedback from others around the world, to design products that represent people and cultures everywhere. Thank you for helping us create inclusive products that everyone can use and enjoy.
        </Typography>
      </Box>
      <Grid
        container
        item
        sx={{
          justifyContent: "flex-end",
          p: 3,
        }}
      >
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            textTransform: "capitalize",
          }}
        >
          Got it
        </Button>
      </Grid>
    </Box>
  </Modal>
  );
}