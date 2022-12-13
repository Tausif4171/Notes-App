import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";

export default function Form() {
  return (
    <div>
      <Box
        sx={{
          //   display: "flex",
          //   alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
        style={{ justifyContent: "center" }}
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Title"
            multiline
            rows={1}
            defaultValue="Your title..."
          />
        </div>

        <br />
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Your message..."
          />
        </div>
      </Box>
      {/* <h3>Description</h3>
      <TextareaAutosize /> */}
    </div>
  );
}
