import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceComp = ({ icon, title, description }) => {
  return (
    <div>
      <div className="card">
        <FontAwesomeIcon className="service-icon" icon={icon} />
        <div className="service-title">{title}</div>
        <br />
        <div className="service-des">{description}</div>
      </div>
    </div>
  );
};

export default ServiceComp;
