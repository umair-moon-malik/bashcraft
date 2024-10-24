import React from "react";
import EventCard from "../EventCard/EventCard";



const UpcomingEvents = () => {

    const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt nihil impedit molestias reprehenderit cupiditate at? Quod beatae, adipisci dolorum debitis ut laudantium sapiente, in modi possimus inventore, quam rerum accusamus! Quos, cum! Et inventore perspiciatis odio sapiente magni autem quos similique impedit placeat officiis repudiandae qui sunt suscipit expedita ipsum minima, tempore aliquid ut? Consequuntur deleniti architecto eaque ipsum ab."

  return (
    <div className="event-card-wrapper">
      <EventCard title="EVENT TITLE" description={lorem} />
      <EventCard title="EVENT TITLE" description={lorem} />
    </div>
  );
};

export default UpcomingEvents;
