import React from "react";
import GameCarousel from "../components/GameCarousel";
import styles from "../styles/Home.module.css";
import aeLogo from "../assets/ae-logo.png";
import mmLogo from "../assets/mm-logo.png";
import kdLogo from "../assets/kd-logo.png";

const Home: React.FC = () => {
  const games = [
    {
      title: "Adventure.exe",
      description:
        "Dive into 90s nostalgia with this 2D retro game. Type your way through a choose-your-own-adventure story on an old-school terminal. Make choices, collect items, and experience a classic adventure!",
      link: "/adventureExe",
      image: aeLogo,
    },
    {
      title: "Memory Meltdown",
      description:
        "Co-developed by James Watson, Joao Tiago Da Silva Figueira, and myself, Memory Master is a mobile game that tests your memorization skills through three fun mini-games.",
      link: "/memory-meltdown",
      image: mmLogo,
    },
    {
      title: "Kaax's Dawn",
      description:
        "Explore a vibrant 3D world in this adventure game prototype, blending light combat, exploration, and charm—fun for all ages and inspired by games like Stray and Breath of the Wild.",
      link: "/kaaxs-dawn",
      image: kdLogo,
    },
  ];

  return (
    <div className={styles.homeContainer}>
      {/* <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        This is the home page. Use the dropdown under "Home" in the navigation
        bar to access different sections.
      </Typography> */}

      {/* <Typography variant="h4" sx={{ marginTop: 4 }} gutterBottom>
        Games
      </Typography> */}
      <GameCarousel games={games} />
    </div>
  );
};

export default Home;
