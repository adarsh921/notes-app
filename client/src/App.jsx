import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Toolbar from "./components/Toolbar";
import "katex/dist/katex.min.css";
import axios from "axios";

function App() {
  const [noteText, setNoteText] = useState("");
  const textareaRef = useRef(null);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100vh",
  };

  const handleSave = () => {
    try {
      const response = axios.post(`${import.meta.env.VITE_API_URL}/notes`, {
        title: "My Note",
        content: noteText,
      });
      alert("Note saved!");
    } catch (error) {
      console.error("Error saving note:", err);
      alert("Failed to save note.");
    }
  };

  return (
    <>
      <div className="container" style={containerStyle}>
        <div className="card">
          <Toolbar setNoteText={setNoteText} textareaRef={textareaRef} />
          <Editor
            noteText={noteText}
            setNoteText={setNoteText}
            textareaRef={textareaRef}
          />
          <button onClick={handleSave} style={{ marginTop: "1rem" }}>
            Save Note
          </button>
        </div>
        <div className="card2">
          <Preview noteText={noteText} />
        </div>
      </div>
    </>
  );
}

export default App;
