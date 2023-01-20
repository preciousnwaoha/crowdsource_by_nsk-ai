import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from "../../src/components/Layout/Navbar";
import Settings from "../../src/components/Settings/Settings"

export default function SettingsPage() {
  return (
    <>
      <Navbar />
    <main>
    <Container maxWidth="lg">
      <Settings />
    </Container>
    
    </main>
    <footer>
    </footer>
    
    </>
  );
}