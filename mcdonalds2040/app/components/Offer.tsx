import React, { useRef }  from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slider1,slider2,slider3 } from '../images';
import Image from 'next/image';


  
const Offer = () => {
        const images = [
         slider1,
          slider2,
          slider3,
        ];
      
        const sliderRef = useRef<Slider>(null);

        const settings = {
          dots: true,
          infinite: true,
          speed: 200,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

        return (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[950px] h-[650px] overflow-hidden border-4 border-[#886AB5] rounded-2xl  ">
            <Slider {...settings}  ref={sliderRef} className="object-cover  ">
                {images.map((image, index) => (
                <div key={index} className="">
                    <Image src={image} alt={`slide-${index + 1}`}  />
                </div>
                ))}
            </Slider>
            </div>
            <div className='text-white mt-10 flex gap-[200px] translate-y-[50px] '>
                <div className="p-4 bg-[#886AB5] rounded-full" onClick={() => sliderRef.current?.slickPrev()}>
                    <svg className="w-16 h-16 transform " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>

                </div>
                <div className="p-4 bg-[#886AB5] rounded-full"  onClick={() => sliderRef.current?.slickNext()}>
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>

          </div>
        );
      };

export default Offer