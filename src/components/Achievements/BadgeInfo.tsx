import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DefaultImage from "../../../public/images/tasks/test.svg";
import { transferableAbortSignal } from "util";


type badgeType = {
    name: string,
    imageSrc: string,
    badgeId: string,
    level: number,
    link: string,
}

type propTypes = {
  open: boolean;
  onHandleClose: Function;
  badge: badgeType;
};

const defaultLevels: {
    reachPoint: number;
    gift?: string;
  }[] = [
    {
      reachPoint: 3,
    },
    {
      reachPoint: 50,
    },
    {
      reachPoint: 200,
    },
    {
      reachPoint: 200,
      gift: "New gift Unlocked",
    },
    {
      reachPoint: 450,
    },
    {
      reachPoint: 1000,
    },
    {
      reachPoint: 1500,
    },
    {
      reachPoint: 1500,
    },
    {
        reachPoint: 2500,
      },
      {
        reachPoint: 4000,
      },
  ];

const defaultUserData = {
    points: 6,
}

export default function AllLevel({ open, onHandleClose, badge }: propTypes) {

  const handleClose = () => onHandleClose();

  const pointsForLevel = defaultLevels[badge!.level].reachPoint

  const pointsLeft = pointsForLevel - defaultUserData.points

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          border: 0,

          overflow: "hidden",

          "&:hover, &:focus": {
            ouline: 0,
            border: 0,
          },
        }}
      >
        <Box
          sx={{
            // outline: "1px solid red",
            minWidth: "90vw",
            maxWidth: "90vw",
            maxHeight: "90vh",
            
          }}
        >
            <Box sx={{
                backgroundColor: "secondary.main",
                height: "100px",
                position: "relative",

            }}>
                <Paper sx={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    p:0.5,
                    top: "30%",
                    left: "50%",
                    transform: "translateX(-50%)"
                }}>

                </Paper>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
                p:2,
            }}>
                <Typography variant="h6" component="h4" sx={{
                    fontWeight: 500,
                    m: 0,
                }}>
                    Contributor
                </Typography>
                <Typography variant="body1">
                    Level {badge!.level}
                </Typography>
                <Typography variant="body1" sx={{
                    my: 2,
                }}>
                    Minted for reaching level {badge!.level}
                </Typography>
                <Typography variant="body1" sx={{
                    p: 1,
                    borderBottom: 3,
                    borderColor: "rgba(0,0,0,0.12)",
                }}>
                    0 / 3
                </Typography>

                <Typography variant="body1" sx={{
                   my: 1,
                }}>
                    Get {3} points to reach level {badge!.level}
                </Typography>

            </Box>
         
        </Box>

      </Box>
    </Modal>
  );
}
