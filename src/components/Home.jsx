import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <>
      <div name='home' className='w-full h-screen '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#FBBF24]'>
            DRA. SPAGNA
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#0d1b2a]'>
            Abogada
          </h2>

          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFD700] hover:border-[#EEE8AA]'>
              Conocé más
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-transparent'>
        <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
          <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#DBC48E" />
          <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#DDD4C3" />
        </svg>
      </div>

    </>
  );
};

export default Home;
