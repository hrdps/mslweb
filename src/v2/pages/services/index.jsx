import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Hero from '../../components/entity/hero';
import Service from '../../components/services/service';
import ClientsSection from '../../components/common/ClientsSection';
import Contact from '../../components/common/contact';
import Footer from '../../components/common/footer';
import Header from '../../../components/layout/Header';

const ServicePage = () => {
  return (
    <>
      <Header />
      <Box>
        <Hero />
        <Container
          maxW='container.xxl'
          py={{ base: 8, lg: 16 }}
          px={{ base: 4, lg: 48 }}
          bg='white'>
          <Service />
        </Container>
        {/* <Container maxW="container.xxl" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }} bg='white'>
        <ClientsSection />
      </Container> */}
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default ServicePage;
