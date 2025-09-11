import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import styles from '../../styles/styles';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Cart = ({ setOpenCart }) => {
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
          <RxCross1 size={25} className="cursor-pointer" onClick={() => setOpenCart(false)} />
        </div>
        {/* Item length */}

        <div className={`${styles.normalFlex} p-4`}>
          <IoBagHandleOutline size={25} />
          <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
        </div>
        {/* cart Single Items */}
        <br />

        <div className="w-full border-t">{cartData && cartData.map((i, index) => <CartSingle key={index} data={i} />)}</div>
        <div className="px-5 mb-3">
          {/* checkout button */}

          <Link to="checkout">
            <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}>
              <h1 className="text-[#fff]  text-[19px] font-[600]"> Checkout New (USD$1000) </h1>
            </div>
          </Link>
        </div>
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
        <div>
          <div className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px]  ${styles.normalFlex} justify-center cursor-pointer`} onClick={() => setValue(value + 1)}>
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px]   flex items-center justify-center cursor-pointer" onClick={() => setValue(value > 1 ? value - 1 : 1)}>
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>

        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKTiBrfrt17VYTi9Z_hj1kwma6in2xyietuoinZiyETPGOUgwkQD7bK8cPPuZUKT1FZUEdMMdbBWbfazibSveODILwLaQvMyvmNsOQu3n7"
          alt="images examples  1 "
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1> {data.name} </h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            {' '}
            ${data.price} * {value}{' '}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">US${totalPrice}</h4>
        </div>

        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
