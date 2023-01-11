import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Notes from "./Notes";

export default function Form({
  title,
  setTitle,
  desc,
  setDesc,
  notes,
  setNotes,
}) {
  const handleNotes = () => {
    // e.preventDefault();
    if (title !== "" && desc !== "") {
      setNotes((notes) => {
        return [
          ...notes,
          {
            title: title,
            desc: desc,
            id: new Date().getTime(),
          },
        ];
      });
    }
    setTitle("");
    setDesc("");
  };
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
            value={title}
            id="outlined-multiline-static"
            label="Title"
            multiline
            rows={1}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <TextField
            value={desc}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={handleNotes}>
          Add
        </Button>
      </Box>
      {/* <h3>Description</h3>
      <TextareaAutosize /> */}
      {/* <h3>{notes}</h3> */}
      {/* <Notes title={title} /> */}
    </Container>
  );
}
