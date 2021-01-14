import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyle from "./style";
const Cart = ({ cart }) => {
  // console.log(cart);
  // const isEmpty = !cart.line_items.length;
  const classes = useStyle();
  const EmptyCart = () => (
    <Typography varient="subtitle1">
      Your list is empty add some data
    </Typography>
  );
  console.log(cart);
  const FillCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography varient="h4">
          SubTotal:{cart.subtotal.formatted_with_symbol}
          <div>
            <Button
              className={classes.emptyButton}
              size="larg"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty Button
            </Button>

            <Button
              className={classes.checkoutButton}
              size="larg"
              type="button"
              color="primary"
              variant="contained"
            >
              Empty Button
            </Button>
          </div>
        </Typography>
      </div>
    </>
  );
  if (!cart.line_items) return "loading....";
  return (
    <Container>
      <div className={classes.toolbar}></div>
      <Typography className={classes.title} variant="h3">
        your Shopping List
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FillCart />}
    </Container>
  );
};

export default Cart;
