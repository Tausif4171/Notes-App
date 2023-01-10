import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Notes = (props) => {
  // const [data, setData] = useState(notes);
  // console.log(props.note);
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
                {props.note ? props.note.title : null}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h5" component="div">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.note ? props.note.desc : null}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                onClick={props.handleClickOpen}
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
    </Container>
  );
};
export default Notes;
