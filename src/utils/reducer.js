const initialState = { table: [], cart: [], contact: [] };

const Reducer = (state = initialState, action) => {
  if (action.type === "bookATable") {
    const newState = {
      ...state,
      table: [...state.table, action.payload],
    };
    // console.log(state);
    // console.log(action.payload);
    // console.log(newState);
    return newState;
  }
  if (action.type === "addToCart") {
    // console.log("hello", state.cart.length);
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].name === action.payload.name) {
        const updatedCart = [...state.cart];
        updatedCart[i].quantity =
          updatedCart[i].quantity + action.payload.quantity;

        const newState = {
          ...state,
          cart: updatedCart,
        };
        console.log("increased quantity in existing one", newState);
        return newState;
      }
    }
    const newState = {
      ...state,
      cart: [...state.cart, action.payload],
    };
    console.log("Added new item", newState);
    return newState;
  }
  if (action.type === "checkOut") {
    const newState = {
      ...state,
      cart: [],
    };
    return newState;
  }
  if (action.type === "deleteCartItem") {
    let indexTodelete = action.payload;
    // console.log("hello delete cart item", state.cart);
    let cart = state.cart.filter((val, index) => index !== indexTodelete);

    const newState = {
      ...state,
      cart: cart,
    };
    return newState;
  }
  if (action.type === "contactUS") {
    const newState = {
      ...state,
      contact: [...state.cart, action.payload],
    };

    return newState;
  }
  return state;
};

export default Reducer;
