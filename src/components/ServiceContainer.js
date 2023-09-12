import ServiceComp from "./ServiceComp";
import "./Service.css";

const ServiceContainer = ({ services }) => {
  return (
    <div className="service">
      {services.map((val, index) => {
        return (
          <ServiceComp
            icon={val.icon}
            title={val.title}
            description={val.description}
          />
        );
      })}
    </div>
  );
};

export default ServiceContainer;
