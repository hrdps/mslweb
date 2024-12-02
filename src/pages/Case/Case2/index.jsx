import React from 'react'
import { Box, Text, Flex, VStack, Container, Center } from '@chakra-ui/react';
import Carousel from '../../../components/work/carousel';
import ContentCard from '../../../components/work/contentCard';


function Case2({ background, video, objective, approach, impact, impressions, reach, views, engagement, intro, metrics, entity, sector, type, linksArray }) {

    const decodeHtml = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    return (
        <>
            <Box p={{ base: 2, md: 4 }}>
                {video && (
                    <Box>
                        {/* <video style={{ borderRadius: "28px" }} controls width={'100%'} src={video}></video> */}
                        <iframe src={video} width={'100%'} height={'720px'}></iframe>
                    </Box>
                )}
            </Box>

            <Container maxW='10xl' px={{ base: 8, lg: 12, xl: 20 }} py={6}>
                <Box>
                    <Box>
                        {intro && (
                            <Box pt={4}>
                                <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                                    <span dangerouslySetInnerHTML={{ __html: decodeHtml(intro) }} />
                                </Text>
                            </Box>
                        )}


                        <Box p={10} pt={8} pb={16}>
                            <Flex
                                // pl={{ base: 0, lg: 12, xl: 20 }}
                                // pr={{ base: 0, lg: 12, xl: 20 }}
                                direction={{ base: 'column', lg: 'row' }}
                                gap={8}
                                display="flex"
                                justifyContent="center"
                                alignItems="stretch" // Ensures both children stretch to the same height
                                height="100%" // Ensures the flex container fills its parent
                            >
                                <Box
                                    w={{ base: '100%', lg: '50%' }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <ContentCard metrics={metrics} />
                                </Box>

                                <Box
                                    h="100%" // Ensure the Carousel box takes 100% height
                                    w={{ base: '100%', lg: '50%' }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Carousel linksArray={linksArray} />
                                </Box>
                            </Flex>
                        </Box>



                        <Text
                            p={4}
                            className="bangers-regular"
                            color="#082992"
                            fontSize={{ base: '28px', md: '36px', lg: '64px' }}
                            lineHeight={1}
                            textAlign={'Center'}
                        >
                            Listening to a Million+ Conversations per week
                        </Text>

                        {objective && (
                            <Box pt={4}>
                                <Box
                                    bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167882/objective/objective.png')" // Update with your image path
                                    bgSize="contain"
                                    bgRepeat="no-repeat"
                                    p={16}
                                ></Box>
                                <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                                    <span dangerouslySetInnerHTML={{ __html: decodeHtml(objective) }} />
                                </Text>
                            </Box>
                        )}

                        {impact && (
                            <Box pt={4}>
                                <Box
                                    bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167879/impact/impact.png')" // Update with your image path
                                    bgSize="contain"
                                    bgRepeat="no-repeat"
                                    p={16}
                                ></Box>
                                <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                                    <span dangerouslySetInnerHTML={{ __html: decodeHtml(impact) }} />
                                </Text>
                            </Box>
                        )}
                    </Box>


                </Box>
            </Container>
        </>
    )
}

export default Case2