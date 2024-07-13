import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from "framer-motion";
// import Logo from '../../assets/logo/logo.jpg';

const NavBar = ({ sideBar, setSideBar}) => {
    return (
        <nav className='absolute top-0 left-0 w-full pt-10 text-white z-40'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    {/* logo section */}
                    {/* <img src={Logo} alt="main-logo" className='max-w-[50px] max-h-[50px]'/> */}
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2
                        }}
                        className='text-2xl font-semibold uppercase'>
                        <span className='text-primary'>PSL </span>
                        BUBBLE
                        <span className='text-primary'> TEA </span>
                    </motion.h1>
                    {/* menu section */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2
                        }}
                        onClick={() => setSideBar(!sideBar)}
                        >
                        <GiHamburgerMenu className='text-3xl cursor-pointer'></GiHamburgerMenu>
                    </motion.div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar
