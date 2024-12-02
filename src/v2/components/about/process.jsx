import React from "react";
import { Box, Grid, Text, VStack } from "@chakra-ui/react";

const Process = () => {
  const processes = [
    { title: "Discovery", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the    " },
    { title: "Planning", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the    " },
    { title: "Prototype", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the" },
    { title: "Design", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the" },
    { title: "Development", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the" },
    { title: "Delivery", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the" },
  ];

  return (
    <Box bg="#fff" color="black" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }}>
      <VStack spacing={6} align="start">
        <Text className="lalezar-regular" fontSize={{ base: "50px", lg: "85px" }} color="#4ECCA3" lineHeight={1}>
          Our Process
        </Text>

        <Text mb={12} className="comfortaa-regular" fontSize={{ base: "16px", lg: "22px" }}>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} mt={8}>
        {processes.map((process, index) => (
          <Box key={index} bg="white" color="#232931" py={{ base: "0", lg: "6" }} borderRadius="md" textAlign="left">
            <Text className="lalezar-regular" textTransform="capitalize" fontSize={{ base: "30px", lg: "38px" }}>
              {process.title}
            </Text>
            <Text mt={2} className="comfortaa-regular" fontSize={{ base: "16px", lg: "22px" }}>
              {process.description}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Process;
