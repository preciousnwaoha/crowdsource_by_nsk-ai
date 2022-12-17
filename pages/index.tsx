import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/components/Link';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/Copyright';
import Navbar from "../src/components/Layout/Navbar"
import Level from '../src/components/Level';
import Tasks from '../src/components/Tasks/Tasks';

export default function Home() {
  return (
    <>
      <Navbar />
    
    <main>
    <Container maxWidth="lg" sx={{
      minHeight: {xs: "calc(100vh - 3.5rem)", md: "calc(100vh - 3.5rem)"},
      py: 2,
      border: 1,
      borderColor: "red",
    }}>
      <Level />
      <Tasks />
    </Container>
    
    </main>
    <footer>
      <Copyright />
    </footer>
    
    </>
  );
}