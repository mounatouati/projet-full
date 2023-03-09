import React from 'react'
import Home from '../pages/Home/Home'
import { BrowserRouter, Link, NavLink, Route, Routes, nav, useNavigate } from "react-router-dom";
import Profil from '../pages/Profil/Profil';
import Auth from '../pages/Auth/Auth';
import mesclasses from "../Navbar/Navbar.module.css";
import ListeArticles from '../pages/ListeArticles/ListeArticles';
export default function Navbar() {
    return (
        <BrowserRouter>
            <div className={mesclasses.container} >
                <nav >
                    <ul>
                        <li> <Link to="/Home">Accueil</Link></li>
                        <li> <Link to="/Profil">Profil</Link></li>
                        <li> <Link to="/Auth">Connection</Link></li>
                        <li> <Link to="/ListeArticles">Liste Articles</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route exact path="/Home" element={<Home/>}></Route>
                <Route exact path="/Profil" element={<Profil />}> </Route>
                <Route exact path="/Auth" element={<Auth />}> </Route>
                <Route exact path="/ListeArticles" element={<ListeArticles />}> </Route>
            </Routes>

        </BrowserRouter>
    )
}
