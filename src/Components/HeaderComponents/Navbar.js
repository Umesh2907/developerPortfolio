import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
// import { Hidden } from "@material-ui/core";
import { MenuOpenRounded } from "@material-ui/icons";
import Link from "react-scroll/modules/components/Link";
import { Theme } from "../Theme";

export default function Navbar({ navLinks, handleDrawerTogler }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Toolbar
        className={classes.ToolBar}
        style={{ backgroundColor: Theme.colors.base1 }}
      >
        <Typography variant="h5" component="h6">
          {" < Coder />"}
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Box>
            {navLinks.map((item) => (
              <Button
                key={item.id}
                className={classes.navlink}
                activeClass="active"
                to={`${item.id}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color="inherit"
                component={Link}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton color="inherit" onClick={handleDrawerTogler}>
            <MenuOpenRounded />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
