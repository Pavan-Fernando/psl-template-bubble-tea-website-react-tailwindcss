import React from 'react';
import { delay, motion } from "framer-motion";
import ProductOne from '../../assets/bubble/1.png';
import ProductTwo from '../../assets/bubble/2.png';
import ProductThree from '../../assets/bubble/3.png';
import ProductFour from '../../assets/bubble/4.png';

const ProductData = [
    {
        id: 1,
        image: ProductOne,
        title: "Chocolate Milk Shake with Bubbles",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Est, Lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        image: ProductTwo,
        title: "Vanila Milk Shake with Bubbles",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Est, Lorem ipsum dolor sit amet"
    },
    // {
    //     id: 3,
    //     image: ProductThree,
    //     title: "Americano Coffice with Bubble",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Est, Lorem ipsum dolor sit amet"
    // },
    {
        id: 4,
        image: ProductFour,
        title: "Bubble Tea with Cow milk",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Est, Lorem ipsum dolor sit amet"
    }
]

const cardVariants = {
    hidden: {
        opacity: 0, y: 20
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        }
    }
} 

const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4
        }
    }
}

const Products = () => {
    return (
        <div className='container my-16 space-y-4'>
            {/* header section */}
            <div className='text-center max-auto space-y-2'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2
                    }}
                    className='text-3xl font-bold text-lightGray'>
                    Fresh and<span className='text-primary'> Tasty Bubble Tea</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.6
                    }}
                    className='mx-16 text-sm opacity-50' >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Est, nemo amet.Inventore pariatur nesciunt,
                    ducimus aliquam eos quo fuga necessitatibus.
                </motion.p>
            </div>
            {/* card section */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: 0.8 }}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {ProductData.map((product) => (
                    <motion.div 
                    variants={cardVariants}
                    className='text-center p-4 space-y-6'>
                        <img
                            src={product.image}
                            alt="product image"
                            className='img-shadow2 max-w-[200px] max-h-[250px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold text-primary'>{product.title}</h1>
                            <p className='text-darkGray'>{product.description}</p>
                        </div>
                    </motion.div>

                ))}
            </motion.div>
        </div >

    )
}

export default Products
