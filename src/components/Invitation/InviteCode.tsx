import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const InviteCode = () => {

  const [codeEntered, setCodeEntered] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)

  const handleCodeEnteredChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasError(false)
    setCodeEntered(e.target.value)
}

const handleApplyCode = () => {
  // checks

  if (codeEntered.trim().length <= 4) {
    setHasError(true)
    return
  }

  // send request
  setLoading(true)
  console.log("applied")

  // end and reset
  setLoading(false)
  setCodeEntered("")

}

  return (
    <div>
        <Box sx={{
          position: "relative",
            height: "180px",
            // border: 1,
            m: 2,

            "& img": {
              objectFit: "contain"
            }
        }}>
            <Image src={"https://ssl.gstatic.com/social/villagecrowdui/images/influencer_intro.svg"} alt="Two people celebrating" fill priority={true} />
        </Box>

        <Typography variant="body1" component="h3" sx={{
          fontWeight: 500,
          my: 2,
          textAlign: "center",

        }}>
          We need more Crowsourcers
        </Typography>

        <Typography variant="body1" sx={{
          my: 2,
          px: 2,
        }}>
          Bring Someone into your contributor&apos;s network anonymously by using sharing invite code. They&apos;ll be able to see an aggregate of all contributions made by their network.
        </Typography>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <TextField
            label="Enter invite code (e.g. ABC123)"
            value={codeEntered}
            onChange={handleCodeEnteredChange}
            sx={{
              width: "70%",
            }}
            error={hasError}
          />

          <Button variant="contained" sx={{
            textTransform: "none",
            width: "50%",
            my: 2,
          }} onClick={handleApplyCode}>
            Apply
          </Button>
        </Box>
    </div>
  )
}

export default InviteCode