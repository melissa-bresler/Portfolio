import React from "react";
import { Container, Grid } from "@mui/material";
import BlogEntry from "../../components/BlogEntry";
import GameBreakdown from "../../components/GameBreakdown";
import conceptArt from "../../assets/adventureExe-concept-art.jpg";
import csharplogo from "../../assets/c-sharp-logo.png";
import unitylogo from "../../assets/unity-logo.png";
import aiArt from "../../assets/ai-generated-art.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";

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
        playGame={true}
        gameArt={{
          src: "",
          alt: "",
        }}
      />
      <div style={{ margin: 50 }} />
      <BlogEntry
        date="2024-07-28"
        blogText={
          "I kicked off development with a clear concept, fleshing out ideas and drafting a design that defines the game’s mechanics, visual style, and story. My planning focused on technical specifications, asset needs, and selecting Unity tools to support the build."
        }
        image={conceptArt}
        imageAlt={"Concept Art"}
        switchSides={false}
        keyChanges={[
          "Game concept defined",
          "Specs and asset list made",
          "Development plan set",
        ]}
      />
      <BlogEntry
        date="2024-10-26"
        blogText={
          "With planning done, I created a KanBan board to track tasks and streamline workflow. I used AI tools to generate concept art that matches my vision, and I made progress on the Unity build by setting up the main game file and initial interactions."
        }
        image={aiArt}
        imageAlt={"AI Generated Art"}
        switchSides={true}
        keyChanges={[
          "KanBan board created",
          "Concept art generated",
          "Unity setup started",
        ]}
      />
      <BackToHomeButton />
    </Container>
  );
};

export default AdventureExe;
