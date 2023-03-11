
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Request } from "../../../utils/requests";
export default function LogOut() {
    const monContext= useContext(UserContext);
    const [loginMeassage, setloginMeassage] = useState("");
    
    
    async function logout(e) {
        e.preventDefault();
     //   const reponseData = await Request.post("/user/login", { email,password });
        //     localStorage.removeItem("tocken");
        //    localStorage.removeItem("username");
        //    localStorage.removeItem("password");
        //     monContext.setUser(null);
        //     setloginMeassage("vous êtes déconnecter ");
        //     return;
        // }
		
			return;}
  return (
    <div>
        <button onClick={logout}> Deconnecter </button>
        <p>{loginMeassage}</p>
    </div>
  )
}
