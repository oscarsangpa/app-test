import express from "express";

import { createUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/login", createUser);

export { router as userRouter };
