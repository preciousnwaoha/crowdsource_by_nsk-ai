import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
// import LinearProgress from "@mui/material/LinearProgress"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import levelImage0 from "../../public/images/badges/disabled_level.png";

const defaultValues = {
  level: 0,
  points: 0,
  maxPoints: 3,
  levelImage: levelImage0,
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Level = () => {
  const [progress, setProgress] = React.useState(30);

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        p: 1,
        borderRadius: 2,
        mb: 2,
      }}
    >
      <Link
        href="/achievements"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src={defaultValues.levelImage}
            alt={`level ${defaultValues.level}`}
            width={45}
            height={45}
            sizes="(max-width: 420px) 50px, (max-width: 768px) 50px,
              (max-width: 1200px) 60px,
              60px"
            style={{
                marginRight: "8px"
            }}
          />
          <Box
            sx={{
              width: "100%",
              mr: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "1rem",
                pb: 0.5,
              }}
            >
              Level 0
            </Typography>
            <BorderLinearProgress variant="determinate" value={progress} />
            <Typography variant="body2" sx={{
                p:0,
                m: 0,
                mt: "2px",
                fontSize: "0.75rem",
            }}>{defaultValues.points} / {defaultValues.maxPoints} points</Typography>
          </Box>
          <ChevronRightOutlinedIcon
            color="primary"
            sx={{
              fontSize: "1.75rem",
            }}
          />
        </Box>
      </Link>
    </Paper>
  );
};

export default Level;
