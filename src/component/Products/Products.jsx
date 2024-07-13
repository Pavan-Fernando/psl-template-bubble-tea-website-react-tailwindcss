import React from 'react';
import { motion } from "framer-motion";

const Products = () => {
    return (
        <div className='container my-16 space-y-4 text-center max-w-[700px]'>
            {/* header section */}
            <div className='max-w-lg max-auto space-y-2'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2
                    }}
                    className='text-center text-3xl font-bold text-lightGray'>
                    Fresh and<span className='text-primary'> Tasty Bubble Tea</span>
                </motion.h1>
                {/* card section */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.6
                    }}
                    className='text-sm opacity-50' >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Est, nemo amet.Inventore pariatur nesciunt,
                    ducimus aliquam eos quo fuga necessitatibus,
                </motion.p>
            </div>

        </div >
    )
}

export default Products
