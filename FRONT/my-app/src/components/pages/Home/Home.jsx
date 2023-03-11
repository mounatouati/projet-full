import React, { useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Auth from '../Auth/Auth'
import ListeArticles from '../ListeArticles/ListeArticles';


export default function Home() {
    
const {user} = useContext(UserContext);
  return (
    <div>   
        {user === null ? <Auth /> : <ListeArticles/>}
    </div>
  )
}
