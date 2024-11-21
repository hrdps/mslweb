import { Container, Grid, Heading, Stack, VStack } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import './Layout.css';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';

const Header = () => {
  const navigate = useNavigate();
  const [isPlay, setIsPlay] = useState(0);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, CSSPlugin);
  const imgRef = useRef(null);
  const totalFrames = 17;
  const getImagePath = (frame) => `./assets/menuAni/menu${frame}.png`;

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.pause();
    tl.to(
      { frame: 1 },
      {
        frame: totalFrames,
        duration: 0.5,
        roundProps: 'frame',
        ease: 'none',
        onUpdate: function () {
          if (imgRef.current) {
            imgRef.current.src = getImagePath(this.targets()[0].frame);
          }
        },
      }
    );
    tl.to(
      '#bgoverlay',
      {
        display: 'flex',
        backgroundColor: '#000000cc',
        zIndex: 998,
        duration: 0.5,
        backdropFilter: 'blur(5px)',
        ease: 'slow',
      },
      0
    );
    tl.from(
      '#navItem_container',
      {
        transform: 'translateY(100vh)',
        duration: 0.5,
        ease: 'power',
      },
      0
    );
    tl.to('body', { overflow: 'hidden' }, 0);
    var togg = false;
    document.querySelector('#menuIco').addEventListener('click', () => {
      if (togg) {
        tl.reverse();
      } else {
        tl.play();
      }
      togg = !togg;
    });
  });
  return (
    <>
      <Grid templateColumns={['1fr 1fr', '1fr 1fr']} marginTop={'-100px'}>
        <Container
          maxW={'full'}
          id='headerone'
          alignItems={'center'}
          justifyContent={'start'}
          display={'flex'}>
          <img
            onClick={() => {
              navigate('/');
            }}
            src='./assets/msl-logo-white.png'
            id='menuImg'
          />
        </Container>
        <Container
          maxW={'full'}
          id='headertwo'
          alignItems={'center'}
          justifyContent={'end'}
          display={'flex'}>
          <img ref={imgRef} src={getImagePath(1)} id='menuIco' />
        </Container>
      </Grid>
      <VStack
        justifyContent={'end'}
        display={'none'}
        id='bgoverlay'
        h={'100vh'}
        w={'100vw'}
        position={'fixed'}
        top={'0'}
        bgColor={'#000000'}
        zIndex={'-998'}>
        <Grid
          id='navItem_container'
          templateColumns={['1fr 1fr 1fr 1fr 1fr']}
          color={'white'}
          marginBottom={'2%'}
          gap={['2', '3', '6', '5', '16']}>
          <Heading
            className='navItems'
            fontSize={['lg', 'xl', '3xl', '5xl', '6xl']}
            alignItems={'center'}>
            SERVICES
          </Heading>
          <Heading
            className='navItems'
            fontSize={['lg', 'xl', '3xl', '5xl', '6xl']}
            alignItems={'center'}>
            PEOPLE
          </Heading>
          <Heading
            className='navItems'
            fontSize={['lg', 'xl', '3xl', '5xl', '6xl']}
            alignItems={'center'}>
            WORK
          </Heading>
          <Heading
            className='navItems'
            fontSize={['lg', 'xl', '3xl', '5xl', '6xl']}
            alignItems={'center'}>
            NETWORK&nbsp;&nbsp;
          </Heading>
          <Heading
            className='navItems'
            fontSize={['lg', 'xl', '3xl', '5xl', '6xl']}
            alignItems={'center'}>
            ENTITIES
          </Heading>
        </Grid>
      </VStack>
    </>
  );
};

export default Header;
