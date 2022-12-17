import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import EditModal from "./components/EditModal";

function App() {
  return (
    <div className="App">
      <EditModal />
      <Navbar />
      <Form />
      <Notes />
    </div>
  );
}

export default App;
