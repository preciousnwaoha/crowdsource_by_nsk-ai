import React from "react"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

type propType = {
    message: string,
    image: string,
    action: () => void,
    actionText: string,
}

const GenericError = ({message, image, action, actionText}: propType) => {
    return <Box sx={{

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }}>
        
        <Typography variant="body1">
            {message}
        </Typography>
        <Button variant="contained" onClick={() => {action()}}>
            {actionText}
        </Button>
    </Box>
}

export default GenericError