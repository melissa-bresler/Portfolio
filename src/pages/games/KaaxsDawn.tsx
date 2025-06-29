import React from "react";
import { Container } from "@mui/material";
import GameBreakdown from "../../components/pages/games/GameBreakdown";
import csharplogo from "../../assets/pages/games/c-sharp-logo.png";
import unitylogo from "../../assets/pages/games/unity-logo.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";
import gameScreenshot from "../../assets/pages/games/KaaxsDawn/Slideshow/save-slots.png";
import { loadImagesFromFolder } from "../../assets/loadImages";
import BlogSection, {
  BlogEntryData,
} from "../../components/pages/games/BlogSection";
import moodBoard from "../../assets/pages/games/KaaxsDawn/mood-board.png";
import guiDesign from "../../assets/pages/games/KaaxsDawn/gui-design.png";
import convai from "../../assets/pages/games/KaaxsDawn/convai.png";
import classDiagram from "../../assets/pages/games/KaaxsDawn/class-diagram.jpg";
import saveSystem from "../../assets/pages/games/KaaxsDawn/unity-save-system.png";
import inventory from "../../assets/pages/games/KaaxsDawn/Slideshow/inventory.png";
import pauseMenu from "../../assets/pages/games/KaaxsDawn/Slideshow/pause-menu.png";
import mainMenu from "../../assets/pages/games/KaaxsDawn/Slideshow/main-menu.png";
import instructions from "../../assets/pages/games/KaaxsDawn/Slideshow/instructions-menu.png";

const KaaxsDawn: React.FC = () => {
  const gameDescription =
    "Embark on an action-packed journey in this Unity-based 3D adventure game prototype. Step into a vibrant world where exploration and combat go hand in hand. Battle quirky enemies, uncover hidden secrets, and follow an engaging storyline designed to captivate younger audiences while remaining fun for all ages. Inspired by titles like Stray and The Legend of Zelda: Breath of the Wild, this prototype offers a glimpse into an exciting adventure filled with charm and discovery.";

  const images = loadImagesFromFolder("kd");
  const entries: BlogEntryData[] = [
    {
      date: "2023-09-06",
      blogText:
        "After finishing the prototype, I created a comprehensive class diagram to document the entire codebase. This diagram captures the relationships between systems like inventory, AI, UI, player controls, and environmental interactions. It served both as a reflection on the architecture and as a resource to help explain the overall system to others. Building this diagram helped reinforce my understanding of Unity’s structure and the principles of clean code architecture.",
      image: classDiagram,
      imageAlt: "Final class diagram overview",
      keyChanges: ["Class diagram created", "System architecture documented"],
    },
    {
      date: "2023-09-02",
      blogText:
        "The final prototype was completed. This version included a fully playable build, cleaned-up code, and resized UI for better scaling. Occlusion culling was implemented to boost performance, and final music was added to enhance the atmosphere.",
      image: mainMenu,
      imageAlt: "Final prototype build",
      keyChanges: [
        "Final prototype completed",
        "UI and code cleaned up",
        "Occlusion culling added",
        "Final music tracks implemented",
      ],
    },
    {
      date: "2023-08-19",
      blogText:
        "The visual and gameplay polish phase began with the addition of fully working menus, decorative elements, and a glitch effect fix. These updates greatly improved the game's presentation and fixed previous technical issues.",
      image: instructions,
      imageAlt: "Instructions menu",
      keyChanges: [
        "Game menus finalized",
        "Decorative assets added",
        "Glitch visual effect fixed",
      ],
    },
    {
      date: "2023-08-15",
      blogText:
        "Saving functionality was a major milestone. A full save system was introduced, allowing for multiple save slots and player progress to be stored and retrieved. This laid the groundwork for a more complete and replayable prototype.",
      image: saveSystem,
      imageAlt: "Save system development",
      keyChanges: [
        "Save system implemented",
        "Multiple save slots added",
        "Persistent player data enabled",
      ],
    },
    {
      date: "2023-08-10",
      blogText:
        "A major feature added around this time was an AI-driven NPC powered by Convai. This character was designed to engage players in dynamic conversations and provide contextual information about in-game technologies, using real-world research on mechanical engineering, quantum mechanics, and teleportation physics. Implementing this required extensive testing, content curation, and learning how to integrate external AI tools into Unity.",
      image: convai,
      imageAlt: "AI character and dialogue integration",
      keyChanges: [
        "AI character created using Convai",
        "Convai integrated into Unity",
      ],
    },
    {
      date: "2023-08-02",
      blogText:
        "This phase marked a significant jump in user experience features. Core menu systems were introduced, including the basic main menu and pause menu. Music and sound effects were also added, providing a more immersive gameplay experience.",
      image: pauseMenu,
      imageAlt: "Menu design and audio setup",
      keyChanges: [
        "Pause menu implemented",
        "Main menu added",
        "Music and sound effects integrated",
      ],
    },
    {
      date: "2023-07-18",
      blogText:
        "Work during this period focused heavily on building the inventory system. Multiple iterations helped refine its structure, layout, and integration with the game's mechanics.",
      image: inventory,
      imageAlt: "Inventory system and environment design",
      keyChanges: [
        "Inventory UI refined",
        "Inventory system designed and implemented",
      ],
    },
    {
      date: "2023-07-05",
      blogText:
        "The next part of this phase involved planning out the game's intended audience as well as the overall structure of the game and its corresponding menus.",
      image: guiDesign,
      imageAlt: "GUI design",
      keyChanges: [
        "Use case diagram designed",
        "Screen graph & wire frames generated",
        "Target audience researched",
      ],
    },
    {
      date: "2023-06-23",
      blogText:
        "The design phase of the project included creating a moodboard to gauge the overall style of the game and also to ensure both continuity with the world building as well as serving as a guide to what the final game should look like.",
      image: moodBoard,
      imageAlt: "Moodboard",
      keyChanges: ["Moodboard created", "Colour scheme selected"],
    },
  ];
  return (
    <>
      <BackToHomeButton />
      <Container sx={{ marginTop: 4 }}>
        <GameBreakdown
          title="Kaax's Dawn"
          description={gameDescription}
          date="2023-09-05"
          platforms={["PC"]}
          status="Complete"
          logos={[
            { name: csharplogo, alt: "C# Logo", invert: false },
            { name: unitylogo, alt: "Unity Logo", invert: true },
          ]}
          gameArt={{
            src: gameScreenshot,
            alt: "Kaax's Dawn",
          }}
          images={images}
        />
        <div style={{ margin: 50 }} />
        <BlogSection entries={entries} />
      </Container>
    </>
  );
};

export default KaaxsDawn;
