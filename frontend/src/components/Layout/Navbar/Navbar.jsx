import React from "react";
import styles from "../../../styles/styles";
import { navItems } from "../../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex} gap-4 flex-col`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex " key={i.url + index}>
            <Link
              to={i.url}
              className={`px-6 py-2 font-medium rounded-md transition-colors duration-300
                ${
                  +active === index + 1
  ? "text-indigo-600 md:text-white border-b-2 border-indigo-600 md:border-white"
  : "text-gray-800 md:text-white hover:text-indigo-500"
                }
                md:text-white md:hover:text-gray-200 
                text-gray-800 hover:text-gray-600
              `}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
