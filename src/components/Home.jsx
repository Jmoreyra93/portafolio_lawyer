import React from 'react';




const Home = () => {

  return (
    <>
      <div  name='home' className='w-full h-screen '>
        {/* Container */}
        <div  className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
          <div className='  w-2/3 shadow-md hover:shadow-lg '>
            <h1   className='text-4xl sm:text-7xl  text-[#333] blur-none	'>
              DRA. SPAGNA
            </h1>
            <h2  className='text-4xl sm:text-7xl  text-[#333] blur-none	'>
              Abogada
            </h2>
            <h3 className='text-2xl sm:text-4xl  text-[#333] blur-none	'>
              penalista
            </h3>

          </div>


        </div>
      </div>


    </>
  );
};

export default Home;
