import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HelpMatters from "./HelpMatters";

const WhyHelpMatters = () => {
  const [openWhy, setOpenWhy] = React.useState(false);

  return (
    <>
      <Box sx={{
        mb: 2,
      }}>
        <Typography variant="body1" sx={{
            fontWeight: 500,
        }}>
          {" "}
          What would you like to help with?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "primary.main",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => {
            setOpenWhy(true);
          }}
        >
          Learn why help matters
        </Typography>
      </Box>
      <HelpMatters
        open={openWhy}
        onHandleClose={() => {
          setOpenWhy(false);
        }}
      />
    </>
  );
};

export default WhyHelpMatters;
