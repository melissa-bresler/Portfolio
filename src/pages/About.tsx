import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import photo from "../assets/pages/about/about-me-photo.jpg";
import machine from "../assets/pages/about/arcade-machine.png";
import ghost from "../assets/pages/about/ghost.png";
import redGhost from "../assets/pages/about/red-ghost.png";
import greenGhost from "../assets/pages/about/green-ghost.png";
import styles from "../styles/About.module.css";
import PacmanEasterEgg from "../components/PackMan";
import clsx from "clsx";

const About: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check initial theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark =
      storedTheme === "dark" || document.body.classList.contains("dark-mode");

    setDarkMode(isDark);

    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDarkMode(isDark);
  };

  return (
    <div>
      <img
        src={machine}
        alt="arcade machine"
        className={`${styles.static} invert-on-dark`}
      />
      <img
        src={darkMode ? redGhost : ghost}
        alt="red ghost"
        className={clsx(styles.ghost, !darkMode && styles.flipped)}
        style={{
          top: "70vh",
          left: "40vw",
        }}
      />

      <img
        src={darkMode ? greenGhost : ghost}
        alt="green ghost"
        className={styles.ghost}
        style={{
          top: "15vh",
          left: "85vw",
        }}
      />
      <Container sx={{ marginTop: 4 }}>
        <Box sx={{ maxWidth: "60%", margin: "0 auto", padding: 2 }}>
          <img src={photo} alt="portrait" className={styles.image} />
          <Typography
            variant="body1"
            component="div"
            sx={{ lineHeight: 1.8 }}
            align="justify"
          >
            <p>
              I’m a software developer based in the UK with a strong interest in
              game development. Outside of my day job, I’ve been teaching myself
              how to design and build games—starting with small side projects
              and gradually picking up the skills involved along the way.
            </p>
            <p>
              This site is where I share what I’ve worked on so far. It’s a mix
              of finished games and work in progress, along with some notes on
              how things are going. I enjoy experimenting with mechanics,
              exploring new tools, and figuring out how to make something that’s
              fun to play.
            </p>
            <p>
              It’s an ongoing process, but one I really enjoy and want to keep
              building on. Thanks for taking a look.
            </p>
          </Typography>
        </Box>
      </Container>
      {/* Used https://picsvg.com to get svg file from img */}
      {/* Used https://yqnn.github.io/svg-path-editor/ for the svg path edit */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none", // So clicks pass through unless you want to catch clicks inside Pacman
          zIndex: 9999, // Ensure it’s on top
        }}
      >
        <PacmanEasterEgg onPacmanClick={toggleDarkMode} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default About;
