

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dataRoutes from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cors()); 

app.use(express.json());

app.use("/api/data", dataRoutes);

app.get("/login", (req, res) => {
  res.json({ message: "Login feature coming soon 🚀" });
});


// Database connection
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);