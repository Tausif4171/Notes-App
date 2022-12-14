import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function Form() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          //   display: "flex",
          //   alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
        // style={{ justifyContent: "center" }}
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
        <Button variant="contained">Add</Button>
      </Box>
      {/* <h3>Description</h3>
      <TextareaAutosize /> */}
    </Container>
  );
}
