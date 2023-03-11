import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Auth from '../pages/Auth/Auth'
import Home from '../pages/Home/Home'
import ListeArticles from '../pages/ListeArticles/ListeArticles'
import Profil from '../pages/Profil/Profil'

export default function Main() {
  return (
    <div>       
        <Home />
    </div>
  )
}
