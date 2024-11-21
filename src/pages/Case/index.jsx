import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, VStack, Spinner } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import Carousel from '../../components/work/carousel';


const CaseStudy = () => {
  const { slug } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const apiToken = import.meta.env.VITE_API_TOKEN;

        const response = await fetch(`${apiUrl}/case-study?slug=${slug}`, {
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if data is an array and has at least one item
        setInfo(data[0] || null);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setError(error.message);
      }
    };

    fetchInfo();
  }, [slug]);

  if (error) {
    return (
      <Box p={4}>
        <Text>Error: {error}</Text>
      </Box>
    );
  }

  if (!info) {
    return (
      <Box p={4} display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="lg" />
      </Box>
    );
  }

  // Extracting specific parts of the content based on class names

  const parseContent = (content) => {
    const background = content.match(/<p class="background">([\s\S]*?)<\/p>/)?.[1];
    const video = content.match(/<figure class="wp-block-video video"><video[^>]*src="([^"]+)"/)?.[1];
    const objective = content.match(/<p class="objective">([\s\S]*?)<\/p>/)?.[1];
    const approach = content.match(/<p class="approach">([\s\S]*?)<\/p>/)?.[1];
    const impact = content.match(/<ul class="wp-block-list">([\s\S]*?)<\/ul>/)?.[1];

    return { background, video, objective, approach, impact };
  };

  const { background, video, objective, approach, impact } = parseContent(info.content.rendered);


  return (
    <Box>
      <Text p={4} className='bangers-regular' bgImage="url('http://mslindia.test/wp-content/uploads/2024/11/MSL-Creds_Graphic-Novel_Round-7-5.png')" bgSize="cover" color="white" fontSize={{ base: '28px', md: '52px', lg: '65px' }} >{info.title.rendered}</Text>


      <Box p={{ base: 2, md: 4 }}>
        {video && (
          <Box>
            <video style={{ "borderRadius": "28px" }} controls width={'100%'} src={video}></video>
          </Box>
        )}
      </Box>



      <Box px={{ base: 4, lg: 4, xl: 16 }} pt={4} pb={16}>

        <Box px={{ base: 4, lg: 4, xl: 16 }} pt={0}>
          {background && (
            // <Box>
            //   <Text pt={4} className='bangers-regular' color="black" fontSize="65px">
            //     Background
            //   </Text>

            //   <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
            //     {background}
            //   </Text>
            // </Box>

            <Box pt={4}>

              <Box
                bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167886/background/background.png')" // Update with your image path
                bgSize="contain"
                bgRepeat="no-repeat"
                p={16}
              >
                {/* <Text className="bangers-regular" color="white" position={'relative'} left={'1.5%'} fontSize="36px">
                  Background
                </Text> */}

              </Box>

              <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                {background}
              </Text>
            </Box>




          )}

          {objective && (
            // <Box>
            //   <Text pt={4} className='bangers-regular' color="black" fontSize="65px">
            //     Objective
            //   </Text>

            //   <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
            //     {objective}
            //   </Text>
            // </Box>


            <Box pt={4}>

              <Box
                bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167882/objective/objective.png')" // Update with your image path
                bgSize="contain"
                bgRepeat="no-repeat"
                p={16}
              >
                {/* <Text className="bangers-regular" color="white" position={'relative'} left={'3%'} fontSize="36px">
                  Objectives
                </Text> */}

              </Box>

              <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                {objective}
              </Text>


            </Box>


          )}


          {approach && (
            // <Box>
            //   <Text pt={4} className='bangers-regular' color="black" fontSize="65px">
            //     Approach
            //   </Text>

            //   <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
            //     {approach}
            //   </Text>
            // </Box>


            <Box pt={4}>

              <Box
                bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167875/approach/approach.png')" // Update with your image path
                bgSize="contain"
                bgRepeat="no-repeat"
                p={16}
              >
                {/* <Text className="bangers-regular" color="white" position={'relative'} left={'-1%'} fontSize="36px">
                  APPROACH & STRATEGY
                </Text> */}

              </Box>


              <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                {approach}
              </Text>


            </Box>


          )}

          {impact && (
            // <Box>
            //   <Text pt={4} className='bangers-regular' color="black" fontSize="65px">
            //     Impact
            //   </Text>

            //   <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
            //     <div dangerouslySetInnerHTML={{ __html: impact }} />
            //   </Text>
            // </Box>

            <Box pt={4}>

              <Box
                bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167879/impact/impact.png')" // Update with your image path
                bgSize="contain"
                bgRepeat="no-repeat"
                p={16}
              >
                {/* <Text className="bangers-regular" color="white" position={'relative'} left={'3.5%'} fontSize="36px">
  Impact
  </Text> */}

              </Box>


              <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                <div dangerouslySetInnerHTML={{ __html: impact }} />
              </Text>


            </Box>
          )}

        </Box>




        <Box px={{ base: 4, lg: 4, xl: 16 }} pt={4} pb={16}>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={8} display={'flex'} justifyContent={'center'}>
            {/* Left Column */}
            <VStack
              w={{ base: '100%', lg: '20%' }}
              spacing={6}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Box>
                <Text className='bangers-regular' fontSize={{ base: '65px', lg: '80px', xl: '130px' }} lineHeight={1} color="#FF8C5F">
                  48M+
                </Text>
                <Text fontSize={{ base: '24px', lg: '36px', xl: '48px' }} className='bangers-regular' lineHeight={0.7}>Impressions</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: '65px', lg: '80px', xl: '130px' }} className='bangers-regular' lineHeight={1} color="#6692FF">
                  22M+
                </Text>
                <Text fontSize={{ base: '24px', lg: '36', xl: '48px' }} className='bangers-regular' lineHeight={0.7}>Reach</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: '65px', lg: '80px', xl: '130px' }} className='bangers-regular' lineHeight={1} color="#082992">
                  6.4M+
                </Text>
                <Text fontSize={{ base: '24px', lg: '36', xl: '48px' }} className='bangers-regular' lineHeight={0.7}>Video Views</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: '65px', lg: '80px', xl: '130px' }} className='bangers-regular' lineHeight={1} color="#F4A772">
                  9.1M+
                </Text>
                <Text fontSize={{ base: '24px', lg: '36', xl: '48px' }} className='bangers-regular' lineHeight={0.7}>Engagement</Text>
              </Box>
            </VStack>

            {/* Right Column */}
            <Box w={{ base: '100%', lg: '60%' }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Carousel />
            </Box>
          </Flex>
        </Box>












      </Box>




    </Box>
  );
};

export default CaseStudy;







