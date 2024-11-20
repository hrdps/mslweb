import React, { useEffect, useState } from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import { useParams } from "react-router-dom";

const CaseStudy = () => {
  const { slug } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

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

  // Extracting specific parts of the content based on class names

  const parseContent = (content) => {
    const background = content.match(/<p class="background">([\s\S]*?)<\/p>/)?.[1];
    const video = content.match(/<figure class="wp-block-video video"><video[^>]*src="([^"]+)"/)?.[1];
    const objective = content.match(/<p class="objective">([\s\S]*?)<\/p>/)?.[1];
    const approach = content.match(/<p class="approach">([\s\S]*?)<\/p>/)?.[1];
    const impact = content.match(/<ul class="wp-block-list">([\s\S]*?)<\/ul>/)?.[1];

    return { background, video, objective, approach, impact };
  };

  const { background, video, objective, approach, impact } = parseContent(info.content.rendered);


  return (
    <Box>
      <Text p={4} className='bangers-regular' bgImage="url('http://mslindia.test/wp-content/uploads/2024/11/MSL-Creds_Graphic-Novel_Round-7-5.png')" bgSize="cover" color="white" fontSize="65px" >{info.title.rendered}</Text>

      <Box p={{ base: 8, md: 16 }}>

        <Box p={{ base: 8, md: 16 }}>
          {background && (
            <Text p={4} className='bangers-regular' bgImage={`url(${background})`} bgSize="cover" color="white" fontSize="65px">
              Background {background}
            </Text>
          )}

          {video && (
            <Box>
              <video controls src={video}></video>
            </Box>
          )}

          {objective && (
            <Box>
              <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                <strong>Objective:</strong> {objective}
              </Text>
            </Box>
          )}

          {approach && (
            <Box>
              <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                <strong>Approach:</strong> {approach}
              </Text>
            </Box>
          )}

          {impact && (
            <Box>
              <Text fontSize="24px" fontFamily="Inter" fontWeight="normal" lineHeight="1.1" color="#082992">
                <strong>Impact:</strong>
                <div dangerouslySetInnerHTML={{ __html: impact }} />
              </Text>
            </Box>
          )}
        </Box>

      </Box>
    </Box>
  );
};

export default CaseStudy;



