import React, { useState } from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";

const HomePage = () => {
  const [activeHeading, setactiveHeading] = useState(1);
  return (
    <div>
      <Header activeHeading={activeHeading} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;
