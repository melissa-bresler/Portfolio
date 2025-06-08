import React from "react";
import styles from "../styles/GamePreviewCard.module.css";

interface GameCardPreviewProps {
  title: string;
  description: string;
  link: string;
  image?: string;
}

export const GamePreviewCard: React.FC<GameCardPreviewProps> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} className={styles.button}>
          View Game
        </a>
      </div>
    </div>
  );
};
