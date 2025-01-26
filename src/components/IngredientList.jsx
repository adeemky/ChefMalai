import React from "react";
import "./IngredientList.css"

function IngredientList(props) {
  return (
    <section className="ingredients-section">
      <div>
        <h2>Ingredients on hand:</h2>
        <ol className="ingredients-list">
          {props.ingredients.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default IngredientList;
