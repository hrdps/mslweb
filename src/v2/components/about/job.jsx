import React from "react";
import { Box, Grid, Text, Link, Button, VStack } from "@chakra-ui/react";

const JobsSection = () => {
  const jobs = [
    { title: "Frontend Developer", location: "Remote" },
    { title: "UX Researcher", location: "Remote" },
    { title: "UI Designer", location: "London, UK" },
    { title: "Client Service Agent", location: "London, UK" },
  ];

  return (
    <Box bg="#fff" color="black" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }}>
      <Text fontSize={{ base: "50px", lg: "85px" }} color="#4ECCA3" className="lalezar-regular" textAlign="start" mb={8}>
        Job Openings
      </Text>

      <VStack spacing={6}>
        {jobs.map((job, index) => (
          <Grid key={index} templateColumns="2fr 1fr" gap={6} w="full" bg="white" color="#232931" borderRadius="md" py={8}>
            <Box>
              <Text fontSize={{ base: "30px", lg: "38px" }} className="lalezar-regular" lineHeight={1}>
                {job.title}
              </Text>
              <Text fontSize={{ base: "16px", lg: "20px" }} lineHeight={1}>
                {job.location}
              </Text>
            </Box>
            <Button as={Link} href="#" bg="none" border="5px solid black" borderRadius="full" className="lalezar-regular" size={{ base: "lg", lg: "xl" }}>
              Apply Now
            </Button>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
};

export default JobsSection;
