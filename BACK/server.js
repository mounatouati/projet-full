import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

const port = 3001;
const app = express();

app.listen(port, () => { console.log(`serveur lancé sur le prt ${port}`); })