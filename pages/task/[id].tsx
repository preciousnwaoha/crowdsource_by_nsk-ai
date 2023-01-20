import React, {useState} from 'react';
import Navbar from "../../src/components/Layout/Navbar";
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
