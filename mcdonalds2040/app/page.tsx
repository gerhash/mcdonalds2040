'use client' 
import React, { useEffect, useState } from 'react'
import { logo, wrap, burger, cola,fries} from './images/index'
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { log } from 'console';
import Offer from "./components/Offer";
import Menu from './components/Menu';
import { IoLogoBehance,IoLogoInstagram,IoLogoLinkedin,IoLogoGithub,IoLogoDribbble } from "react-icons/io5";


export default function Home() {

 


  return (
   <main className="">
    <Parallax pages={5} className='flex justify-center p-[20px]'>
                <ParallaxLayer offset={0} speed={0} className='flex justify-center'>
                    <div 
                    className=' flex items-center justify-center'> 
                        <Image src={logo}  alt="McDonald's" className='w-[150px] h-[130px]'/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.45} speed={1.3} className='flex justify-center'>
                     <Image src={wrap}  alt="McDonald's" className='w-[360px] h-[320px] translate-x-[300px]  translate-y-[520px] rotate-[-52deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.65} speed={0.9} className='flex justify-center'>
                     <Image src={burger}  alt="McDonald's" className='w-[250px] h-[230px] -translate-x-[500px]  translate-y-[400px] rotate-[34deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={1.1} speed={0.2} className='flex justify-center'>
                    <h1                     className='text-transparent text-[100px] font-semibold bg-clip-text bg-gradient-to-r from-[#886AB5] to-[#C1FF72]  '>Goditi le offerte</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1.1} speed={1.3} className='flex justify-center'>
                     <Image src={cola}  alt="McDonald's" className='w-[350px] h-[330px] -translate-x-[400px]  -translate-y-[100px] rotate-[-2deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.3} className='flex justify-center'>
                     <Image src={fries}  alt="McDonald's" className='w-[200px] h-[180px] translate-x-[500px] -translate-y-[200px] rotate-[12deg]'/>
                </ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={1.3} className='flex justify-center p-[50px]'>
                    <Offer />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2} className='flex justify-center p-[50px]'>
                  <h1 className='text-transparent text-[100px] font-semibold bg-clip-text bg-gradient-to-r from-[#886AB5] to-[#C1FF72] -translate-y-[800px] '>Menu</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.5} className='flex justify-center p-[50px]'>

                <Menu />

                </ParallaxLayer>
               
               
               
               
               
               
               
               
               
               
                <ParallaxLayer offset={3} speed={1.3} className='flex justify-center p-[50px]'>
                <h1 className='text-transparent text-[70px] font-semibold bg-clip-text bg-[#886AB5] translate-x-[180px]'>Per Mangiare Gratis</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.5} className='flex justify-center p-[50px]'>
                <h1 className='text-transparent text-[100px] font-semibold bg-clip-text bg-white -translate-x-[200px] translate-y-[200px]'>Seguimi Su</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={3.5} speed={0.8} className='flex justify-center p-[50px]'>
                    <div className='flex justify-center gap-4'>
                        <IoLogoLinkedin size={120} color="white"/>
                        <IoLogoGithub size={120} color="white"/>
                        <IoLogoInstagram size={120} color="white"/>
                        <IoLogoBehance size={120} color="white"/>
                        <IoLogoDribbble size={120} color="white"/>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.8} speed={0.5} className='flex justify-center p-[50px]'>
                <h1 className='text-white text-[70px] font-semibold'>Gerardo D'Agostino</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={3.9} speed={1} className='flex justify-center p-[50px]'>
                <h1 className='text-white text-[120px] font-semibold'>Other Works</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={3.9} speed={0} className='text-white flex justify-center items-center'>
                          VORTICE
                </ParallaxLayer>
            </Parallax>
           
  </main>
  );
}
