import React from "react";
import styles from "../../../../styles/styles";
import CountDown from "./CountDown/CountDown.jsx";
const EvenCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          molestias quasi nobis unde nihil. Ut, voluptatibus vero aspernatur,
          nihil explicabo sed quod illo minus laboriosam minima error omnis
          consectetur necessitatibus ex eveniet cupiditate repudiandae unde.
          Amet iure asperiores error inventore.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[10px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>

            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>

          <span className="pr-3  font-[400] text-[17px] text-[#44a55e]  ">
            120 sold
          </span>
        </div>

        <CountDown />
      </div>
    </div>
  );
};

export default EvenCard;
