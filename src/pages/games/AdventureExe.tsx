import React from "react";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import BlogEntry from "../../components/BlogEntry";
import GameBreakdown from "../../components/GameBreakdown";
import conceptArt from "../../assets/adventureExe-concept-art.jpg";
import csharplogo from "../../assets/c-sharp-logo.png";
import unitylogo from "../../assets/unity-logo.png";

const AdventureExe: React.FC = () => {
  const gameDescription =
    "Step back into the nostalgic world of the 90s with Adventure.exe, a 2D game that brings the charm of vintage computers to life. Your journey begins within an old-school display, where a terminal pops up, initiating an enthralling choose-your-own-adventure game. Navigate through the story by typing your decisions, each choice leading to new paths and outcomes. As you progress, immersive pop-ups enhance the experience: inventory windows showcase icons of collected items, and glitchy hearts on the screen reflect your dwindling health in perilous areas. Dive into a retro adventure where every decision counts and the vintage aesthetic reigns supreme.";
  return (
    <Container sx={{ marginTop: 4 }}>
      {/* could also use date={new Date(2024, 6, 28)} instead. NOTE: when using Date must subtract 1 from month */}
      <GameBreakdown
        title="Adventure.exe"
        description={gameDescription}
        date="2024-07-27"
        platforms={["Web Based Application"]}
        status="In Development"
        logos={[
          { name: csharplogo, alt: "C# Logo" },
          { name: unitylogo, alt: "Unity Logo" },
        ]}
        playGame={false}
        gameArt={{
          name: "",
          alt: "",
        }}
      />
      <div style={{ margin: 50 }} />

      <Button variant="contained" component={Link} to="/" sx={{ marginTop: 2 }}>
        Back to Home
      </Button>
    </Container>
  );
};

export default AdventureExe;
