import express from "express";
import { addArticle,  deleteArticle,  getArticle,  updateArticle } from "../controllers/articles.js";

export const articleRouter = express.Router();

//articleRouter.get("/", getArticle);

articleRouter.post("/add", addArticle);

articleRouter.delete("/:id", deleteArticle);

articleRouter.put("/:id", updateArticle);
