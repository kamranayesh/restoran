import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk";

let Store = createStore(Reducer, applyMiddleware(thunk));
export default Store;
