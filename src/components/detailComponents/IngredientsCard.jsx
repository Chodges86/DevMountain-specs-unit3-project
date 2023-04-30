import React from "react";

import styles from './IngredientsCard.module.css'

function IngredientsCard({details}) {

  const {prep, cook, serves, ingredients} = details
  const ingredientItems = ingredients ? 
  ingredients.map((ing) => {
    return <h4 key={ing.ingredient_id}>{ing.quantity} {ing.ingredient}</h4>
  })
  :
  ''

  return (
    <div className={styles.card}>
      <h2>Recipe</h2>
      <div>
      <h4>{`Prep Time: ${prep}`}</h4>
      <h4>{`Cook Time: ${cook}`}</h4>
      <h4>{`Serves: ${serves}`}</h4>
      </div>
      <br />
      <br />
      <h2>Ingredients</h2>
     <div>
     {ingredientItems}
     </div>
    </div>
  );
}

export default IngredientsCard;
