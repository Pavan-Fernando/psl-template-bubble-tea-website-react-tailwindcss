import React from 'react';
import BannerImage from '../../assets/website/banner.png';
import AppStoreImage from '../../assets/website/app_store.png';
import PlayStoreImage from '../../assets/website/play_store.png';
import { motion } from "framer-motion";

const BannerStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100%",
    // width: "100%"
}

const Banner = () => {
    return (
        <div className='container my-14'>
            <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
                <div>
                    <div className='space-y-6 max-w-xl mt-[50px]'>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.2
                            }}
                            className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.3
                            }}
                            className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti alias atque quas obcaecati.</motion.p>
                        {/* App Store and Playstore download links */}
                        <div className='flex justify-center items-center gap-4'>
                            <a
                                href="#AppStore"
                                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                                <motion.img 
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4
                                }}
                                src={AppStoreImage} alt="App Store Link Image" />
                            </a>
                            <a
                                href="#PlayStore"
                                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                                <motion.img
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.5
                                }}
                                 src={PlayStoreImage} alt="Play Store Link Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
