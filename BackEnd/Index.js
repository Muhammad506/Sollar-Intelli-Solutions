import express from "express";
import connectDB from "./db.js"; 
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
