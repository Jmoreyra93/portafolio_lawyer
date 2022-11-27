import React from 'react';
import PhotoLawyer from '../assets/photo1.jpeg';
import Pulse from 'react-reveal/Pulse';


const About = () => {

  return (

    <>

      <div name='about' className='w-full py-16 bg-[#fff] text-stone-800 max-lg:p-16'>
        <div className='flex flex-col justify-center items-center w-full h-full '>

          <Pulse>
            <div className='max-w-[900px] w-full grid bg-[#DBC48E] shadow-md hover:shadow-lg rounded-md	max-lg:pr-0 sm:grid-cols-2  pr-4'>

              <div className='sm:text-right font-bold'>
                <img className='w-96' src={PhotoLawyer} alt="HTML icon" />

              </div>
              <div className='text-[#0d1b2a] bg-[#DBC48E]  flex flex-col justify-center self-center'>
                <p className='text-4xl pb-4 font-montserrat inline max-lg:p-4'>
                  Sobre mi
                </p>
                <p className='text-xl text-[#0d1b2a] font-montserrat max-lg:p-4'>Abogada recibida en la Universidad de Buenos Aires (UBA) con una formación amplia y sólida en Derecho Penal. Ha realizado posgrado en Derecho Penal y Cibercrimen específicamente, formación y perfeccionamiento en litigación penal y maestría actualmente en el tema. Posee junto al equipo de trabajo que la acompaña, una responsable aptitud en asesoramiento y representación por la vocación que les impulsa en la profesión. </p>
              </div>
            </div>
          </Pulse>

        </div>
      </div>
      <div className='bg-[#fff]'>
        <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
          <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#DBC48E" />
          <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#2E2E2E" />
        </svg>
      </div>



    </>

  );
};

export default About;
