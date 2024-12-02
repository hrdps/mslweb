import React, { useEffect, useState } from 'react';
import './Hometwo.css';
import Header from '../layout/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hometwo = () => {
  const [cimages, setCimages] = useState([]);
  const slidersettings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop through images
    variableWidth: true,
    slidesToShow: 1, // Number of images visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  useEffect(() => {
    const getClientele = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const apiToken = import.meta.env.VITE_API_TOKEN;
      const response = await fetch(`${apiUrl}/clientele?_embed`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const cimagesarray = [];
      data.map((value) => {
        cimagesarray.push(value._embedded['wp:featuredmedia'][0].link);
      });
      setCimages(cimagesarray);
    };
    getClientele();
  }, []);
  return (
    <>
      <Header />
      <div id='bgContainer'>
        <div>
          <video autoPlay loop muted id='bgImage'>
            <source src='./assets/new_bg.mp4' type='video/mp4' />
          </video>
        </div>
        <div id='entity'></div>
        <div id='network'>
          <img src='./assets/network.gif' />
        </div>
        <div id='services'>
          <img src='./assets/services.jpeg' />
        </div>
        <div id='people'>
          <video autoPlay loop muted id='peopleBg'>
            <source src='./assets/people_video.mov' type='video/mp4' />
          </video>
        </div>
        <div id='work'>
          <img src='./assets/workbg.gif' />
        </div>
        <div id='awards'></div>
        <div id='clientele'>
          <div id='cslider'>
            {cimages.length !== 0 ? (
              <Slider {...slidersettings}>
                {cimages.map((src, index) => (
                  <img
                    className='csliderImg'
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />
                ))}
              </Slider>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div id='lights'>
          <span id='one'></span>
          <span id='two'></span>
          <span id='three'></span>
          <span id='four'></span>
        </div>
      </div>
    </>
  );
};

export default Hometwo;
