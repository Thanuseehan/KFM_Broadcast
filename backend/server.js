import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
// import { Player } from './models/playersModel.js';

const app = express();
const port = process.env.PORT || 4000;

const startServer = async () => {
  try {
    const { kfmDB } = await connectDB(); // ✅ Await inside async function

    const allowedOrigins = ['http://localhost:5173'];
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({ origin: allowedOrigins, credentials: true }));

    // API Endpoints
    app.get('/', (req, res) => res.send("API Working"));
    app.use('/api/auth', authRouter);
    app.use('/api/user', userRouter);

    app.listen(port, () => console.log(`✅ Server started on PORT: ${port}`));
  } catch (error) {
    console.error("❌ Server Startup Failed:", error.message);
  }
};

// Define playerRouter routes
const playerRouter = express.Router();

// Get all players
playerRouter.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get a player by ID
playerRouter.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Add a new player
playerRouter.post("/", async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).json({ message: "Error adding player", error });
  }
});

// Update a player by ID
playerRouter.put("/:id", async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ message: "Error updating player", error });
  }
});

// Delete a player by ID
playerRouter.delete("/:id", async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Use playerRouter for '/api/players' endpoint
app.use('/api/players', playerRouter);

// Start the server
startServer();
