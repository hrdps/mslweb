import React from 'react'
import { Box, Text, Flex, VStack, Container } from '@chakra-ui/react';
import Carousel from '../../../components/work/carousel';
import Metrics from '../../../components/work/metrics';



function Case1({ background, video, objective, approach, impact, impressions, reach, views, engagement, intro, metrics, entity, sector, type, linksArray }) {

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
                        <iframe src={video} width={'100%'} height={'720px'}></iframe>
                        {/* <video style={{ borderRadius: "28px" }} controls width={'100%'} src={video}></video> */}
                    </Box>
                )}
            </Box>

            <Container maxW='10xl' px={{ base: 8, lg: 12, xl: 20 }} py={6}>
                <Box>
                    <Box>
                        {background && (
                            <Box pt={4}>
                                <Box
                                    bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167886/background/background.png')" // Update with your image path
                                    bgSize="contain"
                                    bgRepeat="no-repeat"
                                    p={16}
                                ></Box>
                                <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                                    <span dangerouslySetInnerHTML={{ __html: decodeHtml(background) }} />
                                </Text>
                            </Box>
                        )}

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

                        {approach && (
                            <Box pt={4}>
                                <Box
                                    bgImage="url('https://res.cloudinary.com/dsphyolrg/images/v1732167875/approach/approach.png')"
                                    bgSize="contain"
                                    bgRepeat="no-repeat"
                                    p={16}
                                ></Box>
                                <Text p={{ base: 0, lg: 10 }} pt={{ base: 4, lg: 4 }} fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                                    <span dangerouslySetInnerHTML={{ __html: decodeHtml(approach) }} />
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

                    <Box px={{ base: 0, lg: 0, xl: 0 }} pt={4} pb={16}>

                        <Flex pl={{ base: 0, lg: 0, xl: 0 }} pr={{ base: 0, lg: 0, xl: 0 }} direction={{ base: 'column', lg: 'row' }} gap={8} display={'flex'} justifyContent={'center'}>
                            <Box h={'100%'} w={{ base: '100%', lg: '50%' }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Carousel linksArray={linksArray} />
                            </Box>
                            <Box w={{ base: '100%', lg: '50%' }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Metrics impressions={impressions} reach={reach} views={views} engagement={engagement} />
                            </Box>


                        </Flex>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Case1