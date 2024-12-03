import { Img, VStack } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
  return (
    <VStack
      justifyContent={'center'}
      alignContent={'center'}
      minH={'100vh'}
      zIndex={999}>
      <Img src='https://res.cloudinary.com/depykl2hm/image/upload/v1733222092/mslLoader_jghdaj.webp' w={'15%'}></Img>
    </VStack>
  );
};

export default Loading;
