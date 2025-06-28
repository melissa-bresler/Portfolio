import React from "react";
import styles from "../../../styles/GamePreviewCard.module.css";
import { Game } from "./GameCarousel";
import CustomButton from "../../CustomButton";

const GamePreviewCard: React.FC<Game> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <div className={styles.card}>
      {/* <div className={`${styles.card} ${enlarged ? styles.enlarged : ""}`}> */}
      {image && (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={title}
            className={`${styles.image} invert-on-dark`}
          />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.button}>
          <CustomButton to={link}>View Game</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default GamePreviewCard;
