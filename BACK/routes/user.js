import express from "express";
import { addUser, loginUser, sercretUser, getUser } from "../controllers/user.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", addUser);

usersRouter.post("/login", loginUser);

usersRouter.get("/secret", sercretUser);

usersRouter.get("/me", getUser);
//usersRouter.post("/loginout", signOut);
