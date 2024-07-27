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
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        This is the home page. Use the dropdown under "Home" in the navigation
        bar to access different sections.
      </Typography>

      <Typography variant="h4" sx={{ marginTop: 4 }} gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {/* Example Project Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Project 1 Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A brief description of Project 1.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/game">
                View Project
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Project 2 Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A brief description of Project 2.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/game">
                View Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
