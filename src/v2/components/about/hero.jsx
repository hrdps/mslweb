import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box h="99vh" display="flex" alignItems="center" justifyContent="center" bg="#232931">
      <VStack spacing={4} textAlign={{ base: "center", lg: "left" }}>
        <Text className="lalezar-regular" fontSize={{ base: "50px", lg: "85px" }} lineHeight={0.6} color="white">
          Awwward winning
        </Text>
        <Text className="lalezar-regular" fontSize={{ base: "50px", lg: "85px" }} lineHeight={0.6} color="white">
          london-based product
        </Text>
        <Text className="lalezar-regular" fontSize={{ base: "50px", lg: "85px" }} lineHeight={0.6} color="#4ECCA3">
          design studio.
        </Text>

        <Text mt={8} className="comfortaa-regular" textAlign="center" color="grey" fontSize={{ base: "16px", lg: "20px" }} lineHeight={1}>
          But I must explain to you how all this mistaken idea of denouncing <br /><br />
          pleasure and praising pain was born and I will give you a complete <br /><br />
          account of the system.
        </Text>
      </VStack>
    </Box>
  );
};

export default Hero;
