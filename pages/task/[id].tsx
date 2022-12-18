import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../../src/components/Link';
import ProTip from '../../src/components/ProTip';
import Copyright from '../../src/components/Copyright';
import Navbar from "../../src/components/Layout/Navbar"
import Level from '../../src/components/Level';
import Tasks from '../../src/components/Tasks/Tasks';
import {tasks} from "../../src/utils/tasks"
import { GetStaticProps, GetStaticPaths, } from 'next';
import { getAllTaskIds, getTaskData, taskType } from '../../lib/tasks';
import TaskNote from '../../src/components/Tasks/TaskNote';
import Task from '../../src/components/Tasks/Task';


type propType = {
  propsData: {
    task: taskType
  }
}

export default function Home({propsData}: propType) {
  const [openNote, setOpenSet] = useState(false)
  const handleCloseTaskNote = () => {
    setOpenSet(false)
  }

  const handleOpenTaskNote = () => {
    setOpenSet(true)
  }
  return (
    <>
    {!openNote && <>
      <Navbar />
    
      <main>
    
      
        <Task task={propsData.task} />
    
      </main>
    </>}
    {openNote && <>
      <Navbar />
      <TaskNote task={propsData.task} onHandleClose={handleCloseTaskNote} />
    </>}
    
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTaskIds()

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params", params);
  
    const propsData = getTaskData(params?.id as string)

    // console.log("propsData", propsData);
  
    return {
      props: {
        propsData,
      },
    };
};
