import { Text, VStack, Box, Grid, Divider } from '@chakra-ui/react';
import React from 'react';

const Service = () => {
  return (
    <>
      <Box bg="#fff" color="black" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }}>
        <VStack spacing={6} align="start">
          <Text
            className="comfortaa-regular"
            fontSize={{ base: '28px', lg: '36px' }}
            textTransform={'capitalize'}
            color="#4ECCA3"
            lineHeight={1.3}
          >
            We help different brands develop new digital products, optimize existing online services, by researching and defining value propositions, aesthetic and well-designed user interfaces
          </Text>
        </VStack>

        {/* Row 1 */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mt={8}>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: '30px', lg: '38px' }} />
          </Box>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: '16px', lg: '22px' }}>
              Using an extensive research base, we have learned to avoid many mistakes when communicating with the user. People don't like to think twice, they want the correct answers in a short time. The average duration of website evaluation is 8 seconds. We are short on time to call attention, so we use various triggers and tricks to keep the Customer on the website. By reading this text, you are confirming this statement.
            </Text>
          </Box>
        </Grid>
        <Divider my={6} borderColor="black.300" />

        {/* Row 2 */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mt={8}>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: '30px', lg: '38px' }}>
              Strategy & Insights
            </Text>
          </Box>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: '16px', lg: '22px' }}>
              At MSL India, we turn insights into influence. Our expert team, powered by advanced research tools and data platforms, dives deep into consumer and industry trends to uncover the key insights that shape impactful strategies for our clients.
            </Text>
          </Box>
        </Grid>
        <Divider my={6} borderColor="black.300" />

        {/* Row 3 */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mt={8}>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: '30px', lg: '38px' }}>
              Digital & Social Media
            </Text>
          </Box>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: '16px', lg: '22px' }}>
              We craft digital experiences that resonate. From strategy and storytelling to media planning and execution, we blend creativity with tech—bringing together art, code, and copy to create campaigns that engage, connect, and inspire action.
            </Text>
          </Box>
        </Grid>
        <Divider my={6} borderColor="black.300" />

        {/* Row 4 */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mt={8}>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: '30px', lg: '38px' }}>
              Media & Crisis
            </Text>
          </Box>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: '16px', lg: '22px' }}>
              When it comes to media relations, our seasoned professionals help you seize opportunities and shape a strong, consistent narrative. In times of crisis, our strategic approach ensures you’re prepared to protect your reputation and navigate challenges with confidence.
            </Text>
          </Box>
        </Grid>
        <Divider my={6} borderColor="black.300" />

        {/* Row 5 */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mt={8}>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: '30px', lg: '38px' }}>
              Policy & Regulation
            </Text>
          </Box>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: '16px', lg: '22px' }}>
              No two public affairs challenges are the same. Our custom solutions are built on thorough research and analysis, designed to meet the specific needs of your business while navigating the complexities of policy and regulatory environments.
            </Text>
          </Box>
        </Grid>
        <Divider my={6} borderColor="black.300" />

        {/* Row 6 */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mt={8}>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: '30px', lg: '38px' }}>
              Content & Video
            </Text>
          </Box>
          <Box bg="white" color="#232931" py={{ base: '0', lg: '6' }} borderRadius="md" textAlign="left">
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: '16px', lg: '22px' }}>
              Our in-house production studio combines editorial flair, artistic vision, and cutting-edge technology to produce powerful multimedia content. From videos to graphics, we deliver stories that captivate audiences across every platform and channel.
            </Text>
          </Box>
        </Grid>
        <Divider my={6} borderColor="black.300" />
      </Box>
    </>
  );
};

export default Service;
