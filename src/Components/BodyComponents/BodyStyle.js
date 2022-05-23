import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: Theme.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
  },
  sectionDark: {
    backgroundColor: Theme.colors.primary2,
    padding: theme.spacing(10, 0, 8, 0),
  },
  divider: {
    width: "65px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
  },
  resposiveImg: {
    width: "100%",
    height: "auto",
  },
  sectionHeadingCont: {
    color: Theme.colors.base2,
    padding: theme.spacing(1),
  },
  sectionHeading: {
    color: Theme.colors.base2,
    margin: theme.spacing(2, 0),
  },
  AvtarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  MediaText: {
    color: Theme.colors.base2,
  },
  // portfolio section
  imageContainer: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },
  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.7s",
  },
  overlayTitle: {
    fontSize: "2rem",
    marginBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  submitBtn: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },
  //footer style
  footerContainer: {
    backgroundColor: Theme.colors.primary2,
    color: Theme.colors.base2,
    padding: theme.spacing(2),
    position: "relative",
  },
  iconButton: {
    position: "absolute",
    right: 5,
    top: -25,
    color: Theme.colors.base2,
    backgroundColor: Theme.colors.primary,
  },
}));
