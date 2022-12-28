import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

type propTypes = {
    onClose: () => void
}

const Feedback = ({onClose}: propTypes) => {
    const [feedback, setFeedback] = React.useState("")

    const handleFeedbackChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setFeedback(e.target.value)
    }

    const handleSend = () => {
        console.log("send")
    }

    let disableSend = feedback.trim().length === 0


  return (
    <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "background.paper",
        zIndex: 100,
    }}>

    <Paper variant="elevation" elevation={4} sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1,
    }}>
    <Typography variant="h6" component="h2" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.25rem"},
        color: "inherit",
      }}>
      Send us your feedback
      </Typography>
      <IconButton onClick={() => {onClose()}}>
        <CloseOutlinedIcon />
      </IconButton>
    </Paper>
        <Box sx={{
            overflowY: "auto",
            height: "calc(100vh - 4rem - 4.75rem)",
            p: 2,
        }}>
             <Typography variant="body2" sx={{
        my: 1,
      }}>
      Describe your issue or suggestion
      </Typography>
      <TextField
            placeholder="Tell us how to improve our product"
            fullWidth
            multiline
            rows={5}
            value={feedback}
            onChange={handleFeedbackChange}
            variant="outlined"
            InputProps={{
                // "aria-describedby": "description-helper-text",
                sx: {
                    "&::placeholder": {
                        // color: "black",
                    }
                }
              }}

              
          />
          
          <Typography variant="caption" sx={{
        my: 1,
        display: "flex",
            alignItems: "center",
      }}>
      Please don’t include any sensitive information
      <HelpOutlineOutlinedIcon sx={{
        fontSize: "1rem",
        ml: 1,
      }}/>
      </Typography>

          
        </Box>

        <Paper variant="elevation" elevation={4} sx={{
            p: 3,
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
        }}>
            <Button variant="contained" disabled={disableSend} onClick={handleSend} sx={{
                textTransform: "none",
                px: 3,
            }}>Send</Button>
        </Paper>
    </Box>
  )
}

export default Feedback