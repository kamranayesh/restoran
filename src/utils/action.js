const bookATable = (bookObj) => ({ type: "bookATable", payload: bookObj });
const addToCart = (foodObj) => ({ type: "addToCart", payload: foodObj });
const checkOut = () => ({ type: "checkOut" });
const deleteCartItem = (index) => ({ type: "deleteCartItem", payload: index });
const contactUS = (contactObj) => ({ type: "contactUS", payload: contactObj });

export { bookATable, addToCart, checkOut, deleteCartItem, contactUS };
