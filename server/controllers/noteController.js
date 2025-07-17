import Note from "../models/Note.js";

// GET /api/notes → Get all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

// GET /api/notes/:id → Get a specific note
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "Error fetching note" });
  }
};

// POST /api/notes → Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ error: "Error creating note" });
  }
};

// PUT /api/notes/:id → Update a note
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) return res.status(404).json({ error: "Note not found" });
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ error: "Error updating note" });
  }
};

// DELETE /api/notes/:id → Delete a note
export const deleteNote = async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Note not found" });
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting note" });
  }
};
