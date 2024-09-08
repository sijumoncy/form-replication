import { Box } from "@mui/material";
import React from "react";

function BoundryBox({ children }: { children: React.ReactNode }) {
  return (
    <Box border={1} borderColor={"lightgray"} padding={1} borderRadius={2}>
      {children}
    </Box>
  );
}

export default BoundryBox;
