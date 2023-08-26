import React, { useState } from 'react';
import Hero from './components/hero';
import Slider from 'react-slick';
import Courses from './components/courses';
import Blogs from './components/blogs'; // Import your Blogs component
import Tools from './components/tools'; // Import your Tools component
import { icondata } from './components/iconsdata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Footer from './components/footer';

function App() {
  const [showCourses, setShowCourses] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false); // State for Blogs section
  const [showTools, setShowTools] = useState(false); // State for Tools section

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    pauseOnHover: true,
    draggable: true,
    responsive: [
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
          slidesToShow: 3, // Changed to show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCoursesClick = () => {
    setShowCourses(true);
    setShowBlogs(false);
    setShowTools(false);
  };

  const handleBlogsClick = () => {
    setShowCourses(false);
    setShowBlogs(true);
    setShowTools(false);
  };

  const handleToolsClick = () => {
    setShowCourses(false);
    setShowBlogs(false);
    setShowTools(true);
  };

  const handleHomeClick = () => {
    setShowCourses(false);
    setShowBlogs(false);
    setShowTools(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div className='flex items-center justify-center bg-[#FFAE2D] font-bold font-link'>Website is in Devlopment</div>
      <nav className='flex flex-col md:flex-row justify-around items-center h-20 bg-neutral-900 sticky top-0 z-10'>
        <div className='flex items-center'>
          <div className='nav-logo font-bold text-3xl text-white ml-6 hover:cursor-pointer'>
            <span className='text-blue-400'>code</span>tofan
          </div>
        </div>
        <div className='nav-links flex space-x-4 md:space-x-11 text-white font-bold cursor-pointer hover:b '>
          <div className='nav-link' onClick={handleHomeClick}>Home</div>
          <div className='nav-link' onClick={handleCoursesClick}>Courses/Roadmaps</div>
          <div className='nav-link' onClick={handleBlogsClick}>Blogs</div>
          <div className='nav-link' onClick={handleToolsClick}>Tools</div>
        </div>
      </nav>
      <div className='overflow-hidden'>
        {showCourses ? (
          <Courses />
        ) : showBlogs ? (
          <Blogs />
        ) : showTools ? (
          <Tools />
        ) : (
          <>
            <div className='mt-1 px-4 mb-3'>
              <Slider {...settings} className='mt-6'>
                {icondata.map((item, index) => (
                  <div key={index} className="flex items-center justify-center p-3">
                    <img
                      src={item.images}
                      alt={item.images}
                      className="rounded-md w-12 h-12 mx-auto"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className='flex flex-col font-[popins] items-center justify-center bg-gradient-to-r from-violet-500 to-blue-500 md:h-[34rem] h-80 border-dashed border-2 border-t-8 border-r-0 border-b-0 border-l-0 border-white'>
              <h1 className='text-white font-bold text-3xl md:text-6xl max-w-xl text-center font-link mt-0'>
                Learn to Code Faster and for Free!
              </h1>
              <p className='text-white text-base md:text-lg mt-2 md:mt-4 max-w-md text-center font-link'>
                Elevate your coding skills with our seamless learning and vibrant community.
              </p>
            </div>
            <Hero />
          </>
        )}

      </div>
      <Footer />
    </div>
  );
}

export default App;
