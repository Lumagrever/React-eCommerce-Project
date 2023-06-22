import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img
            className="w-20"
            src={
              "https://res.cloudinary.com/dvvzlx2na/image/upload/v1686628645/World%20of%20Warcraft%20-%20Items/Logo/World-of-Warcraft-Simple-Logo_jt0bpw.png"
            }
            alt="logoWow"
          />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img
              className="w-10"
              src="https://res.cloudinary.com/dvvzlx2na/image/upload/v1686796660/World%20of%20Warcraft%20-%20Items/Imagenes-variadas/Bag-Empty_m4qkep.png"
              alt="cartImg"
            />
            <span className="absolute w-10 top-3 left-0 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img className="w-11" src="https://res.cloudinary.com/dvvzlx2na/image/upload/v1686631715/World%20of%20Warcraft%20-%20Items/Imagenes-variadas/cart_ouv2oo.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
