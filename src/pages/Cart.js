import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCart from "../components/ItemCart";
import { toast } from "react-toastify";

const Cart = () => {
  const productData = useSelector((state) => state.eco.productData);
  const userInfo = useSelector((state)=>state.eco.userInfo);
  const [totalAmount,setTotalAmount] = useState("");
  const [payNow,setPayNow] = useState(false);
  // eslint-disable-next-line 

  const handleCheckout=()=>{
    if(userInfo){
      setPayNow(true);
    }else{
      toast.error(`Please Sign In to Checkout`)
    }
  }

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  },[productData])

  // console.log(productData);
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtD0Fi-LtUz-VBtd_3LRZh-shI0nHwCEynw&usqp=CAU"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <ItemCart />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">$ {totalAmount}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                nisi.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total
            <span className="text-xl font-bold">$ {totalAmount}</span>
          </p>
          <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
