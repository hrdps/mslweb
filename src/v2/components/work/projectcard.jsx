import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";

const ProjectCard = ({ img, title, link }) => {
  return (
    <Link href={link} _focus={{ outline: "none" }}>
      <Box
        position="relative"
        overflow="hidden"
        _hover={{
          cursor: "pointer",
          "& .overlay": {
            opacity: 0.8,
            transform: "scale(1)",
          },
          "& .image": {
            transform: "scale(1.05)",
          },
        }}
        transition="all 0.4s ease"
      >
        <Image
          src={img}
          alt={title}
          objectFit="cover"
          width="100%"
          height={{ base: "300px", lg: "600px" }}
          transition="transform 0.4s ease"
          zIndex="1"
          className="image"
        />

        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          opacity="0"
          zIndex="0"
          transform="scale(0.9)"
          transition="all 0.4s ease"
          className="overlay"
        />

        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p={{ base: 2, lg: 4 }}
          textAlign="center"
          zIndex="2"
        >
          <Text
            className="lalezar-regular"
            fontWeight={"bold"}
            color="white"
            fontSize={{ base: "16px", lg: "20px" }}
          >
            View This Project
          </Text>
          <Text
            className="comfortaa-regular"
            fontSize={{ base: "14px", lg: "19px" }}
            color="white"
          >
            {title}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectCard;
