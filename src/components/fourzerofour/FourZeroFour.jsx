import { Button, Img, VStack } from '@chakra-ui/react';
import React from 'react';
import './FourZeroFour.css';
import Header from '../layout/Header';
import { useNavigate } from 'react-router-dom';

const FourZeroFour = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <VStack
        id='fzf'
        h={'100vh'}
        w={'100vw'}
        alignItems={'center'}
        justifyContent={'center'}>
        <VStack
          pos={'absolute'}
          top={0}
          h={'110vh'}
          w={'100vw'}
          bgColor={'#000000ac'}
          zIndex={1}></VStack>
        <Img
          src='./assets/terminal404.png'
          w={['80%', '80%', '80%', '80%', '50%']}
          id='terminal'
          zIndex={909}
        />
        <Button
          onClick={() => {
            navigate('/');
          }}
          color='#00ff44'
          variant='line'
          zIndex={999}
          id='fzf_btn'>
          Go back to Home →
        </Button>
      </VStack>
    </>
  );
};

export default FourZeroFour;
