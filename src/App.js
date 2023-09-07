import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faFontAwesome,
  faHatCowboy,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faFontAwesome, faHatCowboy);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
