import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Service.css";

const ServiceComp = ({ icon, title, description }) => {
  return (
    <div>
      <Card
        className="card"
        variant="outlined"
        sx={{ fontSize: 14, background: "#037ef9", color: "white" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {icon}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <br />
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceComp;
