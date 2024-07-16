import React from 'react';
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaWhatsapp,
    FaPhone,
    FaTwitter
} from "react-icons/fa";
import { FaMapLocation } from 'react-icons/fa6';
import Logo from "../../assets/logo/logo.jpg";

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* Shop Details */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold uppercase'> Prime Stack Labs</h1>
                        <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium facere laudantium officia quibusdam ut rem beatae, exercitationem aliquam dolore consequatur
                            laboriosam! Quod minima voluptatem ipsa,
                            consequuntur temporibus itaque corporis veritatis?
                        </p>
                        <div className=''>
                            <p className='flex items-center gap-2'>
                                <FaPhone />
                                +94 11 265 2651
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                {" "}
                                <FaMapLocation /> Moratuwa, Western Provice Sri Lanka 10400.
                            </p>

                        </div>
                    </div>
                    {/* Footer Links */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Locations Us</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Become an Affiliate</li>
                                    <li>Privacy Policy</li>
                                    <li>Termers and Conditions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Social Meadia */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                            <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                            <FaTwitter className='text-3xl hover:scale-105 duration-300' />
                            <FaWhatsapp className='text-3xl hover:scale-105 duration-300' />
                            <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                        </div>
                        <div className='items-center max-w-[150px]'>
                            <img src={Logo} alt="logo of the shop" />
                        </div>
                    </div>
                </div>
                {/* Copyright section */}
                <p className='text-white text-center mt-8 pt-8 border-t-2'>
                    Copyright &copy; 2024 Prime Stack Labs;
                </p>
            </div>
        </div>
    )
}

export default Footer
