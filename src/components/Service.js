import ServiceContainer from "./ServiceContainer";
import services from "../services.json";

const Service = () => {
  return (
    <div>
      <h4>--Our Service--</h4>
      <h1>Explore Our Services</h1>
      <ServiceContainer services={services} />
      <button>Scroll to Top</button>
    </div>
  );
};

export default Service;
