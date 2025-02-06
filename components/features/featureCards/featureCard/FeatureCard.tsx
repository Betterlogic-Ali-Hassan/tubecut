import React from "react";
import styles from "./featureCard.module.css";
interface Props {
  featureCardData: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}
const FeatureCard = ({ featureCardData }: Props) => {
  const { title, description, icon } = featureCardData;
  return (
    <div className={styles.card}>
      <div>{icon}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
