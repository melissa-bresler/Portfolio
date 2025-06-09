import React from "react";
import { Container, Typography, Box } from "@mui/material";
import photo from "../assets/about-me-photo.jpg";
import machine from "../assets/arcade-machine.png";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <div>
      <img src={machine} alt="arcade machine" className={styles.static} />
      <Container sx={{ marginTop: 4 }}>
        <Box sx={{ maxWidth: "60%", margin: "0 auto", padding: 2 }}>
          <img src={photo} alt="photo" className={styles.image} />
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
    </div>
  );
};

export default About;
