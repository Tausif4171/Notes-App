import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Notes({ handleClickOpen, title, desc }) {
  return (
    <Container maxWidth="xs">
      <div style={{}}>
        <h2>Your Notes</h2>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" component="div">
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
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
    </Container>
  );
}
