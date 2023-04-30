import React from "react";

import styles from './InstructionsCard.module.css'

function InstructionsCard({instructions}) {

 const instructionsParsed = instructions ? JSON.parse(instructions) : ''

  return (
    <div className={styles.card}>
      <h2>Instructions</h2>
      <div>
        <p>
         {instructionsParsed}
        </p>
      </div>
    </div>
  );
}

export default InstructionsCard;
