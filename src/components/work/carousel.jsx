import React, { useState } from 'react';
import { Box, Image, Text, HStack, Button } from '@chakra-ui/react';

const Carousel = ({ linksArray }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <Box
            // maxW="800px" 
            w={'100%'}
            mx="auto"
            height="100%" // Ensure the carousel stretches to full height
            borderRadius="8px"
            p="4"
            bg="#082992"
        >
            <Image
                src={linksArray[activeIndex]}
                alt={`Slide ${activeIndex}`}
                mb="4"
                borderRadius="4px"
                objectFit="cover"
                w="100%"
            />
            <Text color="white" fontSize="24px" textAlign="left" mb="4">
                Social media post
            </Text>
            <HStack justifyContent="center" spacing={2}>
                {linksArray.map((_, index) => (
                    <Button
                        key={index}
                        size="xs"
                        onClick={() => handleSlideChange(index)}
                        bg={index === activeIndex ? '#FF7F50' : 'white'}
                        borderRadius="full"
                        w="10px"
                        h="10px"
                        _hover={{ bg: '#FF7F50' }}
                    />
                ))}
            </HStack>
        </Box>
    );
};

export default Carousel;
