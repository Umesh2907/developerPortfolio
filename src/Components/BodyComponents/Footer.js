import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "react-scroll/modules/components/Link";
import { Theme } from "../Theme";

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footerContainer} id="Footer">
      <IconButton
        activeClass="active"
        to="Headder"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}
        style={{
          position: "absolute",
          right: 5,
          top: -25,
          color: Theme.colors.base2,
          backgroundColor: Theme.colors.primary,
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant="body1" component="h4" align="center" color="inherit">
        Developed and designed with <FavoriteIcon style={{ color: "red" }} /> by
        Umesh, All Rights Reserved &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
