import React from 'react'
import { ecoLight, paymentLogo } from '../assets'
import {BsPersonFill,BsPaypal } from "react-icons/bs"
import {MdLocationOn } from "react-icons/md"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
    FaGithub,
    
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'> 
            <div>
                <img className='w-32 pl-0' src={ecoLight} alt="ecoLight" />
                <p className='text-white text-sm tracking-wide'>THT.com</p>
                <img className='w-56' src={paymentLogo} alt="paymentLogo" />
                <div className='flex gap-5 pt-4 text-lg text-gray-400'>
                    <FaGithub className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaYoutube className='  hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>(293)street,SawMahar Road</p>
                    <p>East Dagon Tsp</p>
                    <p>Phone:09770781895</p>
                    <p>Email:thanthtettintht@gmail.com</p>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <div className='flex flex-col gap-2 text-base'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                        <BsPersonFill />
                        </span>
                        my account
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                        <BsPaypal />
                        </span>
                        checkout
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                        <FaHome />
                        </span>
                        order tracking
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                        <MdLocationOn />
                        </span>
                        help & support
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <input
                className='bg-transparent border px-4 py-2 text-sm'
                placeholder='email'
                type="text"/>
                <button
                 className='text-sm border text-white border-t-0 hover:bg-gray-900
                 active:bg-white active:text-black'
                >Subscribe</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer