import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DigitalChannelSub from "./_components/DigitalChannelSub";

function DigitalChannelSubSection() {
  return (
    <Box minHeight="100vh" justifyContent="center" alignItems="center">
      <DigitalChannelSub />
    </Box>
  );
}

export default DigitalChannelSubSection;
