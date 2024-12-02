import React from "react";
import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";

const BlogPost = ({ title, description, imgSrc, postLink }) => {
  return (
    <Flex
      bg="#EEEEEE"
      color="black"
      mb={{ base: "10", md: "20" }}
      direction={{ base: "column", md: "row" }}
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        flex="1"
        p={{ base: "10", md: "20" }}
        pr={{ md: 6 }}
        mb={{ base: 4, md: 0 }}
        display="flex"
        flexDirection="column"
        alignItems={{ base: "flex-start", md: "flex-start" }}
        justifyContent="center"
        textAlign={{ base: "flex-start", md: "left" }}
        w="full"
      >
        <Link
          href={postLink}
          fontSize={{ base: "40px", md: "85px" }}
          className="lalezar-regular"
          color="black"
          lineHeight={0.8}
        >
          {title}
        </Link>
        <Text mt={2} fontSize={{ base: "18px", md: "22px" }} color="grey">
          {description}
        </Text>
      </Box>
      <Image
        src={imgSrc}
        alt={title}
        boxSize={{ base: "100%", md: "500px" }}
        objectFit="cover"
        mt={{ base: 4, md: 0 }}
      />
    </Flex>
  );
};

export default BlogPost;
