import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "../HeaderComponents/HeaderStyles";
import { useStyles as bodyStyles } from "../BodyComponents/BodyStyle";

export const Decorator = ({ label, withIcon, Icon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography variant="body1" className={classes.decoratorText}>
        {label}
      </Typography>
      {withIcon ? (
        <Typography className={classes.arrow}>{Icon}</Typography>
      ) : null}
    </Box>
  );
};
export const Divider = (style) => {
  const classes = bodyStyles();
  return (
    <Typography
      variant="body1"
      className={classes.divider}
      style={style}
    ></Typography>
  );
};

export const RenderHeadingSection = ({
  smallTxt,
  heading,
  description,
  alignCenter,
}) => {
  const classes = bodyStyles();
  return (
    <Box className={classes.sectionHeadingCont}>
      {Decorator({
        label: smallTxt,
        withIcon: false,
        styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })}
      <Typography
        variant="h4"
        align={alignCenter ? "center" : "left"}
        className={classes.sectionHeading}
      >
        {heading}
      </Typography>
      {Divider({
        style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
      })}
      <Typography
        variant="body1"
        component="h6"
        align={alignCenter ? "center" : "left"}
        className={classes.sectionDesc}
      >
        {description}
      </Typography>
    </Box>
  );
};

export const CardMedia = ({ Label, Desc, Icon, key }) => {
  const classes = bodyStyles();
  return (
    <Grid container key={key} style={{ marginTop: "10px" }}>
      <Grid item xs={3} className={classes.AvtarCont}>
        <Avatar>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9} className={classes.MediaText}>
        <Typography variant="body1" component="h6">
          {Label}
        </Typography>
        <Typography variant="caption" component="h6">
          {Desc}
        </Typography>
      </Grid>
    </Grid>
  );
};
