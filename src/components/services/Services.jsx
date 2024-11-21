import { Text, VStack, Box, Button, ScaleFade } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import './Services.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';

const Services = () => {
  const [isOpen, setIsOpen] = useState([0, 0, 0, 0, 0]);
  const [isNone, setIsNone] = useState([0, 0, 0, 0, 0]);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, CSSPlugin);

  const openCollapse = (index) => {
    if (isOpen[index] === 1) {
      return;
    }
    setIsOpen([0, 0, 0, 0, 0]);
    setTimeout(() => {
      setIsNone([0, 0, 0, 0, 0]);
    }, 100);
    setTimeout(() => {
      const newState1 = [...isNone];
      newState1[index] = 1;
      setIsNone(newState1);
    }, 101);
    setTimeout(() => {
      const newState = [...isOpen];
      newState[index] = 1;
      setIsOpen(newState);
    }, 102);
  };

  useGSAP(() => {
    let lastProg = -1;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services_container',
        scroller: 'body',
        markers: false,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        pin: true,
        ease: 'rough',
        onUpdate: (self) => {
          const prog = Math.floor(self.progress * 4);
          if (prog !== lastProg) {
            lastProg = prog;
            openCollapse(prog);
          }
        },
      },
    });
  });

  return (
    <>
      <Header />
      <VStack
        h={'100vh'}
        w={'100%'}
        className='services_container'
        alignItems={'center'}
        justifyContent={'center'}
        lineHeight={1.2}>
        <Text className='services_text' fontSize={['4xl', '5xl', '7xl']}>
          Strategy & Insights
        </Text>
        <ScaleFade initialScale={0.9} in={isOpen[0]}>
          <Box
            id='servicesBoxOne'
            className={!isNone[0] ? 'dis_none' : 'dis_block'}
            p={['20px', '20px', '40px']}
            bg={'white'}
            border={'6px solid #6692FF'}
            rounded='xl'
            shadow='md'
            color={'black'}
            w={'60%'}
            fontSize={['md', 'md', '2xl']}>
            At MSL India, we turn insights into influence. Our expert team,
            powered by advanced research tools and data platforms, dives deep
            into consumer and industry trends to uncover the key insights that
            shape impactful strategies for our clients.
          </Box>
        </ScaleFade>
        <Text className='services_text' fontSize={['4xl', '5xl', '7xl']}>
          Digital & Social Media
        </Text>
        <ScaleFade initialScale={0.9} in={isOpen[1]}>
          <Box
            id='servicesBoxTwo'
            className={!isNone[1] ? 'dis_none' : 'dis_block'}
            p={['20px', '20px', '40px']}
            bg={'white'}
            border={'6px solid #6692FF'}
            rounded='xl'
            shadow='md'
            color={'black'}
            w={'60%'}
            fontSize={['md', 'md', '2xl']}>
            We craft digital experiences that resonate. From strategy and
            storytelling to media planning and execution, we blend creativity
            with tech—bringing together art, code, and copy to create campaigns
            that engage, connect, and inspire action.
          </Box>
        </ScaleFade>
        <Text className='services_text' fontSize={['4xl', '5xl', '7xl']}>
          Media & Crisis
        </Text>
        <ScaleFade initialScale={0.9} in={isOpen[2]}>
          <Box
            id='servicesBoxThr'
            p='40px'
            bg={'white'}
            border={'6px solid #6692FF'}
            rounded='xl'
            shadow='md'
            className={!isNone[2] ? 'dis_none' : 'dis_block'}
            color={'black'}
            w={'60%'}
            fontSize={['lg', 'xl', '2xl']}>
            When it comes to media relations, our seasoned professionals help
            you seize opportunities and shape a strong, consistent narrative. In
            times of crisis, our strategic approach ensures you’re prepared to
            protect your reputation and navigate challenges with confidence.
          </Box>
        </ScaleFade>
        <Text className='services_text' fontSize={['4xl', '5xl', '7xl']}>
          Policy & Regulation
        </Text>
        <ScaleFade initialScale={0.9} in={isOpen[3]}>
          <Box
            id='servicesBoxFou'
            p='40px'
            bg={'white'}
            border={'6px solid #6692FF'}
            rounded='xl'
            shadow='md'
            className={!isNone[3] ? 'dis_none' : 'dis_block'}
            color={'black'}
            w={'60%'}
            fontSize={['lg', 'xl', '2xl']}>
            No two public affairs challenges are the same. Our custom solutions
            are built on thorough research and analysis, designed to meet the
            specific needs of your business while navigating the complexities of
            policy and regulatory environments.
          </Box>
        </ScaleFade>
        <Text className='services_text' fontSize={['4xl', '5xl', '7xl']}>
          Content & Video
        </Text>
        <ScaleFade initialScale={0.9} in={isOpen[4]}>
          <Box
            id='servicesBoxFiv'
            p='40px'
            bg={'white'}
            border={'6px solid #6692FF'}
            rounded='xl'
            shadow='md'
            className={!isNone[4] ? 'dis_none' : 'dis_block'}
            color={'black'}
            w={'60%'}
            fontSize={['lg', 'xl', '2xl']}>
            Our in-house production studio combines editorial flair, artistic
            vision, and cutting-edge technology to produce powerful multimedia
            content. From videos to graphics, we deliver stories that captivate
            audiences across every platform and channel.
          </Box>
        </ScaleFade>
      </VStack>
    </>
  );
};

export default Services;
