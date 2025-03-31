import React, { useState } from "react";
import Header from "../components/Layout/Header.jsx";
const HomePage = () => {
  const [activeHeading , setactiveHeading] = useState(1)
  return (
    <div>
      <Header activeHeading={activeHeading} />
    </div>
  );
};

export default HomePage;
