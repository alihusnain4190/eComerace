import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import commerce from "../../asset/commerce.png";
import useStyles from "./style";
const Navbar = ({totalItem}) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography varient="h6" classsName={classes.title}>
            <img
              src={commerce}
              alt="aliiamge"
              height="25px"
              className={classes.image}
            ></img>
            
            Ali Shop
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label="show cart item" color="inharit">
              <Badge badgeContent={totalItem} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
