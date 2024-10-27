import React from "react";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <div className="event-card">
      <div className="event-description-wrapper">
        <h1 className="event-title">{props.title}</h1>
        <h6 className="event-date">{props.date}</h6>
        <p className="event-description">{props.description}</p>
      </div>
    </div>
  );
};

EventCard.defaultProps = {
  title: "EVENT TITLE",
  date: "1 January 2024",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt nihil impedit molestias reprehenderit cupiditate at? Quod beatae, adipisci dolorum debitis ut laudantium sapiente, in modi possimus inventore, quam rerum accusamus! Quos, cum! Et inventore perspiciatis odio sapiente magni autem quos similique impedit placeat officiis repudiandae qui sunt suscipit expedita ipsum minima, tempore aliquid ut? Consequuntur deleniti architecto eaque ipsum ab.",
};

export default EventCard;
