import React from 'react';
import BgImage from '../../assets/bg.png';
import MainImage from '../../assets/main_image2.png';
import NavBar from '../NavBar/NavBar';


const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}


const Hero = () => {
  return (
    <main style={bgImage}>
        <section className="min-h-[750px] w-full" > 
            <div className="container">
                {/* Nav Bar section */}
                <NavBar />
                {/* Hero section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 place-items-center min-h-[850px]">
                    {/* text content section */}
                    <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 max-w-[475px]">
                        <h1 className="text-7xl font-bold leading-tight ml-14">PSL Bubble Tea</h1>
                        <div className="relative">
                            <div className="relative z-10 space-y-4">
                                <h1 className="text-2xl">Bubble Tea With PSL,</h1>
                                <h1 className="text-sm opacity-55 leading-loose">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quis porro eius, consequuntur id a laboriosam quae harum corporis. 
                                    Harum eius et repellat libero dignissimos nesciunt ea temporibus quasi dolor! Harum.
                                </h1>
                            </div>
                            <div className="absolute -top-6 -left-4 w-[250px] h-[200px] bg-gray-700/25"></div>
                        </div>
                    </div>
                    {/* Main Image Section */}
                    <div  className="relative">
                        <img src={MainImage} alt="main image" className='relative z-40 h-[800px] md:h-[700px] img-shadow left-[50px]'/>
                        {/* <div className="h-[180px] w-[180px] absolute top-24 right-20  border-primary border-[20px] rounded-full z-10"></div> */}
                        <div className='absolute top-[350px]  z-[1]'>
                            <h1 className='text-[40px] scale-100 font-bold text-white/10 leading-none w-[1px]'>Prime Stack Labs Bubble Shop</h1>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    </main>
  );
};

export default Hero;
