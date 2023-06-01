import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
