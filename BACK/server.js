import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { usersRouter } from "./routes/user.js";
import { articleRouter } from "./routes/articles.js";



const port = 3001;
const mongoUrl = "mongodb://127.0.0.1:27017/projet" // url de base de données 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(morgan("combined")); 
app.use(express.static("public"));


app.use("/user", usersRouter);
app.use("/article", articleRouter);
app.listen(port, () => { console.log(`serveur lancé sur le prt ${port}`); })

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((data) => {
      console.log("connected to db");
     
   })
   .catch((err) => {
      console.log("not connected to bd");
      console.log(err)
   })
