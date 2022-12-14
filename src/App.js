import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Notes />
    </div>
  );
}

export default App;
