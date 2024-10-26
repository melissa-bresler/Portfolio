import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// TODO: Change styling of button
export const BackToHomeButton = () => {
  return (
    <Button variant="contained" component={Link} to="/" sx={{ marginTop: 2 }}>
      Back to Home
    </Button>
  );
};
