import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  console.log(userInfo)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              className="w-20"
              src={
                "https://res.cloudinary.com/dvvzlx2na/image/upload/v1686628645/World%20of%20Warcraft%20-%20Items/Logo/World-of-Warcraft-Simple-Logo_jt0bpw.png"
              }
              alt="logoWow"
            />
          </div>
        </Link>
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
          <Link to="/cart">
            <div className="relative">
              <img
                className="w-10"
                src="https://res.cloudinary.com/dvvzlx2na/image/upload/v1687563505/World%20of%20Warcraft%20-%20Items/Imagenes-variadas/Bag-WOW_y3c3re.png"
                alt="cartImg"
              />
              <span className="text-white absolute w-12 top-3 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
          <img
            className="w-8 h-8 rounded-full"
            src={
              userInfo?userInfo.image : "https://res.cloudinary.com/dvvzlx2na/image/upload/v1687586368/World%20of%20Warcraft%20-%20Items/Imagenes-variadas/User-Logo_yiwqgi.png"
            }
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
