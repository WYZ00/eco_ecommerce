import React from "react";
import { cartImg, ecoDark } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const productData = useSelector((state) => state.eco.productData);
  const userInfo = useSelector((state)=>state.eco.userInfo);
  // console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={ecoDark} alt="" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300
                ">
              Home
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300
                ">
              Pages
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300
                ">
              Shop
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300
                ">
              Element
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300
                ">
              Blog
            </li>
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <img className="w-14" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-6 left-3.5 text-sm flex items-center justify-center font-semibold text-red-500">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={"/login"}>
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo?userInfo.image
                : "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              }
              alt=""
            />
          </Link>
          {
            userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
