import express from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

// GET all notes
router.get("/", getAllNotes);

// GET a single note by ID
router.get("/:id", getNoteById);

// POST a new note
router.post("/", createNote);

// PUT update note by ID
router.put("/:id", updateNote);

// DELETE a note by ID
router.delete("/:id", deleteNote);

export default router;
