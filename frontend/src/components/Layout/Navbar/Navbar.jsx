import React from "react";
import styles from "../../../styles/styles";
import { navItems } from "../../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div
      className={`${styles.normalFlex} gap-4  md:pl-0 flex-col md:flex-row !items-start`}
    >
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex justify-start" key={i.url + index}>
            <Link
              to={i.url}
              className={`px-5 py-2 font-semibold transition-colors duration-300
                ${
                  +active === index + 1
                    ? "text-green-500"
                    : "text-gray-800 md:text-white hover:text-green-500"
                }
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
