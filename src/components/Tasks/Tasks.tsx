import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DefaultImage from "../../../public/images/tasks/test.svg";
import { grey } from "@mui/material/colors";
import TaskNotAvailable from "./TaskNotAvailable";
import { taskType } from "../../../lib/tasks";



type propTypes = {
  tasks: taskType[]
}

const Tasks = ({tasks}: propTypes) => {
  const [openTaskNotAvailable, setOpenTaskNotAvailable] = React.useState(false);

  const handleOpenTaskNotAvailable = () => setOpenTaskNotAvailable(true);
  const handleCloseTaskNotAvailable = () => setOpenTaskNotAvailable(false);


  return (
    <>
      <Grid container spacing={1}>
        {tasks.map((task, index) => {
          return (
            <Grid
              key={task.name.replace(" ", "") + `${index}`}
              item
              xs={6}
              md={4}
            >
              {!task.completed && (
                <Link href={`/task/${task.link}`}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                      overflow: "hidden",
                      "&:hover": {
                        background: grey[100],
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",

                        "& img": {
                          objectFit: "contain",
                        },
                      }}
                    >
                      <Image src={DefaultImage} alt={task.name} />
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      {task.name}
                    </Typography>
                  </Paper>
                </Link>
              )}
              {task.completed && (
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      background: grey[100],
                    },
                  }}
                  onClick={handleOpenTaskNotAvailable}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",

                      "& img": {
                        objectFit: "contain",
                      },
                    }}
                  >
                    <Image src={DefaultImage} alt={task.name} />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      mt: 2,
                    }}
                  >
                    {task.name}
                  </Typography>
                </Paper>
              )}
            </Grid>
          );
        })}
      </Grid>
      <TaskNotAvailable open={openTaskNotAvailable} onHandleClose={handleCloseTaskNotAvailable} />
    </>
  );
};

export default Tasks;
