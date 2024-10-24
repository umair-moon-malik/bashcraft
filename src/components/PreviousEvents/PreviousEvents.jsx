import React from "react";
import EventCard from "../EventCard/EventCard";
import "./PreviousEvents.css";

const PreviousEvents = () => {
  return (
    <div className="event-card-wrapper">
      <EventCard
        title="TechTalk with Arpit Bhayani"
        description="Bashcraft recently hosted a captivating session with Arpit Bhayani, Google’s senior staff software engineer, diving deep into the latest tech trends and essential skills for future innovators. Attendees engaged in lively discussions about AI, software development, and the future of technology which sparked their curiosity in the ever-evolving tech landscape."
      />
      <EventCard
        title="Investstion"
        description="On March 26th, Bashcraft hosted an engaging finance event in collaboration with Zerodha, where participants learned to build personal portfolios and gained valuable financial insights. Following the workshop, attendees took part in an exciting Finance Hackathon, aimed at creating a finance platform from scratch. Participants faced UI/UX and development challenges, showcasing their skills and creativity while tackling real-world finance problems."
      />
    </div>
  );
};

export default PreviousEvents;
