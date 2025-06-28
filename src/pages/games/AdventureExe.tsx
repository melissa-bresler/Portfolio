import React from "react";
import { Container, Typography } from "@mui/material";
import BlogEntry from "../../components/pages/games/BlogEntry";
import GameBreakdown from "../../components/pages/games/GameBreakdown";
import conceptArt from "../../assets/pages/games/AdventureExe/adventureExe-concept-art.jpg";
import csharplogo from "../../assets/pages/games/c-sharp-logo.png";
import unitylogo from "../../assets/pages/games/unity-logo.png";
import aiArt from "../../assets/pages/games/AdventureExe/ai-generated-art.png";
import proofOfConcept from "../../assets/pages/games/AdventureExe/proof-of-concept.png";
import initialFunctionality from "../../assets/pages/games/AdventureExe/initial-functionality.png";
import chapterStats from "../../assets/pages/games/AdventureExe/chapter-stats-introduced.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";

const AdventureExe: React.FC = () => {
  const gameDescription =
    "Step back into the nostalgic world of the 90s with Adventure.exe, a 2D game that brings the charm of vintage computers to life. Your journey begins within an old-school display, where a terminal pops up, initiating an enthralling choose-your-own-adventure game. Navigate through the story by typing your decisions, each choice leading to new paths and outcomes. As you progress, immersive pop-ups enhance the experience: inventory windows showcase icons of collected items, and glitchy hearts on the screen reflect your dwindling health in perilous areas. Dive into a retro adventure where every decision counts and the vintage aesthetic reigns supreme.";

  const entries = [
    {
      date: "2025-03-07",
      blogText:
        "Further developer commands were added for easier testing such as the ability to jump to any chapter with the stats all maxed out for that chapter. Additionally, sections of code were refactored for better readability and efficiency overall.",
      image: chapterStats,
      imageAlt: "Testing Game Still works After Code Has Been Refactored",
      keyChanges: [
        "Chapter stats created",
        "Existing code refactored and improved",
        "Inclusion of more dev commands",
      ],
    },
    {
      date: "2025-02-23",
      blogText:
        "I continued to adjust the concept code to get it functional, however certain functions required more restructuring than others due to the nature of the asynchronous behaviours. Additionally, some developer comands were created that won't be used for the game but allow for the manipulation of the story in order to test features easily.",
      image: initialFunctionality,
      imageAlt:
        "Running The Game In Unity After Basic Functionality Has Been Built",
      keyChanges: [
        "More unversal commands generated",
        "Continued adjustment of code",
        "Styling changes made",
      ],
    },
    {
      date: "2025-01-06",
      blogText:
        "As an initial proof of concept a basic terminal based version of the choose your own adventure game was created. Once this was completed, I began the process of converting the code to a Unity friendly version in order to be able to integrate it into the game.",
      image: proofOfConcept,
      imageAlt: "Testing Intitial Proof Of Concept Code In VS Code Terminal",
      keyChanges: [
        "Converted proof of concept code",
        "Basic objects created to store relevant scripts",
      ],
    },
    {
      date: "2024-10-26",
      blogText:
        "With planning done, I created a KanBan board to track tasks and streamline workflow. I used AI tools to generate concept art that matches my vision, and I made progress on the Unity build by setting up the main game file and initial interactions.",
      image: aiArt,
      imageAlt: "AI Generated Art",
      keyChanges: [
        "KanBan board created",
        "Concept art generated",
        "Unity setup started",
      ],
    },
    {
      date: "2024-07-28",
      blogText:
        "I kicked off development with a clear concept, fleshing out ideas and drafting a design that defines the game’s mechanics, visual style, and story. My planning focused on technical specifications, asset needs, and selecting Unity tools to support the build.",
      image: conceptArt,
      imageAlt: "Concept Art",
      keyChanges: [
        "Game concept defined",
        "Specs and asset list made",
        "Development plan set",
      ],
    },
  ];

  return (
    <>
      <BackToHomeButton />
      <Container sx={{ marginTop: 4 }}>
        {/* could also use date={new Date(2024, 6, 28)} instead. NOTE: when using Date must subtract 1 from month */}
        <GameBreakdown
          title="Adventure.exe"
          description={gameDescription}
          date="2024-07-27"
          platforms={["Web Based Application"]}
          status="In Development"
          logos={[
            { name: csharplogo, alt: "C# Logo", invert: false },
            { name: unitylogo, alt: "Unity Logo", invert: true },
          ]}
          playGame={true}
          gameArt={{
            src: "",
            alt: "",
          }}
        />
        <div style={{ margin: 50 }} />
        {/* TODO: Add title for blog entries section */}
        {entries.map((entry, i) => (
          <BlogEntry
            key={i}
            date={entry.date}
            blogText={entry.blogText}
            image={entry.image}
            imageAlt={entry.imageAlt}
            switchSides={i % 2 !== 0}
            keyChanges={entry.keyChanges}
          />
        ))}
      </Container>
    </>
  );
};

export default AdventureExe;
