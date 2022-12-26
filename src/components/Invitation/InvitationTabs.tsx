import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InviteCode from "./InviteCode"
import YourInviteCode from "./YourInviteCode"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InvitationTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider', bgcolor: "rgb(232,240,254)" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<Typography variant="body2" component="h2" sx={{
            color: "default",
            textTransform: "none",
            fontWeight: 500,
          }}>
            Invite code
          </Typography>} {...a11yProps(0)} sx={{
            width: "50%",
          }}/>
          <Tab label={<Typography variant="body2" component="h2" sx={{
            color: "default",
            textTransform: "none",
            fontWeight: 500,
          }}>
            Your code
          </Typography>} {...a11yProps(1)} sx={{
            width: "50%",
          }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InviteCode />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <YourInviteCode />
      </TabPanel>
     
    </Box>
  );
}