import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import BlogEntry from "../../components/BlogEntry";

const AdventureExe: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Adventure.exe
      </Typography>
      <Typography variant="body1" paragraph>
        This is the detailed description of the project. Here you can explain
        what the project is about, the technologies used, and any other relevant
        information.
      </Typography>
      {/* could also use date={new Date(2024, 6, 28)} instead. NOTE: when using Date must subtract 1 from month */}
      <BlogEntry date="2024-07-28" />
      <Button variant="contained" component={Link} to="/" sx={{ marginTop: 2 }}>
        Back to Home
      </Button>
    </Container>
  );
};

export default AdventureExe;
