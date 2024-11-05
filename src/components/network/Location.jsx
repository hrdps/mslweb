import React, { useState, useEffect, useCallback } from 'react';
import { RiMapPin2Fill } from '@remixicon/react';
import network_image from '../../assets/India_map.png';
import map_pin from '../../assets/icons/map_pin.png';
import msl_img from '../../assets/msl-logo-black.png';
import './Location.css';

const Location = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preSlide, setPreSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const pageCount = 8;
  const icoUrl = [
    '/src/assets/icons/Mumbai_ico.png',
    '/src/assets/icons/Delhi_ico.png',
    '/src/assets/icons/bang_ico.png',
    '/src/assets/icons/Chen_ico.png',
    '/src/assets/icons/Hyd_ico.png',
    '/src/assets/icons/Ahm_ico.png',
    '/src/assets/icons/Pune_ico.png',
    '/src/assets/icons/kol_ico.png',
  ];
  const scrollToSlide = useCallback(
    (index) => {
      if (index < 0 || index >= pageCount || isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setPreSlide(index);
      var elementCur = document.getElementById(`button${index}`);
      var elementPre = document.getElementById(`button${preSlide}`);
      var elementCurImg = document.getElementById(`bImg${index}`);
      var elementPreImg = document.getElementById(`bImg${preSlide}`);

      setPreSlide(index);
      setTimeout(() => {
        setIsAnimating(false);

        elementCur.style.backgroundColor = '#1f1f4da6';
        elementPre.style.backgroundColor = '#ffffff7d';
        elementCur.querySelector('span').style.color = '#ffffffb1';
        elementPre.querySelector('span').style.color = '#000000cc';
        elementCurImg.style.filter = 'invert(100%)';
        elementPreImg.style.filter = 'invert(0%)';
      }, 900);
    },
    [isAnimating, pageCount]
  );

  const handleWheel = useCallback(
    (event) => {
      if (isAnimating) return;
      if (event.deltaY > 0) {
        scrollToSlide(currentSlide + 1);
      } else {
        scrollToSlide(currentSlide - 1);
      }
    },
    [currentSlide, isAnimating, scrollToSlide]
  );

  const handleKeydown = useCallback(
    (event) => {
      if (event.key === 'ArrowUp') {
        scrollToSlide(currentSlide - 1);
      } else if (event.key === 'ArrowDown') {
        scrollToSlide(currentSlide + 1);
      }
    },
    [currentSlide, scrollToSlide]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleWheel, handleKeydown]);

  return (
    <>
      <div id='white_network'>
        <img id='img_white' src={network_image} />
        <img
          id='mummap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(0);
          }}
        />

        <img
          id='delmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(1);
          }}
        />
        <img
          id='bangmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(2);
          }}
        />
        <img
          id='chenmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(3);
          }}
        />
        <img
          id='hydmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(4);
          }}
        />
        <img
          id='ahmmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(5);
          }}
        />
        <img
          id='punmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(6);
          }}
        />
        <img
          id='kolmap'
          className='msl_map'
          src={msl_img}
          onClick={() => {
            scrollToSlide(7);
          }}
        />
      </div>
      <div id='vslider'>
        <div
          id='fsvs-body'
          style={{
            transform: `translateY(-${currentSlide * 100}vh)`,
            transition: 'transform 0.9s ease-in-out',
          }}>
          <div id='backone' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Mumbai
            </h2>
          </div>
          <div id='backtwo' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Delhi
            </h2>
          </div>
          <div id='backthree' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Bangalore
            </h2>
          </div>
          <div id='backfour' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Chennai
            </h2>
          </div>
          <div id='backfive' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Hyderabad
            </h2>
          </div>
          <div id='backsix' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Ahmedabad
            </h2>
          </div>
          <div id='backseven' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Pune
            </h2>
          </div>
          <div id='backeight' className='page'>
            <h2>
              <RiMapPin2Fill size={40} className='pinico' />
              Kolkata
            </h2>
          </div>
        </div>
        <div className='pagination'>
          {[...Array(pageCount)].map((_, index) => (
            <button
              className='pagiButton'
              id={`button${index}`}
              key={index}
              data-slide={index}
              onClick={() => scrollToSlide(index)}>
              <span>
                <img id={`bImg${index}`} src={icoUrl[index]} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Location;
