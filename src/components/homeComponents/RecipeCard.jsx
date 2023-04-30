import React from "react";
import { Link } from "react-router-dom";

import styles from './RecipeCard.module.css'

function RecipeCard(props) {
  const {recipe_name, image_url, recipe_id} = props.recipe

  return (
    <Link className={styles.card} to={`/recipe/${recipe_id}`}>
      <div>
        <img
          src={image_url}
          alt=''
        />
      </div>
      <div className={styles.info}>
        <h3>{recipe_name}</h3>
        <button>See More</button>
      </div>
    </Link>
  );
}

export default RecipeCard;
