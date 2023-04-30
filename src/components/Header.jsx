import React from "react";
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Devmountain Eatery</h2>
      <nav>
          <button><Link to="/" className={styles.link}>Home</Link></button>
          <button><Link to="/newRecipe"className={styles.link}>Add Recipe</Link></button>
      </nav>
    </header>
  );
};

export default Header;
