import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
// TODO: Should appear/disappear on hover
// FIXME: Navbar doesn't disappear once an option has been clicked
const Navbar: React.FC = () => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "black" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MELISSA BRESLER
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* <div>
            <Button
              color="inherit"
              component={Link} // Link to the home page
              to="/"
              onMouseOver={handleMenuOpen} // Open dropdown on hover
              onMouseLeave={handleMenuClose} // Close dropdown on mouse leave
            >
              Home
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onMouseLeave={handleMenuClose} // Close dropdown on mouse leave
            >
              <MenuItem component={Link} to="/">
                Main Home
              </MenuItem>
            </Menu>
          </div> */}
          <div>
            <Button
              color="inherit"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Home
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/adventureExe">
                Adventure.exe
              </MenuItem>
              <MenuItem component={Link} to="/memory-meltdown">
                Memory Meltdown
              </MenuItem>
            </Menu>
          </div>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
