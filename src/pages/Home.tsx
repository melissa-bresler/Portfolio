import React from "react";
import { Container } from "@mui/material";
import { GameCarousel } from "../components/GameCarousel";
import { CraneOverlay } from "../components/CraneOverlay";

const Home: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
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
      <div style={{ position: "relative" }}>
        <GameCarousel />
        <CraneOverlay />
      </div>
    </Container>
  );
};

export default Home;
