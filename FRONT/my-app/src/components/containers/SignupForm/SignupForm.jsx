import React, { useContext, useState } from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from "../../contexts/UserContext";
export default function SignupForm() {

    
	//const monContext = useContext(UserContext);
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
        
        if (emailInput.includes('@') && passwordInput.length >= 6 && passwordInput === confirmPasswordInput) {
            console.log("test")

            let data = await Request.post("/user/signup", {
                username: usernameInput,
                email: emailInput,
                password: passwordInput,
            });
            const leStatus = data.status;
            console.log(data);
            if (leStatus === 401) {
                setSignupMessage("Votre email existe, connectez-vous!");
                return;
            }
            //monContext.setUser(data.data.user);
            setSignupMessage("Inscription réussie!");
        }
        if (!emailInput.includes('@')) {
            setSignupMessage('Email incorrecte');
        }
        if (passwordInput.length < 6) {
            setSignupMessage("Password Incorrecte :  Minimum 6 caractère");
        }
        if (passwordInput !== confirmPasswordInput) {
            setSignupMessage("mot de passe n'est pas identique");
        }
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