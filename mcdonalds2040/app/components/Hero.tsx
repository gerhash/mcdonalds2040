import React from 'react'
import { logo, wrap, burger, cola,fries} from '../images/index'
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
      <div className='flex flex-col content-center items-center '>
          <div className='h-[850px] h-[200px] flex justify-center items-center'>
            <Image src={logo} alt="McDonald's" className='w-[220px] h-[200px]'/> 
          </div>
          <div>


            <Image src={wrap} alt="McWrap" className='w-[220px] h-[200px]'/> 
            <Image src={burger} alt="Crispy" className='w-[220px] h-[200px]'/> 
            <Image src={cola} alt="CocaCola" className='w-[220px] h-[200px]'/> 
            <Image src={fries} alt="Stick" className='w-[220px] h-[200px]'/> 
          </div>
      </div>
    );
  };
  

export default Hero