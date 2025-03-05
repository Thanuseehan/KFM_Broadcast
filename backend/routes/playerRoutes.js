const express = require("express");
const Player = require("../models/Player");

const router = express.Router();

// Add a new player
router.post("/", async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json({ message: "Error adding player", error });
  }
});

// Get all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Error fetching players", error });
  }
});

// Delete a player
router.delete("/:id", async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id);
    res.json({ message: "Player deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting player", error });
  }
});

module.exports = router;
