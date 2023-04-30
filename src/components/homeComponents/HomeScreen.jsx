import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";

import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    });
  };

  const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe} key={recipe.recipe_id}/>
    })
  

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <div className={styles.searchDiv}>
        <span className={styles.searchBar}>
          <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
            type="text"
            placeholder="Search for a Recipe"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.recipeCards}>
        {recipes ? recipeDisplay : ''}
      </div>
    </div>
  );
};

export default HomeScreen;
