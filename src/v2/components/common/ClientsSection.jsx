import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ClientsSection = () => {
  const clientLogos = [
    "https://picsum.photos/1080/723",
    "https://picsum.photos/1080/722",
    "https://picsum.photos/1080/724",
    "https://picsum.photos/1080/725",
    "https://picsum.photos/1080/726",
    "https://picsum.photos/1080/727",
    "https://picsum.photos/1080/726",
    "https://picsum.photos/1080/727",
  ];

  return (
    <Box bg="white" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }}>
      <Flex direction="column" align="left" mb={12}>
        <Text
          className="lalezar-regular"
          fontSize={{ base: "32px", md: "48px", lg: "85px" }}
          lineHeight={0.75}
          color="black"
        >
          Delighting Our
        </Text>
        <Text
          className="lalezar-regular"
          fontSize={{ base: "32px", md: "48px", lg: "85px" }}
          lineHeight={0.75}
          color="black"
        >
          Clients is our
        </Text>
        <Text
          className="lalezar-regular"
          fontSize={{ base: "32px", md: "48px", lg: "85px" }}
          lineHeight={0.75}
          color="black"
        >
          mission.
        </Text>

        <Text mt={{ base: 6, lg: 12 }} className="comfortaa-regular" color={'black'} fontSize={{ base: "14px", lg: "20px" }} lineHeight={1}>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising <br /><br />
          pain was born and I will give you a complete
          account of the system. <br /><br />
        </Text>
      </Flex>
      <Flex flexWrap="wrap" justify="start" gap={{ base: 3, md: 4 }}>
        {clientLogos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Client ${index}`} maxH={{ base: "60px", lg: "100px" }} />
        ))}
      </Flex>
    </Box>
  );
};

export default ClientsSection;
