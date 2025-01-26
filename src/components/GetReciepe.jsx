import React from "react";
import "./GetReciepe.css"

function GetReciepe(props) {
  return (
    <div className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button
        onClick={props.handleClick}
        disabled={props.ingredients.length < 4}
        className="recipe-button"
      >
        Get a recipe
      </button>
    </div>
  );
}

export default GetReciepe;
