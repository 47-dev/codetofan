import React from 'react';
import Slider from 'react-slick';
import { data } from './data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const responsiveness = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    },
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900,
  lazyLoad: true,
  responsive: responsiveness
};

function Hero() {
  return (
    <div className='bg-slate-900 overflow-hidden pb-10'>
      <div className='md:text-5xl font-bold text-violet-500 flex justify-center mt-4 mb-4'>
        Roadmaps/Courses
      </div>
      <Slider {...settings}>
        {data.map(item => (
          <div className="card my-4 pl-4">
            <div className="w-[98%] h-auto rounded-lg flex flex-col gap-4 p-3 bg-violet-500 shadow-md">
              <img
                src={item.linkImg}
                alt={item.title}
                className="rounded-md w-full h-auto"
              />
              <h1 className="font-black text-lg font-mono text-white">{item.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
