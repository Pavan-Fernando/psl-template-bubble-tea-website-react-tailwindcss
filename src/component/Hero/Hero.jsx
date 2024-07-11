import React from 'react';
import BgImage from '../../assets/bg.png';
import MainImage from '../../assets/main_image2.png';


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
                {/* Hero section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 place-items-center min-h-[850px]">
                    {/* text content section */}
                    <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
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
                        <img src={MainImage} alt="main image" className='z-40 h-[500px] md:h-[700px] img-shadow'/>
                        {/* <div className="h-[180px] w-[180px] absolute top-24 right-20  border-primary border-[20px] rounded-full z-10"></div> */}
                        <div className='absolute top-[140px] left-[500px] z-[1]'>
                            <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>Prime Stack Labs</h1>
                        </div>
                    </div>
                    {/* third div section */}
                    {/* <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                        <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">PSL Bubble Tea</h1>
                         <div className="relative">
                            <div className="relative z-10 space-y-4">
                                <h1 className="text-2xl">Bubble Tea With PSL,</h1>
                                <h1 className="text-sm opacity-55 leading-loose">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quis porro eius, consequuntur id a laboriosam quae harum corporis. 
                                    Harum eius et repellat libero dignissimos nesciunt ea temporibus quasi dolor! Harum.
                                </h1>
                            </div>
                            <div className="absolute -top-6 -left-10 w-[250px] h-[200px] bg-gray-700/25"></div>
                        </div>
                    </div> */}
                </div>
                
            </div>
            
        </section>
    </main>
  );
};

export default Hero;
