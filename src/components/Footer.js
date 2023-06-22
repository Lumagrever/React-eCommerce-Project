import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome} from "react-icons/fa"
import { ImGithub } from "react-icons/im";
import {MdLocationOn} from "react-icons/md"
import {BsPersonFill, BsPaypal} from "react-icons/bs"


const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-32' src='https://res.cloudinary.com/dvvzlx2na/image/upload/v1686592672/World%20of%20Warcraft%20-%20Items/Logo/blizz_blue_logo_ebbqaa.png' alt='LogoBlizzard'/>
                <p className='text-white text-sm tracking-wide'>© 2023 Blizzard Entertainment, Inc.</p>
                <img className='w-56' src='https://res.cloudinary.com/dvvzlx2na/image/upload/v1686871693/World%20of%20Warcraft%20-%20Items/Imagenes-variadas/Pay-methods2_jxrc6j.png' alt='PayMethods'/>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                    <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                </div>
            </div>
            <div>
                <h2 className='text-2x1 font-semibold text-white mb-4'>Contactanos</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Alton Parkway 16215 - Irvine | California</p>
                    <p>Celular: (800) 592-5499</p>
                    <p>E-mail: soporte@blizzard.com</p>
                </div>
            </div>
            <div>
                <h2 className='text-2x1 font-semibold text-white mb-4'>Perfil</h2>
                <div className='flex flex-col gap-2 text-base'>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><BsPersonFill/></span>{""}Mi cuenta</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><BsPaypal/></span>{""}Checkout</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><FaHome/></span>{""}Order tracking</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><MdLocationOn/></span>{""}Soporte</p>
                </div>
            </div>
            <div className='flex flex-col justifi-center'>
                <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type='text'/>
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Suscribite</button>
            </div>

        </div>
    </div>
  )
}

export default Footer