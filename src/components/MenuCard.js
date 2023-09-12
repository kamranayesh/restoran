import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import "./MenuCard.css";
import { queryByText } from "@testing-library/react";

const MenuCard = (props) => {
  const dispatch = useDispatch();
  const formElement = useRef();
  const [qty, setQty] = useState(0);
  useEffect(() => {}, [qty]);

  const handleAdd = (e) => {
    e.preventDefault();
    // const formObj = e.target;
    let foodObj = {
      name: props.obj.name,
      price: props.obj.price,
      quantity: qty,
    };
    if (foodObj.quantity !== 0) dispatch(addToCart(foodObj));
    // axios.post("/bookings", bookObj).then((response) => {
    //   console.log(response);
    // });
    console.log("Saved in backend", foodObj);
    setQty(0);
    // console.log(formElement.current[1].value);
  };

  const handleAddOne = () => {
    setQty(qty + 1);
  };
  const handleDeleteOne = () => {
    if (qty - 1 < 0) setQty(0);
    else setQty(qty - 1);
  };

  return (
    <>
      <Card className="menu-card" sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={props.obj.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.obj.name}{" "}
            <FontAwesomeIcon
              icon="fa-solid fa-circle-stop"
              style={{
                color: props.obj.type === "veg" ? "green" : "red",
              }}
            />
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
          <form onSubmit={handleAdd} ref={formElement}>
            <FontAwesomeIcon
              icon="fa-solid fa-minus"
              onClick={handleDeleteOne}
              className="menu-card-change"
            />{" "}
            <span className="qty-span">{qty}</span>{" "}
            <FontAwesomeIcon
              icon="fa-solid fa-plus"
              onClick={handleAddOne}
              className="menu-card-change"
            />
            <Button
              className="addToCartButton"
              size="small"
              color="success"
              type="submit"
              sx={{ marginLeft: 25 }}
            >
              Add to Cart
            </Button>
          </form>
        </CardActions>
      </Card>
    </>
  );
};

export default MenuCard;
