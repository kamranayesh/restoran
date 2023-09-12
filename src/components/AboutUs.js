import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
const AboutUS = () => {
  return (
    <div className="aboutus">
      <h4>About Us</h4>
      <h1>
        Welcome to{" "}
        <FontAwesomeIcon className="ab-icon" icon="fa-solid fa-utensils" />{" "}
        Restoran
      </h1>
      <p>
        Welcome to Restoran where food meets artistry and flavors dance on your
        palate. Nestled in the heart of Hyderabad, our restaurant is a culinary
        haven where every meal is a celebration of taste and creativity.
      </p>
      <h2>15 Years of Experience</h2>
      <h2>50 Popular Master Chefs</h2>
      <br />
      <button>Read More</button>
    </div>
  );
};

export default AboutUS;
