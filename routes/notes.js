const express = require("express");
const router = express.Router();
const Note = require("../models/Note");


const basicAuthMiddleware = require("../middlewares/basicAuth");
const validationMiddleware = require("../middlewares/validation");

router.use(basicAuthMiddleware);
router.use(validationMiddleware);

// Create Note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Note
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve all Notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error retrieving notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve a Single Note by ID
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error retrieving note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete Note
router.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
