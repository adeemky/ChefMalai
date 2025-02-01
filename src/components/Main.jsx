import React, { useState, useRef, useEffect } from "react";
import Intro from "./Intro";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";
import GetReciepe from "./GetReciepe";
import { getRecipeFromChefMalai } from "../ai";
import "./Main.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  })

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefMalai(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients([...ingredients, newIngredient]);
  }

  return (
    <main>
    <Intro />
      <div className="add-ingredient-container">
        <form action={addIngredient} className="add-ingredient-form">
          <div className="input-container">
            <input
              aria-label="Add Ingredient"
              placeholder="e.g. potato"
              type="text"
              name="ingredient"
            />
            <p>Add at least 4 ingredients to get a recipe</p>
          </div>
          <button>add ingredient</button>
        </form>

        {ingredients.length > 0 && <IngredientList ingredients={ingredients} />}
      </div>

      <GetReciepe ref={recipeSection} handleClick={getRecipe} ingredients={ingredients} />

      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}

export default Main;
