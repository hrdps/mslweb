import React from 'react';
import { Box, Text, VStack, Flex, Spacer } from '@chakra-ui/react';

const Metrics = ({ impressions, reach, views, engagement }) => {
    return (
        <VStack spacing={8}>
            <Flex gap={8} w="100%" justify="center">
                <Box textAlign="center">
                    <Text
                        fontSize={{ base: '65px', lg: '80px', xl: '130px' }}
                        className="bangers-regular"
                        lineHeight={1}
                        color="#082992"
                    >
                        {views}
                    </Text>
                    <Text
                        fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                        className="bangers-regular"
                        lineHeight={0.7}
                    >
                        Video Views
                    </Text>
                </Box>
                <Spacer />
                <Box textAlign="center">
                    <Text
                        fontSize={{ base: '65px', lg: '80px', xl: '130px' }}
                        className="bangers-regular"
                        lineHeight={1}
                        color="#F4A772"
                    >
                        {engagement}
                    </Text>
                    <Text
                        fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                        className="bangers-regular"
                        lineHeight={0.7}
                    >
                        Engagement
                    </Text>
                </Box>
            </Flex>

            <Flex gap={8} w="100%" justify="center">
                <Box textAlign="center">
                    <Text
                        fontSize={{ base: '65px', lg: '80px', xl: '130px' }}
                        className="bangers-regular"
                        lineHeight={1}
                        color="#FF8C5F"
                    >
                        {impressions}
                    </Text>
                    <Text
                        fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                        className="bangers-regular"
                        lineHeight={0.7}
                    >
                        Impressions
                    </Text>
                </Box>
                <Spacer />
                <Box textAlign="center">
                    <Text
                        fontSize={{ base: '65px', lg: '80px', xl: '130px' }}
                        className="bangers-regular"
                        lineHeight={1}
                        color="#6692FF"
                    >
                        {reach}
                    </Text>
                    <Text
                        fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                        className="bangers-regular"
                        lineHeight={0.7}
                    >
                        Reach
                    </Text>
                </Box>
            </Flex>
        </VStack>
    );
};

export default Metrics;