import React from "react";
import classes from "./MenuCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/action";
const MenuCard = (props) => {
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    const formObj = e.target;

    let foodObj = {
      name: props.obj.name,
      price: props.obj.price,
      quantity: Number(formObj.quantity.value),
    };
    dispatch(addToCart(foodObj));
    // axios.post("/bookings", bookObj).then((response) => {
    //   console.log(response);
    // });
    console.log("Saved in backend", foodObj);
  };
  return (
    <>
      <Card className="menu-card" sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={props.obj.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.obj.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="menu-price"
          >
            ₹{props.obj.price}
          </Typography>
          <Typography variant="body2">{props.obj.description}</Typography>
        </CardContent>
        <CardActions>
          <form onSubmit={handleAdd}>
            <TextField
              id="outlined-basic"
              type="number"
              label="Qty"
              variant="outlined"
              size="small"
              name="quantity"
              defaultValue="1"
              className="quantity"
            />
            <Button size="small" type="submit" color="success">
              Add
            </Button>
          </form>
        </CardActions>
      </Card>
    </>
  );
};

export default MenuCard;
