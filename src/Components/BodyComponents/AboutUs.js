import React from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { useStyles } from "./BodyStyle";
import image from "../../images/About.jpg";
import { CardMedia, RenderHeadingSection } from "../common/CommanComponents";
import ScrollAnimation from "react-animate-on-scroll";
import LanguageIcon from '@mui/icons-material/Language';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function AboutUs() {
  const classes = useStyles();
  const cardMediaData = [
    {
      title: "Web Development",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      icon: <LanguageIcon/>,
    },
    {
      title: "Graphic Design",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      icon: <BubbleChartIcon/>,
    },
    {
      title: "Mobile Apps",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      icon: <PhoneIphoneIcon/>,
    },
    {
      title: "Marketing",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      icon: <AcUnitIcon/>,
    },
  ];
  return (
    <Box className={classes.section} id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt="about us"
                  className={classes.resposiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderHeadingSection({
                smallTxt: "ABOUT ME",
                heading: "Hello I'm Umesh mahajan",
                description:
                  "A self taught developer who loves to codes somthing that will impact majority of people in good way!",
              })}
              <br />
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      Label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
