import React from "react";
import styles from "../styles/GamePreviewCard.module.css";
import { Game } from "./GameCarousel";
import { Link } from "react-router-dom";

const GamePreviewCard: React.FC<Game> = ({
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
        <Link to={link} className={styles.button}>
          <button> View Game</button>
        </Link>
      </div>
    </div>
  );
};

export default GamePreviewCard;
