import React from 'react';
import Map from '../../assets/map/map2.png';
import { delay, motion } from "framer-motion";

const Shop = () => {
    return (
        <div className='container my-36'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
                {/* form section */}
                <div className='space-y-8'>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='text-4xl font-bold text-darkGray font-serif'>Buy our bubble products from our branches</motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className='flex items-center gap-4'>
                        <input
                            type="text"
                            placeholder='Username'
                            className='input-style w-full lg:w-[450px]' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className='flex items-center gap-4'>
                        <input
                            type="email"
                            placeholder='Email'
                            className='input-style w-full lg:w-[450px]' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className='flex items-center gap-4'>
                        <textarea placeholder='Enter your message' className='input-style w-full lg:w-[450px]'></textarea>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className='float-right'>
                        <button className='custom_btn'>Contact Us</button>
                    </motion.div>
                </div>

                {/* maps on sri lanka map */}
                <div className='col-span-2'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1
                        }}
                        src={Map} 
                        alt="branches on sri lanka map" 
                        className='w-full sm:w-[500px] mx-auto opacity-90' />
                </div>
            </div>

        </div>
    )
}

export default Shop
