import React, { useState } from 'react'
import Auth from '../Auth/Auth'
import ListeArticles from '../ListeArticles/ListeArticles';


export default function Home() {
    
  const userFromDb = {
    id: 1,
    email: "mouna@",
    username: "mouna",
    avatar: null,
}
const [user, setUser] = useState(null);
  return (
    <div>   
        {user === null ? <Auth /> : <ListeArticles/>}
    </div>
  )
}
