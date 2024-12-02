import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, VStack, Spinner, Container } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import Carousel from '../../components/work/carousel';
import { RiArrowLeftLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import Case1 from '../../pages/Case/Case1';
import Case2 from '../../pages/Case/Case2';


const CaseStudy = () => {
  const { slug } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/work');
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const apiToken = import.meta.env.VITE_API_TOKEN;

        const response = await fetch(`${apiUrl}/case-study?slug=${slug}`, {
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if data is an array and has at least one item
        setInfo(data[0] || null);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setError(error.message);
      }
    };

    fetchInfo();
  }, [slug]);

  if (error) {
    return (
      <Box p={4}>
        <Text>Error: {error}</Text>
      </Box>
    );
  }

  if (!info) {
    return (
      <Box p={4} display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="lg" />
      </Box>
    );
  }


  const parseContent = (content) => {
    const background = content.background;
    const video = content.video;
    const objective = content.objectives;
    const approach = content.approach;
    const impact = content.impact;
    const impressions = content.impressions;
    const reach = content.reach;
    const views = content.video_views;
    const engagement = content.engagement;
    const intro = content.intro;
    const metrics = content.quantifiable_metrics;
    const entity = content.entity;
    const sector = content.sector;
    const type = content.type;
    const social_links = content.social_links;

    const linksArray = social_links.split('\r\n').map(link => link.trim());


    return { background, video, objective, approach, impact, impressions, reach, views, engagement, intro, metrics, entity, sector, type, linksArray };
  };

  const { background, video, objective, approach, impact, impressions, reach, views, engagement, intro, metrics, entity, sector, type, social_links, linksArray } = parseContent(info.acf);


  return (
    <Box>

      <Box>
        <Text
          p={4}
          className="bangers-regular"
          bgImage="url('http://mslindia.test/wp-content/uploads/2024/11/MSL-Creds_Graphic-Novel_Round-7-5.png')"
          bgSize="cover"
          color="white"
          fontSize={{ base: '28px', md: '52px', lg: '65px' }}
          lineHeight={1}
        >
          <Flex align="center" gap={2}>
            <RiArrowLeftLine cursor='pointer' onClick={handleClick} />
            {info.title.rendered}
          </Flex>
        </Text>
      </Box>

      {metrics === "" ? (
        <Case1 background={background} video={video} objective={objective} approach={approach} impact={impact} impressions={impressions} reach={reach} views={views} engagement={engagement} intro={intro} metrics={metrics} entity={entity} sector={sector} type={type} linksArray={linksArray} />
      ) : (
        <Case2 background={background} video={video} objective={objective} approach={approach} impact={impact} impressions={impressions} reach={reach} views={views} engagement={engagement} intro={intro} metrics={metrics} entity={entity} sector={sector} type={type} linksArray={linksArray} />
      )}


    </Box>
  );
};

export default CaseStudy;
