import React from "react";
import ReactMarkdown from "react-markdown";
import "./Recipe.css";

function Recipe(props) {
  return (
    <section className="recommandation-section" aria-live="polite" >
        <h2>Chef Malai Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}

export default Recipe;
