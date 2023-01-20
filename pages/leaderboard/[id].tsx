import React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../../src/components/Layout/Navbar"
import LeaderboardListWrapper from '../../src/components/Leaderboard/LeaderboardLIstWrapper';
import { GetStaticProps, GetStaticPaths, } from 'next';
import { getAllTaskIds, getTaskData, taskType } from '../../lib/tasks';


type propType = {
    propsData: {
      task: taskType
    }
  }

export default function LeaderboardOfTask({propsData}: propType) {

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
    <Container maxWidth="lg" sx={{
      height: {xs: "calc(100vh - 3.5rem)", md: "calc(100vh - 3.5rem)"},
      p:0,
    }} >
      <LeaderboardListWrapper task={propsData.task} />
      
    </Container>
    
    </main>
    <footer>
    </footer>
    
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllTaskIds()
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = ({ params }) => {
    console.log("params", params);
    
      const propsData = getTaskData(params?.id as string)
  
      // console.log("propsData", propsData);
    
      return {
        props: {
          propsData,
        },
      };
  };