import { Typography } from "@mui/material";
import React from "react";

interface ISectionProps {
  head: string;
  subhead?: string;
}

function SectionHead({ head, subhead }: ISectionProps) {
  return (
    <>
      <Typography variant="h3" component={"h3"} fontSize="1.1rem">
        {head}
      </Typography>
      {subhead && (
        <Typography marginTop={1} variant="body1" component={"p"}>
          {subhead}
        </Typography>
      )}
    </>
  );
}

export default SectionHead;
