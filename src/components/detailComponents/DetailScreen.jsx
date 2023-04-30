import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./DetailScreen.module.css";
import IngredientsCard from "./IngredientsCard";
import InstructionsCard from "./InstructionsCard";

import salmon from "../../assets/salmon.jpg";

const DetailScreen = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  const details = {
    prep: recipe.prep_time,
    cook: recipe.cook_time,
    serves: recipe.serves,
    ingredients: recipe.ingredients,
  };

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, [id]);

  return (
    <>
      <div
        style={{
          background: `linear-gradient(
            190deg, 
            rgba(0, 0, 0, 0.8), 
            rgba(0, 0, 0, 0.8)), 
            url(${recipe.image_url}) no-repeat center center / cover`,
        }}
        className={styles.detailTitle}
      >
        <h1>{recipe.recipe_name}</h1>
      </div>
      <div className={styles.cards}>
        <IngredientsCard details={details} />
        <InstructionsCard instructions={recipe.instructions} />
      </div>
    </>
  );
};

export default DetailScreen;
