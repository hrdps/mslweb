import React, { useEffect } from 'react';
import './Home.css';
import Video from '../../assets/background_new.webm';
import brands1 from '../../assets/brands1.gif';
import brands2 from '../../assets/brands2.gif';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import organic_svg from '../../assets/organic.png';
import pca_svg from '../../assets/pca-logo-white.png';
import msl_svg from '../../assets/msl-logo-white.png';
import twe_svg from '../../assets/2020-msl-logo-white.png';
import network from '../../assets/network.mov';
import { RiMenu4Line, RiCloseLine } from '@remixicon/react';

const Home_ = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const navigateToUrl = () => {
    window.location.href =
      'https://msl-git-main-reetiks-projects.vercel.app/case';
  };
  const navigateToUrl1 = () => {
    window.location.href =
      'https://msl-git-main-reetiks-projects.vercel.app/people';
  };
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#rain_',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 4,
        ease: 'expoScale',
        pin: true,
      },
    });
    tl.to('#Layer_2', { opacity: 1, ease: 'expoScale' })
      .to('#Layer_3', {
        opacity: 0,
        ease: 'expoScale',
      })

      .to('#Layer_2', { scale: 0.16 })
      .to('#Layer_2', { x: -950, y: -535, ease: 'expo' });

    let tl2 = gsap.timeline();
    tl2.pause();

    tl2
      .to('#menu_text', { opacity: 0, duration: 0.1 })
      .to('#menuee .open', { display: 'none', opacity: 0, duration: 0.1 })
      .from('#menuee .close', { display: 'none', opacity: 0, duration: 0.1 })
      .to('#menuico', {
        x:
          window.innerWidth / 2 -
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
      .to('#rain_:not(.my-icon)', {
        filter: 'blur(20px)',
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
  useEffect(() => {}, []);
  return (
    <div id='maintag'>
      <div id='menuee'>
        <RiMenu4Line size={32} className='my-icon open' id='menuico' />
        <RiCloseLine size={32} className='my-icon close' id='menuico' />
        <p id='menu_text'>MENU</p>
      </div>
      <div id='rain_'>
        <video loop autoplay='' muted>
          <source src={Video} type='video/webm' />
        </video>
        <svg
          id='Layer_2'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          viewBox='0 0 3840 2161'>
          <polygon
            class='cls-1'
            points='1785.65 1284.89 1677.58 1284.89 1677.58 1059.49 1572.27 1219.91 1466.96 1059.49 1466.96 1284.89 1358.89 1284.89 1358.89 876.19 1466.25 876.19 1572.28 1047.73 1678.31 876.19 1785.67 876.19 1785.67 1284.89 1785.65 1284.89'
          />
          <path
            class='cls-1'
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
          viewBox='0 0 3840 2161'>
          {/*  */}
          <path
            class='cls-2'
            d='M-50.38-55.91v2272.81h3940.76V-55.91H-50.38ZM1785.65,1284.89h-108.07v-225.4l-105.31,160.42-105.31-160.42v225.4h-108.07v-408.7h107.36l106.03,171.54,106.03-171.54h107.36v408.7ZM1988.35,1291.66c-64.99,0-126.5-20.83-173.95-62.58l52.97-80.74c33.12,28.31,78.87,51.19,121.52,51.19,31.51,0,47.89-14.87,47.89-32.14,0-26.89-37.21-32.05-94.9-48.78-54.75-15.85-112.08-46.29-112.08-118.93s59.64-130.33,153.3-130.33c60.89,0,111.72,19.32,152.05,49.5l-48.7,78.87c-30.8-24.3-65.34-36.14-97.3-36.14s-47.8,12.28-47.8,27.77c0,22.88,26.53,29.02,87.06,46.56,59.29,17.18,119.02,45.22,119.02,119.29,0,82.35-64.27,136.47-159.08,136.47ZM2480.28,1284.89h-297.16v-408.7h108.16v314.07h188.99v94.63Z'></path>
        </svg>
        <div id='work'>
          <div id='workoverone' onClick={navigateToUrl}></div>
          <div id='workovertwo' onClick={navigateToUrl}></div>
          <div id='workoverthree' onClick={navigateToUrl}></div>
          <div id='workoverfour' onClick={navigateToUrl}></div>
          <h2>WORK</h2>
        </div>
        <div id='clients'>
          <img id='clienttext' src={brands1} />
          <img id='brands' src={brands2} />
        </div>
        <div id='entities'>
          <h5 id='ent'>ENTI</h5>
          <h5 id='tities'>TIES</h5>
          <div id='entback1'></div>
          <div id='entback2'></div>
          <img className='ent_image' id='organicsvg' src={organic_svg} />
          <img className='ent_image' id='mslsvg' src={msl_svg} />
          <img className='ent_image' id='pcasvg' src={pca_svg} />
          <img className='ent_image' id='twesvg' src={twe_svg} />
        </div>
        <div id='netw' onClick={navigateToUrl1}>
          <video loop autoplay='true' muted>
            <source src={network} type='video/mp4' />
          </video>
          <div id='netpoly'>
            <h2>NETWORK</h2>
          </div>
        </div>
      </div>
      <div id='overlay-text'>
        <div id='nav_list'>
          <h2 onClick={navigateToUrl1}>NETWORK</h2>
          <h2>ENTITIES</h2>
          <h2 onClick={navigateToUrl}>WORK</h2>
          <h2>PEOPLE</h2>
          <h2>SERVICES</h2>
        </div>
      </div>
    </div>
  );
};

export default Home_;
