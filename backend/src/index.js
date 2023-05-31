import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes.js";

const app = express();
app.use(express.json());
dotenv.config();

connectDB();

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
