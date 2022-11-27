import React from 'react';




const Home = () => {

  return (
    <>
      <div data-scroll-container name='home' className='w-full h-screen '>
        {/* Container */}
        <div data-scroll-section className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed='4' className='text-4xl sm:text-7xl  text-[#333]'>
            DRA. SPAGNA
          </h1>
          <h2 data-scroll data-scroll-delay='0.09' data-scroll-speed='4' className='text-4xl sm:text-7xl  text-[#333]'>
            Abogada
          </h2>
          <h3 data-scroll data-scroll-delay='0.07' data-scroll-speed='4' className='text-2xl sm:text-4xl  text-[#333]'>
            penalista
          </h3>


        </div>
      </div>


    </>
  );
};

export default Home;
