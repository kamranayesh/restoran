import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-div">
        <h1 className="home-h1">
          Enjoy our <br />
          Delicious Meal
        </h1>
        <p className="home-p">
          Welcome to Restoran where food meets artistry and flavors dance on
          your palate. Nestled in the heart of Hyderabad, our restaurant is a
          culinary haven where every meal is a celebration of taste and
          creativity.
        </p>

        <Link className="book-table-btn" to="/bookatable">
          Book A Table
        </Link>
      </div>
      <div className="home-div-img">
        <img className="home-food-img" src="images/home-food.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
