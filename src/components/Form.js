import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";

export default function Form() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
        style={{ justifyContent: "center" }}
      >
        <TextField
          helperText="Please enter your title"
          id="demo-helper-text-aligned"
          label="Title"
        />
        <h3>Description</h3>
        <TextareaAutosize />
      </Box>
    </div>
  );
}
