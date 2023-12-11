import React from "react";
import "../nemsenTet.css";

const cardTet = ({ img, companyName, date, type, title, tag }) => {
  return (
    <div className="cardTet">
      <div className="first">
        <img src={img} alt="img" />
        <div className="first-first">
          <b>{companyName}</b>
          <b>{date}</b>
        </div>
      </div>
      <div className="second">
        <b className="type">{type}</b>
        <b className="title">{title}</b>
      </div>
      <div className="tag">{tag}</div>
    </div>
  );
};

export default cardTet;
