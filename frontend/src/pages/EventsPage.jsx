import React from "react";
import Header from "../components/Layout/Header";
import EvenCard from "../components/Route/Events/EvenCard/EvenCard";

const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />

      <EvenCard active={true} />
      <EvenCard active={true} />
    </div>
  );
};

export default EventsPage;
