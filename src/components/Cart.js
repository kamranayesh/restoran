import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkOut, deleteCartItem } from "../utils/action";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const [cart] = useSelector((state) => {
    // console.log(state.todos);
    return [state.cart];
  });
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(
      cart.reduce((sum, currentItem) => {
        return sum + currentItem.price * currentItem.quantity;
      }, 0)
    );
  }, [sum, cart]);

  const handleCheckOut = () => {
    let cartObj = {
      cart: cart,
      totalPrice: sum + sum * 0.18,
    };
    console.log("order accepted", cartObj);
    dispatch(checkOut());
    setSum(0);
  };

  const handleDelete = (index) => {
    dispatch(deleteCartItem(index));
  };
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="cart-table-header">
        <div className="cart-table-item">Item</div>
        <div className="cart-table-price">Price</div>
        <div className="cart-table-qty">Quantity</div>
        <div className="cart-table-total">Total price</div>
      </div>
      {cart.map((val, index) => {
        return (
          <div className="cart-table-row">
            <div className="cart-table-item">{val.name}</div>
            <div className="cart-table-price">₹{val.price}</div>
            <div className="cart-table-qty">{val.quantity}</div>
            <div className="cart-table-total">₹{val.price * val.quantity}</div>
            <div className="cart-table-delete">
              <FontAwesomeIcon
                icon="fa-solid fa-trash"
                onClick={() => handleDelete(index)}
              />
            </div>
          </div>
        );
      })}
      <div className="final-bill">
        <div>
          <div className="a"> SubTotal:</div> <div>₹{sum}</div>
        </div>
        <div>
          <div className="a">Tax: </div>
          <div>₹{sum * 0.18}</div>
        </div>
        <div>
          <div className="a"> Grand Total: </div>
          <div>
            <b>₹{sum + sum * 0.18}</b>
          </div>
        </div>
      </div>
      <button onClick={handleCheckOut}>Check out</button>
    </div>
  );
};

export default Cart;
