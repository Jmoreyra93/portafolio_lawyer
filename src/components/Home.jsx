import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FFD700]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FFD700]'>
        DRA. SPAGNA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#0d1b2a]'>
          Abogada
        </h2>
        
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFD700] hover:border-[#EEE8AA]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
