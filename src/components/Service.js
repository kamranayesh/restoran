import ServiceContainer from "./ServiceContainer";
import services from "../services.json";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-root">
      <h4>Our Services</h4>
      <h1>Explore Our Services</h1>
      <ServiceContainer services={services} />
    </div>
  );
};

export default Service;
