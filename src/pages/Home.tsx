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
      {/* TODO: Make these into their own component (starting from line 30 to 65 i.e. each Grid item) to minimize duplicated code */}
      {/* TODO: Should have fixed height as tthe boxes are currently different sizes based on the amount of text in them */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
                gutterBottom
              >
                Adventure.exe
              </Typography>
              {/* TODO: Add Preview of some kind here i.e. image */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify" }}
              >
                Dive into 90s nostalgia with this 2D retro game. Type your way
                through a choose-your-own-adventure story on an old-school
                terminal. Make choices, collect items, and experience a classic
                adventure!
              </Typography>
            </CardContent>
            <CardActions>
              {/* TODO: On hover button turns white, either stop this or change the style */}
              <Button
                size="small"
                component={Link}
                to="/adventureExe"
                sx={{ color: "white", background: "black" }}
              >
                View Game
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
                gutterBottom
              >
                Memory Meltdown
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify" }}
              >
                Co-developed by James Watson, Joao Tiago Da Silva Figueira, and
                myself, Memory Master is a mobile game that tests your
                memorization skills through three fun mini-games.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                component={Link}
                to="/memory-meltdown"
                sx={{ color: "white", background: "black" }}
              >
                View Game
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
                gutterBottom
              >
                Kaax's Dawn
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify" }}
              >
                Explore a vibrant 3D world in this adventure game prototype,
                blending light combat, exploration, and charm—fun for all ages
                and inspired by games like Stray and Breath of the Wild.
              </Typography>
            </CardContent>
            <CardActions>
              {/*  */}
              <Button
                size="small"
                component={Link}
                to="/kaaxs-dawn"
                sx={{ color: "white", background: "black" }}
              >
                View Game
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
