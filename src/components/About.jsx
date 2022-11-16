import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import PhotoLawyer from '../assets/photo1.jpeg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f6f5e2] text-stone-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <LightSpeed >

            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-orange-200'>
                Sobre mi
              </p>
            </div>
          </LightSpeed >
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <LightSpeed right>

            <div className='sm:text-right text-4xl font-bold'>
              <img className='w-80 mx-auto' src={PhotoLawyer} alt="HTML icon" />

            </div>

          </LightSpeed>
          <LightSpeed left>

            <div className='text-[#0d1b2a]'>
              <p>Abogada recibida en la Universidad de Buenos Aires (UBA) con una formación amplia y sólida en Derecho Penal. Ha realizado posgrado en Derecho Penal y Cibercrimen específicamente, formación y perfeccionamiento en litigación penal y maestría actualmente en el tema. Posee junto al equipo de trabajo que la acompaña, una responsable aptitud en asesoramiento y representación por la vocación que les impulsa en la profesión. </p>
            </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
};

export default About;
