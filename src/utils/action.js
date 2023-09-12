const bookATable = (bookObj) => ({ type: "bookATable", payload: bookObj });
const addToCart = (foodObj) => ({ type: "addToCart", payload: foodObj });
const checkOut = () => ({ type: "checkOut" });
const deleteCartItem = (index) => ({ type: "deleteCartItem", payload: index });

export { bookATable, addToCart, checkOut, deleteCartItem };
