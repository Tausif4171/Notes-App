import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import EditModal from "./components/EditModal";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function App() {
  const [title, setTitle] = useState("");
  console.log({ title });
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  console.log({ notes });

  return (
    <div className="App">
      <Navbar />
      <Form
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        notes={notes}
        setNotes={setNotes}
      />
      {notes.length === 0 ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Message
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No notes are available for reading!
            </Typography>
          </CardContent>
        </Card>
      ) : (
        notes.map((note) => {
          return <Notes note={note} key={note.id} />;
        })
      )}

      <EditModal />
    </div>
  );
}

export default App;
