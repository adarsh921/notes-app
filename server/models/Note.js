import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled Note",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
