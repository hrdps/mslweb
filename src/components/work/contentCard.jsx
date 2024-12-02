import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const ContentCard = ({ metrics }) => {

    const decodeHtml = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    return (
        <Box
            mx="auto"
            height="100%" // Ensures this takes up full height
            width="100%"
            borderRadius="8px"
            p={{ base: 8, lg: 8, xl: 12 }}
            bg="#6692FF"
        >
            <Center height="100%" flexDirection="column" alignItems="left">
                <Text
                    className='bangers-regular'
                    color="white"
                    fontSize={{ base: 24, md: 28, lg: 30, xl: 36 }}
                    lineHeight={1.1}
                    textAlign="left"
                >
                    A few quantifiable Metrics of note
                </Text>

                <Text
                    mt={{ base: 8, lg: 8, xl: 12 }}
                    fontSize={{ base: 16, lg: 20, xl: 24 }}
                    fontFamily="Inter"
                    color='white'
                    lineHeight={1.3}
                    textAlign="left"
                >
                    <span dangerouslySetInnerHTML={{ __html: decodeHtml(metrics) }} />
                </Text>
            </Center>
        </Box>
    );
};

export default ContentCard;
