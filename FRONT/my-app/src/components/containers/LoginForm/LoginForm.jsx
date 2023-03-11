import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Request } from "../../../utils/requests";
export default function LoginForm() {

	const monContext= useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginMeassage, setloginMeassage] = useState("");

	
	function handleEmail(e) {	
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	async function login(e) {
		
		e.preventDefault();

		const reponseData = await Request.post("/user/login", { email,password });
		
		if (reponseData.status === 200) {
			localStorage.setItem("token", reponseData.data.token);
			setloginMeassage("connexion réussie!");
			console.log(reponseData.data.user)
			monContext.setUser(reponseData.data.user);
			return;
		}

		setloginMeassage("Email ou mot de passe invalides!");
	}
	return (
		<div style={{ backgroundColor: "gray", margin: "1em", padding: "1em" }}>
			<h2>Connexion</h2>
			<form style={{
                width: "100%",
                padding: "5px",
                margin:"1px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }} >	
				<input
					
					placeholder="Email"
					value={email}
					onChange={handleEmail}
				/>
				<input
					
					placeholder="Mot de passe"
					type="password"
					value={password}
					onChange={handlePassword}
				/>
				<button onClick={login}>Valider</button>
				<p>{loginMeassage}</p>
			</form>
		</div>
	);
}