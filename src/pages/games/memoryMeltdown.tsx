import React from "react";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import BlogEntry from "../../components/BlogEntry";
import GameBreakdown from "../../components/GameBreakdown";
import swiflogo from "../../assets/swift-logo.png";
import xcodelogo from "../../assets/xcode-logo.png";

const memoryMeltdown: React.FC = () => {
  const gameDescription =
    "Challenge and sharpen your memory with Memory Meltdown, a mobile game co-developed by myself alongside James Watson, and Joao Tiago Da Silva Figueira. It features three engaging mini-games designed to test and improve your memorization skills. With vibrant graphics and increasing difficulty levels, Memory Meltdown offers a fun and stimulating way to boost your cognitive abilities on the go!";
  return (
    <Container sx={{ marginTop: 4 }}>
      <GameBreakdown
        title="Memory Meltdown"
        description={gameDescription}
        date="2023-12-17"
        platforms={["Mobile Application - IOS"]}
        status="Complete"
        logos={[
          { name: swiflogo, alt: "Swift Logo" },
          { name: xcodelogo, alt: "X-Code Logo" },
        ]}
        playGame={false}
        gameArt={{
          name: "",
          alt: "",
        }}
      />
      <div style={{ margin: 50 }} />
      {/* TODO: Make Back to home button a separate component and change styling */}
      <Button variant="contained" component={Link} to="/" sx={{ marginTop: 2 }}>
        Back to Home
      </Button>
    </Container>
  );
};

export default memoryMeltdown;
