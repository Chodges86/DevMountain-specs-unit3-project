import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

import styles from "./NewRecipeScreen.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name: name, quantity: quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={styles.formSection}>
      <h1>Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inline}>
              <input
                className={styles.largeInput}
                type="text"
                placeholder="Name"
                name="recipeName"
                value={values.recipeName}
                onChange={handleChange}
              />
              <input
                className={styles.largeInput}
                type="text"
                placeholder="Image URL"
                name="imageURL"
                value={values.imageURL}
                onChange={handleChange}
              />
            </div>
            <div className={styles.radio}>
              <span>
              <input
                    className={styles.radio}
                    type="radio"
                    id="cook"
                    name="type"
                    value="Cook"
                    onChange={handleChange}
                  />
                <label htmlFor="cook">Cook</label>
                <input
                  className={styles.radio}
                  type="radio"
                  id="bake"
                  name="type"
                  value="Bake"
                  onChange={handleChange}
                />
                <label htmlFor="bake">Bake</label>
                <input
                  className={styles.radio}
                  type="radio"
                  id="drink"
                  name="type"
                  value="Drink"
                  onChange={handleChange}
                />
                <label htmlFor="drink">Drink</label>
              </span>
            </div>
            <div className={styles.inline}>
              <input
                className={styles.smallInput}
                type="text"
                placeholder="Prep Time"
                name="prepTime"
                value={values.prepTime}
                onChange={handleChange}
              />
              <input
                className={styles.smallInput}
                type="text"
                placeholder="Cook Time"
                name="cookTime"
                value={values.cookTime}
                onChange={handleChange}
              />
              <input
                className={styles.smallInput}
                type="text"
                placeholder="Serves"
                name="serves"
                value={values.serves}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.inline} ${styles.spaceBetween}`}>
              <div className={styles.column}>
                <input
                  className={styles.largeInput}
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={styles.largeInput}
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>
                {ingredients.map(ing => <li key={`${ing.name} ${ing.quantity}`}>{ing.quantity} {ing.name}</li>)}
              </ul>
            </div>
            <div className={`${styles.column} ${styles.center}`}>
              <button
                type="button"
                onClick={addIngredient}
                className={styles.orangeBtn}
              >
                Add Another
              </button>
              <textarea
                id="instructions"
                cols="50"
                rows="6"
                placeholder="What are the instruction?"
                name="instructions"
                value={values.instructions}
                onChange={handleChange}
              ></textarea>
              <button type="Submit" className={styles.tealBtn}>
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
