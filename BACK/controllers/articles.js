import token from "../libs/token.js";
import  User  from "../models/user.js";
import mongoose from "mongoose";

export async function getArticle(req, rep) {
	const authorization = req.headers.authorization;

	token.verifyToken(authorization, async (err, payload) => {
		if (err) {
			rep.status(401).json({ message: "Token invalid" });
			return;
		}
		const user = await User.findById(payload.id);
		//console.log(data.User)
		rep.status(200).json({ user: {email: user.email, article:user.articles} });
	});
}
 export async function addArticle(req, rep) {
	const authorization = req.headers.authorization;

	token.verifyToken(authorization, async (err, payload) => {

    if(err){
      rep.status(401).json({message:"Token invalid!"})
      return;
    }
		const { title, content,image } = req.body;

		const user = await User.findById(payload.id);

		user.articles.push({ title: title, content: content,image: image, date: Date.now() });

		user.save();

		rep.status(200).json({ user: {email: user.email, article:user.articles} });
	});
 }

 export async function deleteArticle(req, rep) {

 }

 export async function updateArticle(req, rep){

 }
