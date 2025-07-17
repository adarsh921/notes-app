import Preview from "./Preview";

const Editor = ({ noteText, setNoteText, textareaRef }) => {
  const EditorStyle = {
    width: "90%",
    height: "300px",
  };
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  return (
    <textarea
      ref={textareaRef}
      value={noteText}
      onChange={handleChange}
      style={EditorStyle}
    ></textarea>
  );
};

export default Editor;
