import React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../src/components/Layout/Navbar"
import InvitationTabs from '../src/components/Invitation/InvitationTabs';

export default function InviteCode() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
    <Container maxWidth="lg" sx={{
      p: 0,
    }}>
      <InvitationTabs />
    </Container>
    
    </main>
    <footer>
    </footer>
    
    </>
  );
}