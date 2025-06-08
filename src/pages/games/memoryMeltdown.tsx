import React from "react";
import { Container } from "@mui/material";
import GameBreakdown from "../../components/GameBreakdown";
import swiflogo from "../../assets/swift-logo.png";
import xcodelogo from "../../assets/xcode-logo.png";
import { BackToHomeButton } from "../../components/BackToHomeButton";
import gameScreenshots from "../../assets/memory-meltdown.png";

const MemoryMeltdown: React.FC = () => {
  const gameDescription =
    "Challenge and sharpen your memory with Memory Meltdown, a mobile game co-developed by myself alongside James Watson, and Joao Tiago Da Silva Figueira. It features three engaging mini-games designed to test and improve your memorization skills. With vibrant graphics and increasing difficulty levels, Memory Meltdown offers a fun and stimulating way to boost your cognitive abilities on the go!";
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
          logos={[
            { name: swiflogo, alt: "Swift Logo" },
            { name: xcodelogo, alt: "X-Code Logo" },
          ]}
          playGame={false}
          gameArt={{
            src: gameScreenshots,
            alt: "Screenshots of the final game.",
          }}
        />
        <div style={{ margin: 50 }} />
      </Container>
    </>
  );
};

export default MemoryMeltdown;
