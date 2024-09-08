import { Box, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

interface IInputTextProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  errorMsg?: string;
  required?: boolean;
  disabled?: boolean;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  fullWidth: true;
}

function InputText({
  handleChange,
  id,
  name,
  value,
  disabled = false,
  errorMsg = "",
  label,
  placeholder,
  required = false,
  type = "text",
  fullWidth = true,
}: IInputTextProps) {
  return (
    <>
      <TextField
        required={required}
        id={id}
        label={label}
        variant="outlined"
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        disabled={disabled}
        error={!!errorMsg}
      />
      {errorMsg && <Box color={"red"}>{errorMsg}</Box>}
    </>
  );
}

export default InputText;
