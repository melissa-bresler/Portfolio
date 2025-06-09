import React, { useEffect, useRef } from "react";
import styles from "../../../styles/GameCarousel.module.css";
import GamePreviewCard from ".//GamePreviewCard";

export interface Game {
  title: string;
  description: string;
  link: string;
  image?: string;
}

export interface CraneOverlayProps {
  games: Game[];
}

// FIXME: After 2 loops there's a gap until the last card reaches halfway and then it loads the the next ones
const GameCarousel: React.FC<CraneOverlayProps> = ({ games }) => {
  const loopedGames = [...games, ...games];

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {loopedGames.map((game, index) => (
          <GamePreviewCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
