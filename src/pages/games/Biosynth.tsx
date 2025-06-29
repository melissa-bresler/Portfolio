import React from "react";
import { Container } from "@mui/material";
import GameBreakdown from "../../components/pages/games/GameBreakdown";
import csharplogo from "../../assets/pages/games/c-sharp-logo.png";
import unitylogo from "../../assets/pages/games/unity-logo.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";
import visualBoard from "../../assets/pages/games/Biosynth/milanote.png";

const Biosynth: React.FC = () => {
  const gameDescription =
    "Set in a futuristic, isometric world inspired by floating mountains and vintage-modern architecture, the game follows a newcomer joining a tightly structured community. Everyone is assigned a role — yours is in the kitchen of a rustic tavern, where cooking becomes a daily rhythm through interactive mini-games. Outside work, the world opens up: players can explore markets, gardens, libraries, and embassies, taking on favors and quests in a society built on barter. The overarching story involves a looming threat to the land, pushing the player to build skills, form connections, and find ways to protect the fragile balance of the world.";

  return (
    <>
      <BackToHomeButton />
      <Container sx={{ marginTop: 4 }}>
        <GameBreakdown
          title="Biosynth"
          description={gameDescription}
          date="2025-06-29"
          platforms={["PC"]}
          status="Planning"
          logos={[
            { name: csharplogo, alt: "C# Logo", invert: false },
            { name: unitylogo, alt: "Unity Logo", invert: true },
          ]}
          gameArt={{
            src: visualBoard,
            alt: "Biosynth",
          }}
        />
        <div style={{ margin: 50 }} />
      </Container>
    </>
  );
};

export default Biosynth;
