import React from "react";
import FeatureCard from "./featureCard/FeatureCard";
import styles from "./featureCards.module.css";
import { featuresData } from "@/constant/features";

const FeatureCards = () => {
  return (
    <div className={styles.cards}>
      {featuresData.map((card, i) => (
        <FeatureCard key={i} featureCardData={card} />
      ))}
    </div>
  );
};

export default FeatureCards;
