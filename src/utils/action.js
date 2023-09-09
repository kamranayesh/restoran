const bookATable = (bookObj) => ({ type: "bookATable", payload: bookObj });
const addToCart = (foodObj) => ({ type: "addToCart", payload: foodObj });
const checkOut = () => ({ type: "checkOut" });

export { bookATable, addToCart, checkOut };
