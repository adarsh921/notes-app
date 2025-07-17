import katex from "katex";
import "katex/dist/katex.min.css";
const Preview = ({ noteText }) => {
  const renderLatex = (input) => {
    try {
      return katex.renderToString(input, {
        throwOnError: false,
        displayMode: true,
      });
    } catch (error) {
      return `Invalid latex`;
    }
  };
  return (
    <>
      <h1>PREVIEW</h1>
      <p
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          minHeight: "300px",
        }}
        dangerouslySetInnerHTML={{ __html: renderLatex(noteText) }}
      ></p>
    </>
  );
};

export default Preview;
