import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Container, Typography } from "@mui/material";
import { CustomerInfoSection } from "./CustomerInfoSection";
import DigitalChannelSubSection from "./DigitalChannelSubSection";
import BoundryBox from "./_components/BoundryBox";

export const ApplicationForm: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4, lg: 3 }} bgcolor="lightgray">
        <Typography variant="body2" component="p">
          Left Section
        </Typography>
      </Grid>

      <Grid paddingY={3} size={{ xs: 12, md: 8, lg: 9 }}>
        <Container>
          <Box
            component={"div"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <BoundryBox>
              <CustomerInfoSection />
            </BoundryBox>
            <BoundryBox>
              <DigitalChannelSubSection />
            </BoundryBox>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
