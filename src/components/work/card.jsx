import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";


const CaseCard = ({ title, imageUrl, category, slug }) => {
  return (
    <Link to={`case-study/${slug}`}>
          <Box
      className="card"
      cursor="pointer"
      position="relative"
      // maxW="md"
      borderRadius="20px"
      overflow="hidden"
      boxShadow="lg"
      // height="300px"
      width="100%"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
    // _hover={{
    //   transform: "scale(1.05)",
    //   boxShadow: "xl",
    // }}
    >
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        w="100%"
        h="100%"
        transition="transform 0.3s ease"
      // _hover={{ transform: "scale(1.1)" }}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.500" // Darkened overlay
        transition="background 0.3s ease"
        _hover={{ bg: "blackAlpha.700" }}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        p={6}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Box>
          <Text
            className='bangers-regular'
            textAlign="center"
            color="white"
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight="normal"
          >
            {title}
            {/* {title} {category} {slug} */}
          </Text>
        </Box>
      </Box>
    </Box>
    </Link>
  );
};

export default CaseCard;
