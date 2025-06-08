import React from "react";
import styles from "../styles/GameCarousel.module.css";
import { GamePreviewCard } from "./GamePreviewCard";

export const GameCarousel: React.FC = () => {
  // TODO: Add images for preview cards
  const games = [
    {
      title: "Adventure.exe",
      description:
        "Dive into 90s nostalgia with this 2D retro game. Type your way through a choose-your-own-adventure story on an old-school terminal. Make choices, collect items, and experience a classic adventure!",
      link: "/adventureExe",
      // image: "/images/game1.jpg",
    },
    {
      title: "Memory Meltdown",
      description:
        "Co-developed by James Watson, Joao Tiago Da Silva Figueira, and myself, Memory Master is a mobile game that tests your memorization skills through three fun mini-games.",
      link: "/memory-meltdown",
      // image: "/images/game2.jpg",
    },
    {
      title: "Kaax's Dawn",
      description:
        "Explore a vibrant 3D world in this adventure game prototype, blending light combat, exploration, and charm—fun for all ages and inspired by games like Stray and Breath of the Wild.",
      link: "/kaaxs-dawn",
      // image: "/images/game3.jpg",
    },
  ];

  const loopedGames = [...games, ...games];

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {loopedGames.map((game, index) => (
          <GamePreviewCard
            key={index}
            title={game.title}
            description={game.description}
            link={game.link}
            // image={game.image}
          />
        ))}
      </div>
    </div>
  );
};
