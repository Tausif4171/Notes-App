import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EditModal from "../components/EditModal";

const Notes = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  console.log("newDataFromEditModal", newTitle);
  const [right, setRight] = useState(false);
  console.log({ right });
  // const [data, setData] = useState(notes);
  // console.log(props.note);
  const editNotes = (id) => {
    console.log("EditNotes", id);
  };
  const removeNotes = (id) => {
    // console.log({ id });
    const newNotes = props.notes.filter((elem) => {
      if (elem.id !== id) {
        return elem;
      }
    });
    // console.log({ newNotes });
    props.setNotes(newNotes);
  };
  return (
    <Container maxWidth="xs">
      <div style={{}}>
        {/* <h2>Your Notes</h2> */}
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {newTitle ? newTitle : props.note.title}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h5" component="div">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {newDesc ? newDesc : props.note.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                // onClick={props.handleClickOpen}
                onClick={() => {
                  editNotes(props.note.id);
                  setRight(true);
                }}
                size="small"
              >
                Edit
              </Button>
              <Button
                size="small"
                onClick={() => {
                  removeNotes(props.note.id);
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </>
      </div>
      {right ? (
        <EditModal
          right={right}
          setRight={setRight}
          notes={props.notes}
          setNewTitle={setNewTitle}
          setDesc={setNewDesc}
        />
      ) : null}
    </Container>
  );
};
export default Notes;
