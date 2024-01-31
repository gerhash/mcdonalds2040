'use client' 
import React from 'react'
import { logo, wrap, burger, cola,fries} from '../images/index'
import Image from 'next/image';

const Hero: React.FC = () => {
 
    return (
      <div className='flex flex-col content-center items-center '>
          <div className='h-[900px] flex justify-center items-center'>
            <Image src={logo} alt="McDonald's" className='w-[220px] h-[200px]'/> 
          </div>
          <div className='flex flex-col w-full items-center'>
              <div className='flex '>
                <Image src={wrap} alt="McWrap" className='w-[330px] h-[300px] origin-center rotate-30 mr-[700px] -translate-y-[200px]'/> 
                <Image src={fries} alt="Stick" className='w-[220px] h-[200px] origin-center rotate-[-20deg] '/> 
              </div>
              <div className='flex  '>
                <Image src={burger} alt="Crispy" className='w-[220px] h-[200px] parallax-image'/> 
                <Image src={cola} alt="CocaCola" className='w-[220px] h-[200px] parallax-image'/> 
              </div>
       
          </div>
      </div>
    );
  };
  

export default Hero