import React, { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://res.cloudinary.com/dvvzlx2na/image/upload/v1686835424/World%20of%20Warcraft%20-%20Items/Sliders/wow-canvas-art-banners-carousel-desktop-RD02-1600x500_yis7qy.webp",
        "https://res.cloudinary.com/dvvzlx2na/image/upload/v1686835424/World%20of%20Warcraft%20-%20Items/Sliders/WoW_NewPlayer_Banners_2280x500_dssysz.webp",
        "https://res.cloudinary.com/dvvzlx2na/image/upload/v1686592679/World%20of%20Warcraft%20-%20Items/Sliders/WOW_10_Trial_Sale_pve_stat_enus_1920x1080_Phoenix_mdp7yx.webp",
        "https://res.cloudinary.com/dvvzlx2na/image/upload/v1686592679/World%20of%20Warcraft%20-%20Items/Sliders/WoW_101-LaunchBanners_PLauncher_Franchise_1920x1080_sinxvs.webp",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    };
    console.log(currentSlide)
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className=" w-screen h-full object-cover" src={data[0]} alt="ImgOne" loading="priority"/>
                <img className=" w-screen h-full object-cover" src={data[1]} alt="ImgTwo"/>
                <img className=" w-screen h-full object-cover" src={data[2]} alt="ImgThree"/>
                <img className=" w-screen h-full object-cover" src={data[3]} alt="ImgFour"/>
            </div>
            <div className="h-[0px] absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowLeft />
                </div>
                <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner