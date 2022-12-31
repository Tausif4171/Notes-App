import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Notes({ handleClickOpen, title, desc, notes }) {
  return (
    <Container maxWidth="xs">
      {notes.map((notes) => {
        return (
          <div style={{}}>
            <h2>Your Notes</h2>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {notes.title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h5" component="div">
                  Description
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {notes.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClickOpen}
                  size="small"
                >
                  Edit
                </Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </Container>
  );
}
