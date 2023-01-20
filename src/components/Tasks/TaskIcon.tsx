import * as React from "react"
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

type propTypes = {
    taskId: string,
}

const TaskIcon = ({taskId}: propTypes) => {
    if (taskId === "audio-validation") {
        return <HeadphonesOutlinedIcon color="primary" />
    }
    else if (taskId === "audio-donation") {
        return <MicOutlinedIcon color="primary" />
    }
    else if (taskId === "translation") {
        return <TranslateOutlinedIcon color="primary" />
    }
    else if (taskId === "translation-validation") {
        return <FactCheckOutlinedIcon color="primary" />
    }
    else if (taskId === "word-translation") {
        return  <TranslateOutlinedIcon color="primary" />
    }

    return <CircleOutlinedIcon />
}

export default TaskIcon