import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Game1: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Project Title
      </Typography>
      <Typography variant="body1" paragraph>
        This is the detailed description of the project. Here you can explain
        what the project is about, the technologies used, and any other relevant
        information.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ marginTop: 2 }}>
        Back to Home
      </Button>
    </Container>
  );
};

export default Game1;
