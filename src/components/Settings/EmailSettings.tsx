import React from "react";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";

const EmailSettings = () => {
const [recieveEmailsOn, setRecieveEmailsOn] = React.useState(false);
  const [emailFilters, setEmailFilters] = React.useState({
    "0": true,
    "1": true,
    "2": false,
  });
  const [loading, setLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecieveEmailsOn(event.target.checked);
    
  };

  const handleToggleCanRecieveEmails = () => {
    setRecieveEmailsOn((prevState) => !prevState);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailFilterChange = (_code: number)  => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    
    console.log("checked: ", checked)
    console.log("_code: ", _code)
    console.log("e.target.value: ", event.target.value)
    setEmailFilters(prevState => {
        return {
            ...prevState,
            [`${_code}`]: checked,  
        }
        
        
    } );
  };

  const canRecieveEmails = recieveEmailsOn && (email.trim() !== "")

//   console.log("email: ", email)
//   console.log("canRecieveEmails: ", canRecieveEmails)

  return (
    <Paper elevation={0}>
      <Box
        sx={{
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: 350,
            my: 2,
          }}
        >
          Email & Notifications
        </Typography>

        <Typography variant="body2">
          Set your Email preference for receiving notifications related to your
          achievements, community events and other updates.
        </Typography>
      </Box>

      <Box
        sx={{
          p: 1,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",

          "&:hover": {
            bgcolor: "rgba(0,0,0,0.05)",
          },
        }}
        onClick={handleToggleCanRecieveEmails}
      >
        <Typography>Receive Emails</Typography>

        <Switch
          checked={recieveEmailsOn}
          onChange={handleSwitchChange}
          inputProps={{ "aria-label": "controlled" }}
        //   disabled={recieveEmailsOn}
        />
      </Box>

      {recieveEmailsOn && <>
        <TextField
          label="Add email here"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          helperText={"Case sensitive"}
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton color="primary" type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),

            "aria-describedby": "description-helper-text",
          }}
        />

        <Box component="ul" sx={{
            paddingLeft: 0,
        }}>
          <ListItem sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            py: 0,
            px: 2,
            m:0,
            cursor: "pointer",

            "&:hover": {
              bgcolor: "rgba(0,0,0,0.05)",
            },
          }}>
            <Typography variant="body2" sx={{

            }}>Your Achievements & Rewards</Typography>
            <Checkbox
              checked={emailFilters["0"]}
              onChange={() => {handleEmailFilterChange(1)}}
            //   disabled={!canRecieveEmails}
              inputProps={{ "aria-label": "controlled" }}
            />
          </ListItem>
          <ListItem sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            py: 0,
            px: 2,
            m:0,
            cursor: "pointer",

            "&:hover": {
              bgcolor: "rgba(0,0,0,0.05)",
            },
          }}>
            <Typography variant="body2" sx={{

            }}>Community events and news (nsk.ai)</Typography>
            <Checkbox
              checked={true}
              onChange={() => {}}
              disabled={!canRecieveEmails}
              inputProps={{ "aria-label": "controlled" }}
            />
          </ListItem>
          <ListItem sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            py: 0,
            px: 2,
            m:0,
            cursor: "pointer",

            "&:hover": {
              bgcolor: "rgba(0,0,0,0.05)",
            },
          }}>
            <Typography variant="body2" sx={{

            }}>Product & feature updates</Typography>
            <Checkbox
              checked={true}
              onChange={() => {}}
              disabled={!canRecieveEmails}
              inputProps={{ "aria-label": "controlled" }}
            />
          </ListItem>
        </Box>
      </>}
    </Paper>
  );
};

export default EmailSettings;
