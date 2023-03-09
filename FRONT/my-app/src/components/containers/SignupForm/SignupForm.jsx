import React, { useState } from "react";

export default function SignupForm() {

    const [usernameInput, setUsername] = useState("")
    const [emailInput, setEmail] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [confirmPasswordInput, setConfirmPassword] = useState("");
    const [signupMessage, setSignupMessage] = useState("");

    function handleUsername(e) {

        setUsername(e.target.value);
    }
    function handleEmail(e) {

        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    async function signup(e) {

        e.preventDefault();

        setSignupMessage("connecter à la base de données !");
    }

    return (
        <div style={{ backgroundColor: "gray", margin: "1em", padding: "1em" }}> 
            <h2>Inscription</h2>
            <p>{emailInput}</p>
            <form>
                <input
                   
                    placeholder="Username"
                    value={usernameInput}
                    onChange={handleUsername}
                />
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
                <input
                   
                    placeholder="Confirmez le mot de passe"
                    type="password"
                    value={confirmPasswordInput}
                    onChange={handleConfirmPassword}
                />
                <button onClick={signup}>Valider</button>
                <p>{signupMessage}</p>
            </form>
        </div>
    );
}