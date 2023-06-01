import express from "express";

import { loginUser, registerUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

export { router as userRouter };
