const Toolbar = ({ setNoteText, textareaRef }) => {
  const symbols = [
    { label: "∑", latex: "\\sum" },
    { label: "∫", latex: "\\int" },
    { label: "√", latex: "\\sqrt{}" },
    { label: "π", latex: "\\pi" },
    { label: "H₂O", latex: "H_2O" },
    { label: "CO₂", latex: "CO_2" },
    { label: "→", latex: "\\rightarrow" },
    { label: "⇌", latex: "\\rightleftharpoons" },
    { label: "lim", latex: "\\lim_{x \\to \\infty}" },
    {
      label: "Matrix",
      latex: "\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}",
    },
    { label: "Fraction", latex: "\\frac{}{}" },
  ];

  const insertAtCursor = (latexCode) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    const updatedValue = value.slice(0, start) + latexCode + value.slice(end);

    setNoteText(updatedValue);

    // Set cursor after inserted latex
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd =
        start + latexCode.length;
    }, 0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      {symbols.map((symbol) => (
        <button
          key={symbol.label}
          onClick={() => insertAtCursor(symbol.latex)}
          style={{
            padding: "0.4rem 0.7rem",
            fontSize: "1.1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            background: "#f9f9f9",
            cursor: "pointer",
          }}
          title={symbol.latex}
        >
          {symbol.label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
