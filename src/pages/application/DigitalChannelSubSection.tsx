import { Box, Typography } from "@mui/material";
import React from "react";
import DigitalChannelSub from "./_components/DigitalChannelSub";

function DigitalChannelSubSection() {
  return (
    <Box minHeight="100vh" justifyContent="center" alignItems="center">
      <Typography variant="body1" component="p">
        Digital Channel Subscribe
      </Typography>
      <DigitalChannelSub />
    </Box>
  );
}

export default DigitalChannelSubSection;
