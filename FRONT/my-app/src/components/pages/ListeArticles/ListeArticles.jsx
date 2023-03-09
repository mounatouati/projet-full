import React from 'react'
import  { useState } from "react";
export default function ListeArticles() {
    const [ArticleInput, setArticleInput] = useState("");

    function handleArticle(e){
      setArticleInput(e.target.value)
    }
  
    async function validate(e){
      e.preventDefault();
  
    }
  return (
    <div>
    <form>
      <input onChange={handleArticle} value={ArticleInput} placeholder="Entrez un article" />
      <button onClick={validate}>Ajouter un article </button>
    </form>
  </div>
  )
}

