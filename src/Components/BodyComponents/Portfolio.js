import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderHeadingSection } from "../common/CommanComponents";
import { useStyles } from "./BodyStyle";
import image1 from "../../images/5-2.jpg";
import image2 from "../../images/5-3.jpg";
import image3 from "../../images/5-4.jpg";
import image4 from "../../images/5-6.jpg";
import image5 from "../../images/5-8.jpg";
import image6 from "../../images/5-9.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: "# Portfolio", link: "" },
    { url: image2, title: "# Portfolio", link: "" },
    { url: image3, title: "# Portfolio", link: "" },
    { url: image4, title: "# Portfolio", link: "" },
    { url: image5, title: "# Portfolio", link: "" },
    { url: image6, title: "# Portfolio", link: "" },
  ];
  return (
    <Box className={classes.sectionDark} id="Portfolio">
      {/* header */}
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sm={8}>
          {RenderHeadingSection({
            smallTxt: "Portfolio",
            heading: "Let's See My Work",
            alignCenter: false,
          })}
        </Grid>
      </Grid>
      {/* image */}
      <ScrollAnimation animateIn="fadeIn">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={3} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.resposiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>
                    <Button variant="contained">Visit</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
