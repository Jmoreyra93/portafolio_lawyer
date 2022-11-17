import React from 'react';
import Fade from 'react-reveal/Fade';

import ModalFront from "./ModalFront";
import ModalBack from "./ModalBack";
import ModalData from "./ModalData";
import Banner from '../assets/diseño gráico.png';


const Modal = () => {
    return (


        <div name='Modal' className='w-full bg-[#f6f5e2] text-stone-800'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
                <div>
                <p className='text-4xl font-bold inline border-b-4 border-orange-200 text-stone-800 mb-22'>Servicios</p>
                    {/* <p className='text-[#829e7e] py-4'>These are the technologies I've worked with</p> */}
                </div>
                <img className='mx-auto ' src={Banner} alt="HTML icon" />

                <Fade>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
                        <ModalFront />
                        <ModalBack />
                        <ModalData />
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default Modal;
