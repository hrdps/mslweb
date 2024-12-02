import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box h="99vh" display="flex" alignItems="center" justifyContent="center" bg="#232931">
      <VStack spacing={4}>
        <Text className="lalezar-regular" fontSize={{ base: "50px", md: "85px" }} lineHeight={0.6} color="white">
          PRODUCT TIPS
        </Text>
        <Text className="lalezar-regular" fontSize={{ base: "50px", md: "85px" }} lineHeight={0.6} color="white">
          DESIGN & BUSINESS
        </Text>
        <Text className="lalezar-regular" fontSize={{ base: "50px", md: "85px" }} lineHeight={0.6} color="#4ECCA3">
          cre8 blog
        </Text>

        <Text
          mt={12}
          className="comfortaa-regular"
          textAlign="center"
          color="grey"
          fontSize={{ base: "16px", md: "20px" }}
          lineHeight={1}
        >
          You can call it an extra arm that supports you with insightful ideas <br /><br />
          about business, design, productivity, or even personal <br /><br />
          development for business people.
        </Text>
      </VStack>
    </Box>
  );
};

export default Hero;
