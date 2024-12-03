import { Img, VStack } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
  return (
    <VStack
      justifyContent={'center'}
      alignContent={'center'}
      minH={'100vh'}
      zIndex={999}>
      <Img src='/assets/mslLoader.webp' w={'18%'}></Img>
    </VStack>
  );
};

export default Loading;
