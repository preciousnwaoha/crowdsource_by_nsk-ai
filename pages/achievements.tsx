import React from 'react';
import Navbar from "../src/components/Layout/Navbar"
import AchievementsTabs from '../src/components/Achievements/AchievementsTabs';

export default function Achievements() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <AchievementsTabs />
    </main>
    <footer>
    </footer>
    
    </>
  );
}