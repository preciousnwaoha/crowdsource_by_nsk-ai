import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from "../src/components/Layout/Navbar"


export default function Help() {
  return (
    <>
      <Navbar />
    
    <main>
    <Container maxWidth="lg" sx={{
      minHeight: {xs: "calc(100vh - 3.5rem)", md: "calc(100vh - 3.5rem)"},
      py: 2,
    }}>
      
      <Typography variant="h2" sx={{
        fontWeight: 400,
        fontSize: { xs: "1.85rem"},
        py: 2,
        textAlign: "center",
        color: "primary.main",
      }}>
      How can we help you?
      </Typography>
    
    </Container>
    
    </main>
    <footer>
    </footer>
    
    </>
  );
}
