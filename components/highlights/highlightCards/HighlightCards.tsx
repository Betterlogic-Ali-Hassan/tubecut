import React from "react";
import styles from "./highlightCards.module.css";

import HighlightCard from "./highlightCard/HighlighCard";
const HighlightCards = () => {
  return (
    <div className={styles["highlights-container"]}>
      <HighlightCard side='right' />
      <HighlightCard side='left' />
    </div>
  );
};

export default HighlightCards;
