import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import EditModal from "./components/EditModal";

function App() {
  const [title, setTitle] = useState("");
  console.log({ title });
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState("");

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
      <Notes title={title} desc={desc} notes={notes} />
      <EditModal />
    </div>
  );
}

export default App;
