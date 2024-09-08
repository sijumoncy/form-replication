import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Container, Typography } from "@mui/material";
import DigitalChannelSubSection from "./DigitalChannelSubSection";
import { CustomerInfoSection } from "./CustomerInfoSection";
import BoundryBox from "./_components/BoundryBox";

export const ApplicationForm: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12, md: 4, lg: 3 }} bgcolor="lightgray">
        <Typography variant="body2" component="p">
          Left Section
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 8, lg: 9 }}>
        <Container>
          <Box display={"flex"} gap={2} flexDirection={"column"} my={2}>
            <BoundryBox active={false}>
              <CustomerInfoSection />
            </BoundryBox>
            <BoundryBox active={true}>
              <DigitalChannelSubSection />
            </BoundryBox>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
