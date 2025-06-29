import React from "react";
import { Container } from "@mui/material";
import GameBreakdown from "../../components/pages/games/GameBreakdown";
import swiflogo from "../../assets/pages/games/swift-logo.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";
import gameScreenshot from "../../assets/pages/games/MemoryMeltdown/madness-1.png";
import { loadImagesFromFolder } from "../../assets/loadImages";

const MemoryMeltdown: React.FC = () => {
  const gameDescription =
    "Challenge and sharpen your memory with Memory Meltdown, a mobile game co-developed by myself alongside James Watson, and Joao Tiago Da Silva Figueira. It features three engaging mini-games designed to test and improve your memorization skills. With vibrant graphics and increasing difficulty levels, Memory Meltdown offers a fun and stimulating way to boost your cognitive abilities on the go!";

  const images = loadImagesFromFolder("mm");

  return (
    <>
      <BackToHomeButton />
      <Container sx={{ marginTop: 4 }}>
        <GameBreakdown
          title="Memory Meltdown"
          description={gameDescription}
          date="2023-05-15"
          platforms={["Mobile Application - IOS"]}
          status="Complete"
          logos={[{ name: swiflogo, alt: "Swift Logo", invert: false }]}
          gameArt={{
            src: gameScreenshot,
            alt: "Memory Meltdown",
          }}
          images={images}
        />
        <div style={{ margin: 50 }} />
      </Container>
    </>
  );
};

export default MemoryMeltdown;
