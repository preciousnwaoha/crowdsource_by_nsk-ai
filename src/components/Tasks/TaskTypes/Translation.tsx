import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"

import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import MenuItem from "@mui/material/MenuItem"
import { Typography } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"

const data = [
    "Equipment for motorbikes - trucks - cars - agricultural"
]

const Translation = () => {
    // const [fromLang, setFromLang] = useState("")
    // const [toLang, setToLang] = useState("")
    const [translateCode, setTranslateCode] = useState(10)
    const [inputTranslation, setInputTranslation] = useState("")

    const handleLangsChange = (event: SelectChangeEvent<number>) => {
        // console.log(event.target.value)
        setTranslateCode(event.target.value);
      };

    const handleInputTranslationChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setInputTranslation(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        console.log("submited")
    }

  return (
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
                {data[0]}
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
                    <IconButton color="primary" >
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
  )
}

export default Translation