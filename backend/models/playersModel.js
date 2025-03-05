import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  key: { type: Number, required: true },
  playerName: { type: String, required: true },
  playerType: { type: String, default: "N/A" },
  age: { type: Number, required: true },
  basePrice: { type: Number, required: true },
  battingStyle: { type: String, default: "N/A" },
  bowlingStyle: { type: String, default: "N/A" },
  originTeam: { type: String, required: true },
  previousTournament: { type: String, required: true },
  profilePicture: { type: String },
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
// Default export (use this if importing with `import Player from '...'`)
// export default mongoose.model("Player", playerSchema);
