import React from "react";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <div className="event-card">
      <div className="event-description-wrapper">
        <h1 className="event-title">{props.title}</h1>
        <p className="event-description">{props.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
