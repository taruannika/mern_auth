import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth/", authRoutes);

// connect to mongo DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((error) => console.log("Error connecting to DB", error));

// start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
