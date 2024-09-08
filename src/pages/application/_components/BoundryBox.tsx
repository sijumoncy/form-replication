import { Box } from "@mui/material";
import React from "react";

interface IBoundryBoxProps {
  children: React.ReactNode;
  active: boolean;
}

function BoundryBox({ children, active }: IBoundryBoxProps) {
  return (
    <Box
      border={1}
      borderColor={active ? "blue" : "lightgray"}
      padding={1}
      borderRadius={2}
    >
      {children}
    </Box>
  );
}

export default BoundryBox;
