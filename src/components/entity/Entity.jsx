import { Text, Grid, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import './entity.css';
import Header from '../layout/Header';

const Entity = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, CSSPlugin);
  useGSAP(() => {
    const childTimeline = gsap.timeline();
    childTimeline
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset -40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 0px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset -40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 0px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset -40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 0px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset -40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 0px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      })
      .to('.entity_card_container, .entity_card_image', {
        boxShadow: 'inset 40px 50px 39px 0px rgba(255, 250, 200, 0.506)',
        duration: 5,
      });

    // Define the parent timeline with ScrollTrigger
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#gsaptrigger',
        scroller: 'body',
        markers: false, // Debug markers
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2, // Smooth scrolling effect
        pin: true, // Pin the trigger element
        ease: 'none', // Optional, controls easing
      },
    });

    // Parent timeline animation
    tl.to('#entity_scroll', {
      x: '-326vw', // Animate translateX with GSAP shorthand
      duration: 60, // Total duration for this section
    });

    // Add the child timeline to the parent timeline
    tl.add(childTimeline, 0); // Start the child timeline at the beginning of the parent timeline
  });
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Stack gap={0} overflowX={'hidden'}>
        <div id='scroll_div'>
          <Stack
            h={'100vh'}
            id='gsaptrigger'
            overflow={'scroll'}
            overflowX={'hidden'}>
            <Grid
              id='entity_scroll'
              templateColumns={['1fr', '2fr 2fr 2fr 2fr']}
              w={'400vw'}
              overflowX={'hidden'}>
              <VStack
                w={'100vw'}
                className='entity_div'
                id='entity_div_thr'
                justify='center'
                align='end'>
                <div className='entity_card_container'>
                  <div className='entity_card_image'>
                    <img src='./assets/msl-logo-white.png' />
                  </div>
                  <div className='entity_card_text'>
                    <Text p={10} color={'white'} fontSize='lg'>
                      <strong>MSL</strong>, part of Publicis Groupe, is a global
                      leader in public relations and integrated communications.
                      In India, MSL shines through its four powerhouse brands:
                      MSL India, 20:20 MSL, Organic by MSL, and Publicis
                      Consultants Asia (PCA). Known for its game-changing
                      campaigns, MSL blends strategic thinking with creative
                      innovation, giving clients the edge to stand out.
                    </Text>
                  </div>
                </div>
              </VStack>
              <VStack
                w={'100vw'}
                className='entity_div'
                id='entity_div_one'
                justify='center'
                align='end'>
                <div className='entity_card_container'>
                  <div className='entity_card_image'>
                    <img src='./assets/organic.png' />
                  </div>
                  <div className='entity_card_text'>
                    <Text p={10} color={'white'} fontSize='lg'>
                      <strong>Organic by MSL</strong> is a creative powerhouse
                      that blends art, code, and copy to tell stories that
                      captivate, engage, and inspire. Our team of digital
                      content strategists, user experience architects,
                      programmers, media specialists, and social media experts
                      work together to ensure that our content reaches the right
                      audience at the right time, making a measurable impact on
                      brand love, reputation, and sales.
                    </Text>
                  </div>
                </div>
              </VStack>
              <VStack
                w={'100vw'}
                className='entity_div'
                id='entity_div_two'
                justify='center'
                align='end'>
                <div className='entity_card_container'>
                  <div className='entity_card_image'>
                    <img src='./assets/2020-msl-logo-white.png' />
                  </div>
                  <div className='entity_card_text'>
                    <Text p={10} color={'white'} fontSize='lg'>
                      A business-driven communications consultancy,{' '}
                      <strong>20:20 MSL</strong> is focused on delivering
                      integrated, creative programs through data-based insights,
                      and driven by making a real impact on business through
                      strategic communications in the digital age. As
                      full-service communication and engagement consultancy,
                      20:20 MSL provides advisory, strategy and creative
                      solutions both within corporate communications and
                      integrated marketing communications.{' '}
                    </Text>
                  </div>
                </div>
              </VStack>
              <VStack
                w={'100vw'}
                className='entity_div'
                id='entity_div_fou'
                justify='center'
                align='end'>
                <div className='entity_card_container'>
                  <div className='entity_card_image'>
                    <img src='./assets/pca-logo-white.png' />
                  </div>
                  <div className='entity_card_text'>
                    <Text p={10} color={'white'} fontSize='lg'>
                      <strong>PCA</strong> specialises in advising Unicorns and
                      start-ups on their engagement strategy. PCA brings
                      together media relations, financial communication, public
                      affairs, crisis management, change communication and
                      employer branding, to deliver a comprehensive
                      communication consulting service.
                    </Text>
                  </div>
                </div>
              </VStack>
            </Grid>
          </Stack>
        </div>
        {/* <Stack h={'100vh'} bg={'yellow.100'}></Stack>
      <VStack h={'100vh'} bg={'blue.100'}></VStack>
      <VStack h={'100vh'} bg={'green.100'}></VStack> */}
      </Stack>
    </>
  );
};

export default Entity;
