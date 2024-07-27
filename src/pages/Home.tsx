// src/pages/Home.tsx
import React from "react";
import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        This is the home page. Navigate through the site to learn more about me
        and my work.
      </Typography>
    </Container>
  );
};

export default Home;
