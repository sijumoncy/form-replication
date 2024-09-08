import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../shared/hooks/redux";
import SectionHead from "../../../shared/components/Typography/SectionHead";
import { findObjectByKey } from "../../../utils/helpers";
import Grid from "@mui/material/Grid2";

function DigitalChannelSub() {
  const { error, loading, sitecoredata } = useAppSelector(
    (state) => state.data
  );
  // console.log("data =====> ", sitecoredata);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error Loading Contnet.</>;
  }

  // const sectionData = findObjectByKey(
  //   sitecoredata,
  //   "id",
  //   "digitalChannelSubscription"
  // );

  // TODO :  finObjectByKey - not return data as expect at the momement
  // manual fetch data for now
  const sectionData = sitecoredata["Assisted X"]
    ? sitecoredata["Assisted X"].components[0].container[0].rows[0].columns[1]
        .formGroup[0].formSection[0].formSubSection[1]
    : null;

  console.log("section data ====> ", sectionData);

  return (
    <>
      <Box minHeight="100%" maxWidth={"100%"}>
        <SectionHead head={sectionData?.title || ""} />
        <Box
          marginY={1}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          width={sectionData?.width || "100%"}
          bgcolor={"gray"}
        >
          {/* render fields */}
          {sectionData?.fields && <RenderFields fields={sectionData?.fields} />}

          {/* render fieldGroup */}
          <Box
            // width={`calc(100%/${sectionData?.columnsPerRow})`}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            bgcolor={"orange"}
          >
            {sectionData?.fieldGroup.map((fieldGroup, index) => {
              return (
                <Grid key={fieldGroup?.id} container spacing={2}>
                  <p>----------------------GROUP : {index} -----------------</p>
                  <RenderFields fields={fieldGroup.fields} />
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DigitalChannelSub;

const RenderFields = ({ fields }: { fields: any[] }) => {
  return (
    // <Box
    //   // width={`calc(100%/${sectionData.columnsPerRow})`}
    //   width={"100%"}
    //   style={{ background: "red" }}
    //   display={"flex"}
    //   gap={2}
    // >
    //   {fields.map((field) => {
    //     console.log("Render Fields 77777777 => ", field);

    //     return <RenderField key={field.id} field={field} />;
    //   })}
    // </Box>
    <Grid></Grid>
  );
};

const RenderField = ({ field }: { field: any }) => {
  console.log("field type ===> ", field.type);

  switch (field.type) {
    case "radio":
      return <input type="radio" />;
    case "text":
      return <input type="text" />;
    case "email":
      return <input type="email" />;
    default:
      return null;
  }
};
