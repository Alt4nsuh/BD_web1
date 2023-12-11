import React from "react";
import "../ControlCV.css";

const Card = ({ icon: Icon, parameter, title }) => {
  return (
    <div className="controlcard">
      {Icon && <Icon className="controlicon" />}
      <p className="controlpara">{parameter}</p>
      <p className="controltitle">{title}</p>
    </div>
  );
};

export default Card;
