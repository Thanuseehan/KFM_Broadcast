const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  key: { type: Number, required: true, unique: true },
  playerName: { type: String, required: true },
  playerType: { type: String, default: "N/A" },
  age: { type: Number, required: true },
  basePrice: { type: Number, required: true },
  battingStyle: { type: String, default: "N/A" },
  bowlingStyle: { type: String, default: "N/A" },
  originTeam: { type: String },
  previousTournament: { type: String },
  profilePicture: { type: String },
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
