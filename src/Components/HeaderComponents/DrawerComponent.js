import { Box, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";

export default function DrawerComponent({
  initialState,
  navLinks,
  handleDrawerTogler,
}) {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={initialState}
      onClose={handleDrawerTogler}
      className={classes.drawer}
    >
      <Box className={classes.drawerContainer}>
        <List style={{paddingTop:"30px"}}>
          {navLinks.map((item, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
