import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer.js";
import thunk from "redux-thunk";

let Store = createStore(Reducer, applyMiddleware(thunk));
export default Store;
