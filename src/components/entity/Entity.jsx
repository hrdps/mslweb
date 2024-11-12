import { Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Entity = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Stack gap={0} overflowX={'hidden'}>
      <VStack h={'100vh'} bg={'blue.200'}></VStack>
      <VStack h={'100vh'} bg={'red.200'} id='gsaptrigger'></VStack>
      <VStack h={'100vh'} bg={'yellow.100'}></VStack>
    </Stack>
  );
};

export default Entity;
