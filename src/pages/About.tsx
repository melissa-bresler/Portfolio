import React from "react";
import { Container, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Hi, I’m [Your Name], a [Your Profession] based in [Your Location]. I
        specialize in [Your Specialization].
      </Typography>
    </Container>
  );
};

export default About;
