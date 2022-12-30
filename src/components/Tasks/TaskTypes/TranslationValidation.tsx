import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

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
  },
];

type translationType = {
  text: string;
  translation: string;
  isValidated: boolean;
};

const TranslationValidation = () => {
  const [translatedInSession, setTranslatedInSession] = React.useState<
    translationType[]
  >([]);
  // const [activeStep, setaActiveStep] = useState(0)
  const [translating, setTranslating] = useState<translationType | null>(null);
  const [translateCode, setTranslateCode] = useState(10);
  const [inputTranslation, setInputTranslation] = useState("");

  const [validityValue, setValidityValue] = useState<string | null>(null);

  const handleLangsChange = (event: SelectChangeEvent<number>) => {
    console.log(event.target.value);
    setTranslateCode(event.target.value as number);
  };

  const handleSkip = () => {
    console.log("skip");

    //get new translating data
    setTranslating(data[1]);
    setInputTranslation("");
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setValidityValue(value);
  };

  const handlePrev = () => {
    console.log("prev");
    setTranslating(data[0]);
    setInputTranslation("");
  };

  const handleSubmit = () => {
    // validation
    if (inputTranslation.trim() === "") {
      return;
    }

    // updates
    setTranslatedInSession((prevState) => [...prevState, translating!]);
    // get from db
    setTranslating(data[1]);
    console.log("submited");

    // reset
    setInputTranslation("");
  };

  React.useEffect(() => {
    if (translating === null) {
      setTranslating(data[0]);
    }
  }, [translating]);

  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={translateCode}
              onChange={handleLangsChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>English &rarr; Nsukka Igbo</MenuItem>
              <MenuItem value={20}>Nsukka Igbo &larr; English</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 2,
          }}
        >
          <Typography variant="body2">
            Are these translation correct?
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              py: 2,
            }}
          >
            {translating?.text}
          </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  py: 2,
                }}
              >
                {translating?.text}
              </Typography>
              <Box>
              <FormControl>
                <RadioGroup
                  row={true}
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  // defaultValue="top"
                  value={validityValue}
                  onChange={handleRadioChange}
                  sx={{
                    // border: 1,
                    minWidth: "100px",
                    justifyContent: "flex-end",
                  }}
                >
                  <FormControlLabel
                    value={"true"}
                    control={<Radio />}
                    label={<CheckIcon />}
                    labelPlacement="top"
                    sx={{
                      m: 0,
                    }}
                  />

                  <FormControlLabel
                    value={"false"}
                    control={<Radio />}
                    label={<ClearIcon />}
                    labelPlacement="top"
                    sx={{
                      m: 0,
                    }}
                  />
                </RadioGroup>
              </FormControl>
              </Box>
              
            </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "4.5rem",
          left: 0,
          width: "100%",
          p: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            py: 0.5,
            px: 3,
            textTransform: "none",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>

      <Paper
        variant="outlined"
        sx={{
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
        }}
      >
        <Button
          variant="text"
          sx={{
            textTransform: "none",
          }}
          onClick={handlePrev}
          startIcon={<ChevronLeftOutlinedIcon />}
        >
          Previous
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
          }}
          onClick={handleSkip}
          endIcon={<ChevronRightOutlinedIcon />}
        >
          Skip
        </Button>
      </Paper>
    </>
  );
};

export default TranslationValidation;
