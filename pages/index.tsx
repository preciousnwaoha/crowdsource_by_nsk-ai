import React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../src/components/Layout/Navbar"
import Level from '../src/components/Level';
import Tasks from '../src/components/Tasks/Tasks';
import { getAllTasksData, taskType } from '../lib/tasks';
import { GetStaticProps, } from 'next';
import WhyHelpMatters from '../src/components/Tasks/WhyHelpMatters';

type propType = {
 propsData : taskType[]
}

export default function Home({propsData }: propType) {
  console.log( propsData)
  return (
    <>
      <Navbar />
    
    <main>
    <Container maxWidth="lg" sx={{
      minHeight: {xs: "calc(100vh - 3.5rem)", md: "calc(100vh - 3.5rem)"},
      py: 2,
    }}>
      <Level />
      <WhyHelpMatters />
      <Tasks tasks={propsData}/>
    </Container>
    
    </main>
    <footer>
      {/* <Copyright /> */}
    </footer>
    
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  
    const propsData = getAllTasksData()

  
    return {
      props: {
        propsData,
      },
    };
};