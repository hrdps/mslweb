import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box h={'95vh'} display='flex' alignItems='center' justifyContent='center' bg="#232931">
      <Flex flexDirection="column" alignItems="center">
        <Text
          className="lalezar-regular"
          fontSize={{ base: "48px", lg: "110px" }}
          lineHeight={0.75}
        >
          Perfection is
        </Text>
        <Text
          className="lalezar-regular"
          fontSize={{ base: "48px", lg: "110px" }}
          lineHeight={0.75}
        >
          Not a Myth
        </Text>
        <Text
          className="lalezar-regular"
          fontSize={{ base: "48px", lg: "110px" }}
          color="#4ECCA3"
          lineHeight={0.75}
        >
          Check Our
        </Text>
        <Text
          className="lalezar-regular"
          fontSize={{ base: "48px", lg: "110px" }}
          color="#4ECCA3"
          lineHeight={0.75}
        >
          Work
        </Text>
      </Flex>
    </Box>
  );
};

export default Hero;
