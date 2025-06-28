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
import styles from "../styles/Navbar.module.css";
import controller from "../assets/navbar-controller.png";
import { useDarkMode } from "../hooks/UseDarkMode";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    closeTimeout = setTimeout(() => {
      setAnchorEl(null);
    }, 75);
  };

  const isDarkMode = useDarkMode();
  const textColour = isDarkMode ? "var(--black)" : "var(--white)";

  let closeTimeout: ReturnType<typeof setTimeout>;

  return (
    <AppBar position="static">
      <Toolbar
        sx={{ background: isDarkMode ? "var(--white)" : "var(--black)" }}
      >
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{ marginRight: "10px", color: textColour }}
          >
            MELISSA BRESLER
          </Typography>
          <img src={controller} alt="Pellet" className={styles.image} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: textColour }} component={Link} to="/">
            Home
          </Button>
          <div
            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
            onMouseLeave={handleClose}
          >
            <Button
              sx={{ color: textColour }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Games
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              autoFocus={false}
              disableAutoFocusItem={true}
              MenuListProps={{
                onMouseEnter: () => clearTimeout(closeTimeout),
                onMouseLeave: handleClose,
              }}
            >
              <MenuItem
                component={Link}
                to="/adventureExe"
                onClick={handleClose}
              >
                Adventure.exe
              </MenuItem>
              <MenuItem
                component={Link}
                to="/memory-meltdown"
                onClick={handleClose}
              >
                Memory Meltdown
              </MenuItem>
              <MenuItem component={Link} to="/kaaxs-dawn" onClick={handleClose}>
                Kaax's Dawn
              </MenuItem>
            </Menu>
          </div>
          <Button sx={{ color: textColour }} component={Link} to="/about">
            About
          </Button>
          {/* TODO: Uncomment after making page functional */}
          {/* <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
