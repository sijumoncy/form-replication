import { Box } from "@mui/material";
import React from "react";
import CustomerInfo from "./_components/CustomerInfo";

export const CustomerInfoSection: React.FC = () => {
  return (
    <Box minHeight="10vh" justifyContent="center" alignItems="center">
      <CustomerInfo />
    </Box>
  );
};
