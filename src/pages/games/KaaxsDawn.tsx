import React from "react";
import { Container } from "@mui/material";
import GameBreakdown from "../../components/pages/games/GameBreakdown";
import csharplogo from "../../assets/pages/games/c-sharp-logo.png";
import unitylogo from "../../assets/pages/games/unity-logo.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";
import keyElements from "../../assets/pages/games/KaaxsDawn/kd-key-elements.png";

const KaaxsDawn: React.FC = () => {
  const gameDescription =
    "Embark on an action-packed journey in this Unity-based 3D adventure game prototype. Step into a vibrant world where exploration and combat go hand in hand. Battle quirky enemies, uncover hidden secrets, and follow an engaging storyline designed to captivate younger audiences while remaining fun for all ages. Inspired by titles like Stray and The Legend of Zelda: Breath of the Wild, this prototype offers a glimpse into an exciting adventure filled with charm and discovery.";
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
          playGame={false}
          gameArt={{
            src: keyElements,
            alt: "Screenshots from key gameplay elements",
          }}
        />
        <div style={{ margin: 50 }} />
      </Container>
    </>
  );
};

export default KaaxsDawn;
