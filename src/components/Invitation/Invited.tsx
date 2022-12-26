import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Invited = () => {
  return (
    <div>
        <Box sx={{
            height: "150px",
            border: 1,
        }}>
            <Image src={"https://ssl.gstatic.com/social/villagecrowdui/images/influencer_intro.svg"} alt="Two people celebrating" fill  />
        </Box>
    </div>
  )
}

export default Invited