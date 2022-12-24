import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { taskType, tasks, ConvertTaskTypeToCode } from "../../../lib/tasks";
import {
  getUsersContributingToCode,
  userContributionType,
  userBadgeType,
  contributedUserType,
} from "../../../lib/users";
import TaskIcon from "../Tasks/TaskIcon";
import LeaderboardList from "./LeaderboardList";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      marginTop: "8px",
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type propTypes = {
  task: taskType;
};

const LeaderboardListWrapper = ({ task }: propTypes) => {
  const theme = useTheme();
  const [taskName, setTaskName] = React.useState<string[]>([task.link]);
  const [loading, setLoading] = React.useState(false);
  const [boardList, setBoardList] = React.useState<contributedUserType[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof taskName>) => {
    const {
      target: { value },
    } = event;
    setTaskName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  React.useEffect(() => {
    setLoading(true);

    const taskLink = taskName[0];

    const taskCode = ConvertTaskTypeToCode(taskLink);

    setBoardList(getUsersContributingToCode(taskCode));
    setLoading(false);
  }, [task, taskName]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <LeaderboardList usersList={boardList} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          bgcolor: "background.paper",
          p: 2,
        }}
      >
        <FormControl
          sx={{
            width: "100%",
          }}
        >
          <InputLabel id="demo-multiple-name-label">Top 100 leaders</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            displayEmpty
            value={taskName}
            onChange={handleChange}
            input={<OutlinedInput label="Top 100 leaders" />}
            MenuProps={MenuProps}
            sx={{
              borderRadius: 2,
            }}
          >
            {tasks.map((task) => (
              <MenuItem
                key={task.name}
                value={task.link}
                style={getStyles(task.name, taskName, theme)}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <TaskIcon taskId={task.link} />
                  <Typography
                    sx={{
                      ml: 1,
                    }}
                  >
                    {task.name}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Paper
        variant="elevation"
        elevation={4}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          p: 2,
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{
          mr: 1
        }}/>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            No rank to show
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
            }}
          >
            Make a contribution to see rank
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LeaderboardListWrapper;
