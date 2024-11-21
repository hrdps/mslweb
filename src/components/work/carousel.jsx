import React, { useState } from 'react';
import { Box, Image, Text, HStack, Button } from '@chakra-ui/react';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        'https://picsum.photos/200?random=1',
        'https://picsum.photos/200?random=2',
        'https://picsum.photos/200?random=3',
        'https://picsum.photos/200?random=4',
    ];

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <Box mx="auto" width={'600px'} border="2px solid #0015B3" borderRadius="8px" p="4" bg="#082992">
            <Image
                src={slides[activeSlide]}
                alt={`Slide ${activeSlide}`}
                mb="2"
                borderRadius="4px"
                objectFit="cover"
                w="100%"
            />
            <Text color="white" fontSize="sm" textAlign="left" mb="4">
                Social media post
            </Text>
            <HStack justifyContent="center">
                {slides.map((_, index) => (
                    <Button
                        key={index}
                        size="24px"
                        onClick={() => handleSlideChange(index)}
                        bg={index === activeSlide ? '#FF7F50' : 'white'}
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
