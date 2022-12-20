import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import MenuItem from "@mui/material/MenuItem"
import { Typography } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const data = [
  {
    text: "Equipment for motorbikes - trucks - cars - agricultural1",
    translation: "",
    isValidated: false,
  },
  {
    text: "Equipment for motorbikes - trucks - cars - agricultural2",
    translation: "",
    isValidated: false,
  },
  {
    text: "Equipment for motorbikes - trucks - cars - agricultural3",
    translation: "",
    isValidated: false,
  }
]

type translationType = {
  text: string,
  translation: string,
  isValidated: boolean,
}

const Translation = () => {
    const [translatedInSession, setTranslatedInSession] = React.useState<translationType[]>([])
    // const [activeStep, setaActiveStep] = useState(0)
    const [translating, setTranslating] = useState<translationType | null>(null)
    const [translateCode, setTranslateCode] = useState(10)
    const [inputTranslation, setInputTranslation] = useState("")

    const handleLangsChange = (event: SelectChangeEvent<number>) => {
        console.log(event.target.value)
        setTranslateCode(event.target.value);
      };

    const handleInputTranslationChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setInputTranslation(e.target.value)
    }

    const handleSkip = () => {
      console.log("skip")
      
      //get new translating data
      setTranslating(data[1])
      setInputTranslation("")
  }

  const handlePrev = () => {
      console.log("prev")
      setTranslating(data[0])
      setInputTranslation("")
  }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        // validation
        if (inputTranslation.trim() === "") {
          return
        }

        

        // updates
        setTranslatedInSession(prevState => [...prevState, translating!])
        // get from db
        setTranslating(data[1])
        console.log("submited")

        // reset
        setInputTranslation("")
    }

    React.useEffect(() => {
      if (translating === null) {
        setTranslating(data[0])
      }
    }, [translating])

  return (
    
    
    <>
    <Box >
        <Box sx={{
        display: "flex",
        justifyContent: "center",
    }}>
        <FormControl >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={translateCode}
          onChange={handleLangsChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>English &rarr; Nsukka Igbo</MenuItem>
          <MenuItem value={20}>Nsukka Igbo &larr; English</MenuItem>
        </Select>
      </FormControl>
        </Box>
        
        <Box sx={{
            px: 2,
            py: 8,
        }}>
            <Typography variant="h5" component="p" >
                {translating?.text}
            </Typography>
        </Box>
        
        <Box component="form" onSubmit={handleSubmit}>
        <TextField
            label="Type text here"
            fullWidth
            value={inputTranslation}
            onChange={handleInputTranslationChange}
            helperText={"Case sensitive"}
            variant="filled"
            InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton color="primary" type="submit" >
                        <SendIcon  />
                    </IconButton>
                    
                  </InputAdornment>
                ),

                "aria-describedby": "description-helper-text",
                // sx: {
                //     display: "flex",
                //     alignItems: "center",
                //   }
              }}

              
          />
        </Box>
    </Box>


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
    </>
  )
}

export default Translation