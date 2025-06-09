// src/components/CustomButton.tsx
import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "../styles.css";

interface CustomButtonProps {
  to?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ to, children }) => {
  const isLink = Boolean(to);

  return (
    <Button
      className="custom-button"
      component={isLink ? RouterLink : "button"}
      to={to}
      variant="text"
      disableElevation
      disableRipple
    >
      {children}
    </Button>
  );
};

export default CustomButton;
