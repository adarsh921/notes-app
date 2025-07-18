import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Toolbar from "./components/Toolbar";
import "katex/dist/katex.min.css";
import axios from "axios";
import katex from "katex";

function App() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const textareaRef = useRef(null);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100vh",
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/notes`,
        {
          title: "My Note",
          content: noteText,
        }
      );
      alert("Note saved!");
      fetchNotes();
    } catch (error) {
      console.error("Error saving note:", err);
      alert("Failed to save note.");
    }
  };

  async function fetchNotes() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
          <h2>Saved Notes</h2>
          <ul>
            {notes.map((note) => (
              <li key={note._id}>
                <strong>{note.title}</strong>
                <p
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(note.content, {
                      throwOnError: false,
                      displayMode: true,
                    }),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
