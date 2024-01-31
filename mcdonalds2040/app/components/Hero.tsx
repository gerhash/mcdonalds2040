'use client' 
import React from 'react'
import { logo, wrap, burger, cola,fries} from '../images/index'
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { log } from 'console';
import Offer from "../components/Offer";

const Hero: React.FC = () => {
 
    return (
      <div className='text-center'>
            <Parallax pages={4} className='flex justify-center '>
                <ParallaxLayer offset={0} speed={0} className=' flex items-center justify-center'>
                    <Image src={logo}  alt="McDonald's" className='w-[150px] h-[130px]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.45} speed={1.3} className='flex justify-center'>
                     <Image src={wrap}  alt="McDonald's" className='w-[360px] h-[320px] translate-x-[300px]  translate-y-[520px] rotate-[-52deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.65} speed={0.9} className='flex justify-center'>
                     <Image src={burger}  alt="McDonald's" className='w-[250px] h-[230px] -translate-x-[500px]  translate-y-[400px] rotate-[34deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={1.1} speed={0.2} className='flex justify-center'>
                    <h1 className='text-transparent text-[100px] font-semibold bg-clip-text bg-gradient-to-r from-[#886AB5] to-[#C1FF72]  '>Goditi le offerte</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1.1} speed={1.3} className='flex justify-center'>
                     <Image src={cola}  alt="McDonald's" className='w-[350px] h-[330px] -translate-x-[400px]  -translate-y-[100px] rotate-[-2deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.3} className='flex justify-center'>
                     <Image src={fries}  alt="McDonald's" className='w-[200px] h-[180px] translate-x-[500px] -translate-y-[200px] rotate-[12deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={1.3} className='flex justify-center'>
                    <Offer />
                </ParallaxLayer>
            </Parallax>
        
      </div>
    );
  };
  
export default Hero;