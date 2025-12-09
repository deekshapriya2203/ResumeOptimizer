import express from "express";
import cors from "cors";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
