import React from "react";
import { Box, Text, Link, HStack, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      h="100vh"
      bg="#232931"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyItems="center"
      justifyContent="center"
      py={8}
    >
      <Text className="lalezar-regular" color="#4ECCA3" fontSize={{ base: "40px", md: "85px" }} lineHeight={0.8}>
        100% Satisfaction.
      </Text>
      <Text className="lalezar-regular" color="#4ECCA3" fontSize={{ base: "40px", md: "85px" }} lineHeight={0.8}>
        Let’s Create
      </Text>

      <Text mt={12} className="comfortaa-regular" textAlign="center" color="grey" fontSize={{ base: "16px", md: "20px" }} lineHeight={1}>
        We’ll take your business to the next level, with our proven <br /><br />
        strategies, latest technologies and friendly creatives that <br /><br />
        will work to produce the best outcome possible.
      </Text>

      <HStack mt={20} spacing={24} justify="center" align="start" wrap="wrap">
        <VStack align="start" spacing={0}>
          <Text color="#777A80" className="lalezar-regular" textTransform="capitalize" fontSize={{ base: "20px", md: "26px" }}>
            Call us
          </Text>
          <Text className="lalezar-regular" textTransform="lowercase" color="#fff" fontSize={{ base: "30px", md: "77px" }}>
            +91 38093888
          </Text>
        </VStack>

        <VStack align="start" spacing={0}>
          <Text color="#777A80" className="lalezar-regular" textTransform="capitalize" fontSize={{ base: "20px", md: "26px" }}>
            E-mail
          </Text>

          <Link className="lalezar-regular" textTransform="lowercase" href="mailto:hello@cre8.com" color="#fff" fontSize={{ base: "30px", md: "77px" }}>
            hello@cre8.com
          </Link>

          <Box>
            <HStack spacing={4} wrap="wrap">
              <Link className="lalezar-regular" textTransform="capitalize" href="#" color="#fff" fontSize="18px">
                Dribbble
              </Link>
              <Link className="lalezar-regular" textTransform="capitalize" href="#" color="#fff" fontSize="18px">
                Instagram
              </Link>
              <Link className="lalezar-regular" textTransform="capitalize" href="#" color="#fff" fontSize="18px">
                Twitter
              </Link>
              <Link className="lalezar-regular" textTransform="capitalize" href="#" color="#fff" fontSize="18px">
                Facebook
              </Link>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
