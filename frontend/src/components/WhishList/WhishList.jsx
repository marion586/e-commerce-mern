import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import styles from '../../styles/styles';
import { IoBagHandleOutline } from 'react-icons/io5';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
const WishList = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: 'Iphone 14 Pro Max 256 gb ssd and 8 gb ral sliver colour',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      price: 1000,
    },
    {
      name: 'Iphone 14 Pro Max 256 gb ssd and 8 gb ral sliver colour',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      price: 1000,
    },
    {
      name: 'Iphone 12 Pro Max 256 gb ssd and 8 gb ral sliver colour',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      price: 1000,
    },
    {
      name: 'Iphone 14 Pro Max 256 gb ssd and 8 gb ral sliver colour',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      price: 1000,
    },
  ];

  return (
    <div className="fixed top-0  left-0 w-full h-screen bg-[#0000004b] z-10 ">
      <div className="fixed top-0 right-0 min-h-full lg:w-[25%] w-[75%] md:w-[50%] bg-white flex flex-col  shadow-sm overflow-y-auto">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1 size={25} className="cursor-pointer" onClick={() => setOpenWishlist(false)} />
        </div>
        {/* Item length */}

        <div className={`${styles.normalFlex} p-4`}>
          <AiOutlineHeart size={25} />
          <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
        </div>
        {/* cart Single Items */}
        <br />

        <div className="w-full border-t">{cartData && cartData.map((i, index) => <CartSingle key={index} data={i} />)}</div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />

        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKTiBrfrt17VYTi9Z_hj1kwma6in2xyietuoinZiyETPGOUgwkQD7bK8cPPuZUKT1FZUEdMMdbBWbfazibSveODILwLaQvMyvmNsOQu3n7"
          alt="images examples  1 "
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1> {data.name} </h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">US${totalPrice}</h4>
        </div>

        <div>
          <BsCartPlus size={20} className="cursor-pointer " title="Ad to cart" />
        </div>
      </div>
    </div>
  );
};

export default WishList;
