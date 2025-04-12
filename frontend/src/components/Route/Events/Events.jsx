import React from "react";
import styles from "../../../styles/styles";
import EvenCard from "./EvenCard/EvenCard.jsx";
const Events = () => {
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Events</h1>
        </div>

        <div className="w-full grid">
          <EvenCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
