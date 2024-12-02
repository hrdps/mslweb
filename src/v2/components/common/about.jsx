import React from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";

const About = () => {
  return (
    <Box h={'90vh'} bg="#232931" color="white" py={16} display='flex' alignItems='center' justifyContent='center'>
      <VStack spacing={4}>
        <Text fontSize="85px" className="lalezar-regular" lineHeight={0.6}>
        Awwward winning
        </Text>
        <Text fontSize="85px" className="lalezar-regular" lineHeight={0.6}>
        london-based product
        </Text>
        <Text fontSize="85px" className="lalezar-regular" color='#4ECCA3' lineHeight={0.6}>
        design studio.
        </Text>

        <Text py={12} className="comfortaa-regular" textAlign={'center'} color={'grey'} fontSize="20px" lineHeight={1}>
        But I must explain to you how all this mistaken idea of denouncing  <br /><br />
        pleasure and praising pain was born and I will give you a complete<br /><br />
        account of the system.<br /><br />
      </Text>

        

        <Button className="lalezar-regular" fontSize={'22px'} textTransform={'uppercase'} size="lg" px={14} py={8} colorScheme="teal" bg="none" border="4px solid white" borderRadius="full">
          more about us
        </Button>
      </VStack>
    </Box>
  );
};

export default About;
