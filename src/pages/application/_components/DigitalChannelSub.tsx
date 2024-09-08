import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import SectionHead from "../../../shared/components/Typography/SectionHead";
import { findObjectByKey } from "../../../utils/helpers";
import Grid from "@mui/material/Grid2";
import InputText from "../../../shared/components/Input/InputText";
import { setDigitalChannelSliceField } from "../../../store/digitalChannelSub";

function DigitalChannelSub() {
  const { error, loading, sitecoredata } = useAppSelector(
    (state) => state.data
  );

  const dispatch = useAppDispatch();
  // console.log("data =====> ", sitecoredata);

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

  // TODO : update the Slice with the section data
  useEffect(() => {
    if (sectionData) {
      Object.entries(sectionData).forEach(([key, value]) => {
        //TODO : Here all key values will be set . Need to filter only required field keys
        dispatch(
          setDigitalChannelSliceField({
            fiieldName: key, // TODO :name is empty in many fields
            value: value,
          })
        );
      });
    }
  }, [sectionData, dispatch]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error Loading Contnet.</>;
  }

  return (
    <Grid container spacing={3}>
      {sectionData?.fields?.map((field, index) => (
        <Grid
          size={{ xs: 12 / sectionData.columnsPerRow }}
          key={field?.id || index}
        >
          <Field field={field} />
        </Grid>
      ))}

      {sectionData?.fieldGroup?.map((group, index) => (
        <Grid
          size={{ xs: 12 / sectionData.columnsPerRow }}
          key={group.id || index}
        >
          <FieldGroup group={group} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DigitalChannelSub;

const FieldGroup = ({ group }) => {
  return (
    <Grid container spacing={2}>
      {group.fields.map((field, index) => (
        <Grid
          size={{
            xs: field?.columnWidth?.xs || 12,
            md: field?.columnWidth?.md || 12,
            lg: field?.columnWidth?.lg || 12,
          }}
          key={field.id || index}
        >
          <Field field={field} />
        </Grid>
      ))}

      {group.fieldSubGroup &&
        group.fieldSubGroup.map((subGroup, index) => (
          <Grid size={{ xs: 12 }} key={subGroup.id || index}>
            <FieldGroup group={subGroup} />
          </Grid>
        ))}
    </Grid>
  );
};

const Field = ({ field }) => {
  const dispatch = useAppDispatch();

  const value = useAppSelector((state) => state.digitalChannelSub[field.id]);

  const handleChange = (event) => {
    dispatch(
      setDigitalChannelSliceField({
        fiieldName: field.id, // TODO :name is empty in many fields
        value: event.target.value,
      })
    );
  };

  switch (field.type) {
    case "text":
    case "email":
    case "tel":
      return (
        <InputText
          id={field.id}
          name={field.name}
          disabled={field.disabled}
          value={value || ""}
          handleChange={(e) => handleChange(e)}
          fullWidth={true}
          label={field.label}
        />
      );
    case "radio":
      return (
        <FormControl component="fieldset">
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <FormLabel component="legend">{field.label}</FormLabel>
            <RadioGroup
              aria-label={field.id}
              name={field.id}
              value={value}
              onChange={handleChange}
            >
              <Box display={"flex"} gap={2}>
                {field.options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.value}
                    control={<Radio />}
                    label={option.text}
                  />
                ))}
              </Box>
            </RadioGroup>
          </Box>
        </FormControl>
      );
    // TODO : Need to add more input types
    default:
      return null;
  }
};
