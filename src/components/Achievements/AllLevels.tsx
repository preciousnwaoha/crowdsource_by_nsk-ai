import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DefaultImage from "../../../public/images/tasks/test.svg";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Check from "@mui/icons-material/Check";
import DoneIcon from "@mui/icons-material/Done";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const defaultUserPoints = 230;

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
];

type propTypes = {
  open: boolean;
  onHandleClose: Function;
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {},
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {},
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {},
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: "100%",
    width: 1,
    border: 0,
    left: 0,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[900],
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 30,
  height: 30,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {}),
  ...(ownerState.completed && {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed && <DoneIcon />}
      {!completed && <LockOutlinedIcon />}
    </ColorlibStepIconRoot>
  );
}

export default function AllLevel({ open, onHandleClose }: propTypes) {
  const [activeLevel, setActiveLevel] = React.useState(2);

  const handleClose = () => onHandleClose();

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

          // maxWidth: "400px",
          bgcolor: "background.paper",
          boxShadow: 24,
          border: 0,
          borderRadius: 2,
          p: 0,

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
            overflowY: "scroll",
            minWidth: "90vw",
            maxWidth: "90vw",
            maxHeight: "90vh",
            py: 2,
            px: 1,
            pb: 3,
          }}
        >
          <IconButton
            onClick={handleClose}
            size="large"
            sx={{
              background: "rgba(0,0,0,0.044)",
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>

          <Stepper
            activeStep={activeLevel}
            orientation="vertical"
            sx={{
              px: 2,
            }}
            connector={<ColorlibConnector />}
          >
            {defaultLevels.map((level, index) => (
              <Step key={`level-${index}`}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Box
                    sx={{
                      // border: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                      }}
                    >
                      Level {index}
                    </Typography>
                    <Typography variant="body2">
                      {level.reachPoint} points
                    </Typography>
                  </Box>
                </StepLabel>
                {!!level.gift && <Box sx={{
                  ml: 4,
                }}>
                    <Typography variant="body2" sx={{
                    color: "secondary.main",
                    verticalAlign: "middle",
                    display: "flex",
                    alignItems: "center",
                  }}> <EmojiEventsOutlinedIcon sx={{
                    mr: 1,
                  }}/> {level.gift}</Typography>
                  
                </Box>}
              </Step>
            ))}
          </Stepper>
          <Box sx={{
            p: 2,
          }}>
            <Typography variant="body2">
            Crowdsource benefits are subject to contributions passing a quality control review
            </Typography>
          </Box>
        </Box>

      </Box>
    </Modal>
  );
}
