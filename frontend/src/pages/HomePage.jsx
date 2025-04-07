import React, { useState } from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";

const HomePage = () => {
  const [activeHeading , setactiveHeading] = useState(1)
  return (
    <div>
      <Header activeHeading={activeHeading} />
      <Hero />
    </div>
  );
};

export default HomePage;
