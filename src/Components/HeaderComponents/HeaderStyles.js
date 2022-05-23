import { makeStyles } from "@material-ui/core";
import image from "../../images/brandBanner.jpg";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  HeaderWraper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right, #04303140, #00606473), url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  HeaderContainer: {
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    padding: "20px",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  headerDesc: {
    fontSize: "2rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
      margin: theme.spacing(2, 0),
    },
  },
  navBar: {
    backgroundColor: "#143438",
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlink: {
    color: Theme.colors.base2,
  },
  //decorator
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    position: "relative",
    marginTop: "25px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: Theme.colors.primary,
      borderRadius: "50%",
      content: '" "',
    },
  },
  decoratorText: {
    lineHeight: "40px",
    position: "absolute",
    left: "20px",
  },
  arrow: {
    lineHeight: "50px",
    position: "absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "1s",
    animationIterationCount: "infinite",
  },
  //create Animation:-
  "@global": {
    "@keyframes upDown": {
      0: {
        paddingTop: "0px",
        transform: "scale(0)",
      },
      100: {
        paddingTop: "10px",
        transform: "scale(1)",
      },
    },
  },
  drawer: {
    width: "250px",
    height: "100vh",
  },
  drawerContainer: {
    width: "250px",
    height: "100vh",
    backgroundColor: Theme.colors.primary2,
  },
  listItem:{
    color:Theme.colors.base2
  }
}));
