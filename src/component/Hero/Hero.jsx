import React from 'react';
import BgImage from '../../assets/bg.png';
import MainImage from '../../assets/main_image2.png';
import NavBar from '../NavBar/NavBar';
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from "react";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}


const Hero = () => {


    const [sideBar, setSideBar] = useState(false);

    return (
        <main style={bgImage}>
            <section className="relative min-h-[750px] w-full" >
                <div className="container">
                    {/* Nav Bar section */}
                    <NavBar sideBar={sideBar} setSideBar={setSideBar} />
                    {/* Hero section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 place-items-center min-h-[850px]">
                        {/* text content section */}
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 max-w-[475px]">
                            <motion.h1
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1
                                }}
                                className="text-7xl font-bold leading-tight ml-14">PSL Bubble Tea</motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2
                                }}
                                className="relative">
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl">Bubble Tea With PSL,</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quis porro eius, consequuntur id a laboriosam quae harum corporis.
                                        Harum eius et repellat libero dignissimos nesciunt ea temporibus quasi dolor! Harum.
                                    </h1>
                                </div>
                                <div className="absolute -top-6 -left-4 w-[250px] h-[200px] bg-gray-700/25"></div>
                            </motion.div>
                        </div>
                        {/* Main Image Section */}
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4
                                }}
                                src={MainImage} alt="main image" className='relative z-40 h-[800px] md:h-[700px] img-shadow left-[55px]' />
                            {/* <div className="h-[180px] w-[180px] absolute top-24 right-20  border-primary border-[20px] rounded-full z-10"></div> */}
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2
                                }}
                                className='absolute top-[350px]  z-[1]'>
                                <h1 className='text-[40px] scale-100 font-bold text-lightOrange/40 leading-none w-[1px]'>Prime Stack Labs Bubble Shop</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* sider menue section */}
                {
                    sideBar && (
                        <motion.div
                            initial={{ x: "100%" }}
                            whileInView={{ x: 0 }}
                            className='absolute top-0 right-0 w-[140px] h-full 
                        bg-gradient-to-b from-primary/80 to-primary/80 backdrop-blur-sm z-10'>
                            <div className='w-full h-full flex justify-center items-center '>
                                <div className='flex flex-col justify-center items-center gap-6 text-white'>
                                    {/* line */}
                                    <div className='w-[1px] h-[70px] bg-white'></div>
                                    {/* social links */}
                                    <div className='inline-block p-2 rounded-full cursor-pointer border-white'>
                                        <FaFacebook className='text-2xl' />
                                    </div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border-white'>
                                        <FaTwitter className='text-2xl' />
                                    </div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border-white'>
                                        <FaInstagram className='text-2xl' />
                                    </div>
                                    <div className='w-[1px] h-[70px] bg-white'></div>
                                </div>
                            </div>

                        </motion.div>
                    )
                }

            </section>
        </main>
    );
};

export default Hero;
