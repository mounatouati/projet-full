import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
	title: String,
	content: String,
    image:String,
},
{timestamps: true}
);

//Schema: reprentation des données dans la base donnée
const userSchema = new mongoose.Schema({
    username: { type: String },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
    avatar:{type: String},
	articles: [articleSchema],
});
const User = mongoose.model('Users', userSchema);

export default  User;