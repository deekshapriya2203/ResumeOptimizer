import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

// CORS for frontend
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test server
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
