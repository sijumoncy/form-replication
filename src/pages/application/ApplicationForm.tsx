import React from "react";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";
import CustomerInfo from "./_components/CustomerInfo";
import DigitalChannelSub from "./_components/DigitalChannelSub";

export const ApplicationForm: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4, lg: 3 }} bgcolor="lightgray">
        <Typography variant="body2" component="p">
          Left Section
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 8, lg: 9 }}>
        <Container>
          <CustomerInfo />
          <DigitalChannelSub />
        </Container>
      </Grid>
    </Grid>
  );
};
