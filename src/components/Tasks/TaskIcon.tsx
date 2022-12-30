import * as React from "react"
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { tasks } from "../../utils/tasks";


const taskIcons = {
    "audio-validation": <HeadphonesOutlinedIcon color="primary" />,
  "audio-donation": <MicOutlinedIcon color="primary" />,
  "translation": <TranslateOutlinedIcon color="primary" />,
  "translation-validation": <FactCheckOutlinedIcon color="primary" />,
  "word-translation": <TranslateOutlinedIcon color="primary" />,
}

type propTypes = {
    taskId: string,
}

const TaskIcon = ({taskId}: propTypes) => {
    if (taskIcons.hasOwnProperty(taskId)) {
        return taskIcons[taskId]
    } 

    return <CircleOutlinedIcon />
}

export default TaskIcon