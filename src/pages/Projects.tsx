// src/pages/Projects.tsx
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Projects: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {/* Example Project Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Project Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A brief description of the project.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#" target="_blank">
                View Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
