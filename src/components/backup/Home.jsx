import React, { useEffect } from 'react';
import './Home.css';
import Logo from '../../assets/msl_re.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Video from '../../assets/background_new.webm';

const Home = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to('#Layer_1', {
      scale: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '#rain',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 0,
        ease: 'expoScale',
        pin: true,
      },
    });
  });
  useEffect(() => {}, []);
  return (
    <div id='rain'>
      <video loop autoplay='' muted>
        <source src={Video} type='video/mp4' />
      </video>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        viewBox='0 0 3840 2161'>
        <path
          class='cls-1'
          d='M-50.38-55.91v2272.81h3940.76V-55.91H-50.38ZM1785.65,1284.89h-108.07v-225.4l-105.31,160.42-105.31-160.42v225.4h-108.07v-408.7h107.36l106.03,171.54,106.03-171.54h107.36v408.7ZM1988.35,1291.66c-64.99,0-126.5-20.83-173.95-62.58l52.97-80.74c33.12,28.31,78.87,51.19,121.52,51.19,31.51,0,47.89-14.87,47.89-32.14,0-26.89-37.21-32.05-94.9-48.78-54.75-15.85-112.08-46.29-112.08-118.93s59.64-130.33,153.3-130.33c60.89,0,111.72,19.32,152.05,49.5l-48.7,78.87c-30.8-24.3-65.34-36.14-97.3-36.14s-47.8,12.28-47.8,27.77c0,22.88,26.53,29.02,87.06,46.56,59.29,17.18,119.02,45.22,119.02,119.29,0,82.35-64.27,136.47-159.08,136.47ZM2480.28,1284.89h-297.16v-408.7h108.16v314.07h188.99v94.63Z'></path>
      </svg>
    </div>
  );
};

export default Home;
