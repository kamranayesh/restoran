import AboutUS from "./AboutUs";
import RestaurantGallery from "./RestaurantGallery";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <RestaurantGallery />
      <AboutUS />
    </div>
  );
};

export default About;
