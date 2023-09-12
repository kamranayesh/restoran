import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import "./MenuCard.css";

const MenuCard = (props) => {
  const dispatch = useDispatch();
  const formElement = useRef();
  const [qty, setQty] = useState(0);
  useEffect(() => {}, [qty]);

  const handleAdd = (e) => {
    // e.preventDefault();
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
      <div className="menu-card" sx={{ maxWidth: 345 }}>
        <div className="menu-card-img">
          <img src={props.obj.image} />
        </div>
        <div>
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
        </div>
        <div ref={formElement} className="menu-form">
          <div className="menu-card-change-container">
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
          </div>
          <Button
            className="addToCartButton"
            size="small"
            color="success"
            type="submit"
            sx={{ marginLeft: 25 }}
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
