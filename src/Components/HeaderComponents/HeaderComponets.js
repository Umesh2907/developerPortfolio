import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { ArrowDownwardRounded } from "@material-ui/icons";
import { Decorator } from "../common/CommanComponents";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";

export default function HeaderComponets() {
  const classes = useStyles();
  const [initialState, setInitialState] = useState(false);
  const handleDrawerTogler = () => {
    setInitialState(!initialState);
  };

  const navLinks = [
    { label: "About", id: "About" },
    { label: "Portfolio", id: "Portfolio" },
    { label: "Contact", id: "Contact" },
  ];

  return (
    <Box className={classes.HeaderWraper} id="Headder">
      <Navbar navLinks={navLinks} handleDrawerTogler={handleDrawerTogler} />
      <DrawerComponent
        initialState={initialState}
        navLinks={navLinks}
        handleDrawerTogler={handleDrawerTogler}
      />

      <Box className={classes.HeaderContainer}>
        <Typography variant="h3" component="h4" className={classes.headerTitle}>
          I'm a <span style={{ padding: "5px" }}></span>
          <Typed
            strings={["WebDeveloper,", "UI/UX Designer,", "Digital Expert,"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography variant="h3" component="h4" className={classes.headerDesc}>
          I Can create Website and Applications ,Based on your needs..
        </Typography>
        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRounded />,
        })}
      </Box>
    </Box>
  );
}
