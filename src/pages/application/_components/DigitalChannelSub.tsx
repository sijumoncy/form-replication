import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../shared/hooks/redux";

function DigitalChannelSub() {
  // const coreData = useSelector((state: RootState) => state.data);
  const data = useAppSelector((state) => state);

  console.log("core data ==> ", data);

  return (
    <>
      <Box minHeight="100vh" justifyContent="center" alignItems="center">
        <Typography variant="body1" component="p">
          Digital Channel Subscribe
        </Typography>
        <pre></pre>
      </Box>
    </>
  );
}

export default DigitalChannelSub;
