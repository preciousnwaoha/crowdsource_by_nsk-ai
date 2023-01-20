import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from "../../src/components/Layout/Navbar";
import EmailSettings from "../../src/components/Settings/EmailSettings"

export default function EmailSettingsPage() {
  return (
    <>
      <Navbar />
    <main>
    <Container maxWidth="lg" sx={{
        p: 0,
    }} >
      <EmailSettings />
    </Container>
    
    </main>
    <footer>
    </footer>
    
    </>
  );
}