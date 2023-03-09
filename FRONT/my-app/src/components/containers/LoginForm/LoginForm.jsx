import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function LoginForm() {
	const monContext = useContext(UserContext);

	
	const [emailInput, setEmail] = useState("");
	const [passwordInput, setPassword] = useState("");
	const [loginMeassage, setloginMeassage] = useState("");

	
	function handleEmail(e) {
		
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	async function login(e) {
		
		e.preventDefault();

		
		setloginMeassage("connecter a la base de données ");
	}
	return (
		<div style={{ backgroundColor: "gray", margin: "1em", padding: "1em" }}>
			<h2>Connexion</h2>
			<form>
				<input
					
					placeholder="Email"
					value={emailInput}
					onChange={handleEmail}
				/>
				<input
					
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={handlePassword}
				/>
				<button onClick={login}>Valider</button>
				<p>{loginMeassage}</p>
			</form>
		</div>
	);
}