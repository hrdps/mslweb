import React, { useEffect, useState } from 'react';
import './Hometwo.css';
import Video from '../../assets/background_new.webm';
import buildings from '../../assets/buildings.png';
import brands1 from '../../assets/brands1.gif';
import brands2 from '../../assets/brands2.gif';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import organic_svg from '../../assets/organic.png';
import pca_svg from '../../assets/pca-logo-white.png';
import msl_svg from '../../assets/msl-logo-white.png';
import twe_svg from '../../assets/2020-msl-logo-white.png';
import network from '../../assets/network.webm';
import impact from '../../assets/impact.png';
import network_image from '../../assets/network_msl.webp';
import {
  RiArrowDownDoubleLine,
  RiMenu4Line,
  RiCloseLine,
} from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const Home_ = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  const navigateToUrl = () => {
    window.open(
      'https://msl-git-main-reetiks-projects.vercel.app/case',
      '_blank' // <- This is what makes it open in a new window.
    );
  };
  const navigateToUrl1 = () => {
    const tl = gsap.timeline();
    tl.pause();
    tl.to('#network_effect', {
      backgroundColor: 'white',
      duration: 0.1,
    });

    tl.to('#network_effect img', {
      opacity: 1,
      transform: 'rotate(0deg) skewY(0deg)',
      top: '0%',
      left: '8%',
      height: '100%',
      width: '55.5%',
      duration: 0.5,
    });

    tl.play();

    setTimeout(() => {
      navigate('/network');
    }, 600);
  };
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#maintag',
        scroller: 'body',
        markers: false,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        ease: 'expoScale',
        pin: true,
      },
    });
    tl.to('#Layer_2', { opacity: 1, ease: 'expoScale' })
      .to('#Layer_3', {
        opacity: 0,
        ease: 'expoScale',
      })

      .to('#Layer_2', { scale: 0.19 })
      .to('#Layer_2', { x: '-46%', y: '-46%', ease: 'expo' })
      .to('#scrolle', { opacity: 0, ease: 'expoScale' });

    let tl2 = gsap.timeline();
    tl2.pause();

    tl2
      .to('#menu_text', { opacity: 0, duration: 0.1 })
      .to('#menuee .open', { display: 'none', opacity: 0, duration: 0.1 })
      .from('#menuee .close', { display: 'none', opacity: 0, duration: 0.1 })
      .to('#menuico', {
        x:
          window.innerWidth / 2.005 -
          document.querySelector('.my-icon').getBoundingClientRect().left,
        y:
          window.innerHeight / 2 -
          document.querySelector('.my-icon').getBoundingClientRect().top,
        duration: 0.4,
        ease: 'power1.inOut',
      })
      .to('.my-icon', {
        padding: '10px',
        borderRadius: '50%',
        boxShadow: '-20px 10px 200px 20px rgba(0, 0, 0, 1)',
      })
      // .to('#overlay-text:not(#nav_list)', {
      //   filter: 'blur(20px)',
      // })
      .to('#bluroverlay', {
        backgroundColor: '#000000d8',
      })
      .from('#overlay-text', {
        display: 'none',
      });

    var togg = false;
    document.querySelector('#menuee').addEventListener('click', () => {
      const rect = document.querySelector('.my-icon').getBoundingClientRect();
      if (togg) {
        tl2.reverse();
        togg = false;
      } else {
        tl2.play();
        togg = true;
      }
    });
  });
  useEffect(() => {
    function adjustFontSize() {
      // Get the window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate a new font size based on the window dimensions
      // Adjust the multiplier (0.02) to fit your needs
      const fontSize = Math.min(windowWidth, windowHeight) * 0.05;

      // Set the new font size for all h2 elements
      const headings = document.querySelectorAll('.navListItems');
      headings.forEach((heading) => {
        heading.style.fontSize = `${fontSize}px`;
      });
    }
    // Initial font size adjustment
    adjustFontSize();

    // Adjust font size on window resize
    window.addEventListener('resize', adjustFontSize);
  }, []);
  return (
    <div id='maintag'>
      <div id='menuee'>
        <RiMenu4Line size={32} className='my-icon open' id='menuico' />
        <RiCloseLine size={32} className='my-icon close' id='menuico' />
        <p id='menu_text'>menu</p>
      </div>
      <span id='bluroverlay'></span>
      <div id='overlay-text'>
        <div id='nav_list'>
          <h2 className='navListItems' onClick={navigateToUrl1}>
            NETWORK
          </h2>
          <h2 className='navListItems'>ENTITIES</h2>
          <h2 className='navListItems' onClick={navigateToUrl}>
            WORK
          </h2>
          <h2 className='navListItems'>PEOPLE</h2>
          <h2 className='navListItems'>SERVICES</h2>
        </div>
      </div>
      <div id='msl-overlay'>
        <svg
          id='Layer_2'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          viewBox='0 0 3840 2161'
          preserveAspectRatio='none'>
          <polygon
            className='cls-1'
            points='1785.65 1284.89 1677.58 1284.89 1677.58 1059.49 1572.27 1219.91 1466.96 1059.49 1466.96 1284.89 1358.89 1284.89 1358.89 876.19 1466.25 876.19 1572.28 1047.73 1678.31 876.19 1785.67 876.19 1785.67 1284.89 1785.65 1284.89'
          />
          <path
            className='cls-1'
            d='M1988.35,1291.66c-64.99,0-126.5-20.83-173.95-62.58l52.97-80.74c33.12,28.31,78.87,51.19,121.52,51.19,31.51,0,47.89-14.87,47.89-32.14,0-26.89-37.21-32.05-94.9-48.78-54.75-15.85-112.08-46.29-112.08-118.93s59.64-130.33,153.3-130.33c60.89,0,111.72,19.32,152.05,49.5l-48.7,78.87c-30.8-24.3-65.34-36.14-97.3-36.14s-47.8,12.28-47.8,27.77c0,22.88,26.53,29.02,87.06,46.56,59.29,17.18,119.02,45.22,119.02,119.29,0,82.35-64.27,136.47-159.08,136.47h0Z'
          />
          <polygon
            className='cls-1'
            points='2480.28 1284.89 2183.12 1284.89 2183.12 876.19 2291.28 876.19 2291.28 1190.26 2480.27 1190.26 2480.27 1284.89 2480.28 1284.89'
          />
        </svg>
        <svg
          id='Layer_3'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          viewBox='0 0 3840 2161'
          preserveAspectRatio='none'>
          {/*  */}
          <path
            className='cls-2'
            d='M-50.38-55.91v2272.81h3940.76V-55.91H-50.38ZM1785.65,1284.89h-108.07v-225.4l-105.31,160.42-105.31-160.42v225.4h-108.07v-408.7h107.36l106.03,171.54,106.03-171.54h107.36v408.7ZM1988.35,1291.66c-64.99,0-126.5-20.83-173.95-62.58l52.97-80.74c33.12,28.31,78.87,51.19,121.52,51.19,31.51,0,47.89-14.87,47.89-32.14,0-26.89-37.21-32.05-94.9-48.78-54.75-15.85-112.08-46.29-112.08-118.93s59.64-130.33,153.3-130.33c60.89,0,111.72,19.32,152.05,49.5l-48.7,78.87c-30.8-24.3-65.34-36.14-97.3-36.14s-47.8,12.28-47.8,27.77c0,22.88,26.53,29.02,87.06,46.56,59.29,17.18,119.02,45.22,119.02,119.29,0,82.35-64.27,136.47-159.08,136.47ZM2480.28,1284.89h-297.16v-408.7h108.16v314.07h188.99v94.63Z'></path>
        </svg>
        <div id='scrolle'>
          <img id='impact_img' src={impact} />
          <RiArrowDownDoubleLine id='scrollico' />
        </div>
      </div>
      <div className='video-container'>
        <video autoPlay loop muted>
          <source
            src='https://res.cloudinary.com/depykl2hm/video/upload/v1721040530/background_new_vbiit6.webm'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id='banner'>
        <img
          id='brands1'
          src='https://res.cloudinary.com/depykl2hm/image/upload/v1721040528/brands1_q6lkxt.gif'
        />
        <img
          id='brands2'
          src='https://res.cloudinary.com/depykl2hm/image/upload/v1721040527/brands2_mghaso.gif'
        />
      </div>
      <div id='network-container'>
        <video autoPlay loop muted onClick={navigateToUrl1}>
          <source
            src='https://res.cloudinary.com/depykl2hm/video/upload/v1721040526/network_ql8jcd.webm'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        <span onClick={navigateToUrl1}></span>
        <h1 className='neonText' onClick={navigateToUrl1}>
          &nbsp;network
        </h1>
        <div id='network_effect'>
          <img src={network_image} />
        </div>
      </div>
      <div id='entities-container'>
        <h1 className='entityText'>entities</h1>
        <span id='textBack'></span>
        <span id='entBackTwo'></span>
        <span id='entBackThree'></span>
        <span id='entBackThree_'></span>
        <img className='ent_image' id='organicsvg' src={organic_svg} />
        <img className='ent_image' id='mslsvg' src={msl_svg} />
        <img className='ent_image' id='pcasvg' src={pca_svg} />
        <img className='ent_image' id='twesvg' src={twe_svg} />
      </div>
      <div id='work-container'>
        <div id='work'>
          <div id='workoverone' onClick={navigateToUrl}></div>
          <div id='workovertwo' onClick={navigateToUrl}></div>
          <div id='workoverthree' onClick={navigateToUrl}></div>
          <div id='workoverfour' onClick={navigateToUrl}></div>
        </div>
      </div>
    </div>
  );
};

export default Home_;
