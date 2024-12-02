import React from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box h="75vh" bg="#393E46" color="white" py={16} display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Text fontSize={{ base: "50px", md: "85px" }} className="lalezar-regular" lineHeight={0.6}>
          Have a project
        </Text>
        <Text fontSize={{ base: "50px", md: "85px" }} className="lalezar-regular" lineHeight={0.6}>
          for us?
        </Text>

        <Text
          py={12}
          className="comfortaa-regular"
          textAlign="center"
          color="grey"
          fontSize={{ base: "16px", md: "20px" }}
          lineHeight={1}
        >
          Contact us and we’ll send you the brief form to fill. <br /><br />
          Then we’ll contact you within 24 hours. <br /><br />
        </Text>

        <Button
          className="lalezar-regular"
          fontSize={{ base: "18px", md: "22px" }}
          textTransform="uppercase"
          size="lg"
          px={14}
          py={8}
          colorScheme="teal"
          bg="#393E46"
          border="4px solid white"
          borderRadius="full"
        >
          Let’s CRE8
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
