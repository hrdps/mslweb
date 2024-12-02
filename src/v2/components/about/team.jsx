import React, { useState, useEffect } from "react";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const Team = () => {
  const teamPhotos = [
    "https://picsum.photos/1080/723",
    "https://picsum.photos/1080/723",
    "https://picsum.photos/1080/723",
    "https://picsum.photos/1080/723",
    "https://picsum.photos/1080/723",
    "https://picsum.photos/1080/723",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Box
        h="70vh"
        bg="#393E46"
        color="white"
        py={{ base: 8, lg: 16 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={{ base: "50px", lg: "110px" }} className="lalezar-regular" mb={4} lineHeight={0.6}>
          Behind every
        </Text>
        <Text fontSize={{ base: "50px", lg: "110px" }} className="lalezar-regular" mb={4} lineHeight={0.6}>
          great project,
        </Text>
        <Text fontSize={{ base: "50px", lg: "110px" }} className="lalezar-regular" mb={8} lineHeight={0.6}>
          CRE8 team!
        </Text>


      </Box>

      {/* <Box
        position="relative"
        top="-50px"
        width="100%"
        overflow="hidden"
      >
        <Grid
          templateColumns={`repeat(${teamPhotos.length}, 100%)`}
          transform={`translateX(-${currentIndex * 100}%)`}
          transition="transform 0.5s ease-in-out"
          width="100%"
          height="100%"
        >
          {teamPhotos.map((photo, index) => (
            <Box key={index} width="100%">
              <Image
                src={photo}
                alt={`Team member ${index}`}
                width="30%"
                height="200px"
                borderRadius="full"
                objectFit="cover"
              />
            </Box>
          ))}
        </Grid>
      </Box> */}

    </Box>
  );
};

export default Team;
