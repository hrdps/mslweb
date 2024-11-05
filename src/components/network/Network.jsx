import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Location from './Location.jsx';

const Network = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  useGSAP(() => {
    gsap.to('#msl_scramble', {
      zIndex: 30,
      duration: 2,
      text: '8 Locations, 20 Offices, 1k+ Employees.',
      scrambleText: {
        chars: '0123456789!@#$%^&*()',
        revealDelay: 0.1,
        speed: 0.3,
      },
    });
    gsap.to('#img_white', {
      delay: 0.5,
      x: '-10%',
      duration: 0.5,
    });
  });

  return (
    <div id='network_main'>
      <Location />
      <div id='map_network'></div>
      <div id='network_links'>
        <div id='msl_scramble'></div>
      </div>
      <div id='go_back'></div>
    </div>
  );
};

export default Network;
