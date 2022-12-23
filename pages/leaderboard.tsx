import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/components/Link';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/Copyright';
import Navbar from "../src/components/Layout/Navbar"
import LeaderboardList from '../src/components/Leaderboard/LeaderboardList';
import LeaderboardIntro from '../src/components/Leaderboard/LeaderboardIntro';

export default function Leaderboard() {
  const [showIntro, setShowIntro] = React.useState(true)

  const handleHideIntro = () => {
    setShowIntro(false)
  }

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
    <Container maxWidth="lg">
      {!showIntro && <LeaderboardList />}
      {showIntro && <LeaderboardIntro />}
    </Container>
    
    </main>
    <footer>
    </footer>
    
    </>
  );
}