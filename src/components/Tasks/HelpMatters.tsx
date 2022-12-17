import * as React from 'react';
import Image from "next/image"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DefaultImage from "../../../public/images/tasks/test.svg";

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
        <Image src={DefaultImage} alt="task not available" />
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            mt: 2,
            fontSize:{xs: "1rem", md: "1.125rem"},
          }}
        >
          This task isn&apos;t available right now
        </Typography>
      </Box>
      
        <Typography variant="body2" id="modal-modal-description" sx={{ mt: 2 }}>
          Help complete a different task! Image Caption isn&apos;t available
          for one of these reasons:
        </Typography>
        <ul>
            <li>
            <Typography variant="body2" id="modal-modal-description" >
            This task has been completed by the Crowdsource community
        </Typography>
                
            </li>
            <li>
            <Typography variant="body2" id="modal-modal-description" >
            This task isn&apos;t available in your language yet
        </Typography>
                
            </li>
            <li>
            <Typography variant="body2" id="modal-modal-description" >
            You&apos;ve answered all the questions for this task
        </Typography>
                
            </li>
        </ul>
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