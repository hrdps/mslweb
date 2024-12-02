import React from "react";
import { Box, Grid, Container } from "@chakra-ui/react";
import Hero from "../../components/work/hero";
import ProjectCard from "../../components/work/projectcard";
import ClientsSection from "../../components/common/ClientsSection";
import Footer from "../../components/common/footer";
import Contact from "../../components/common/contact";
import About from "../../components/common/about";

const Work = () => {
  const projects = [
    {
      img: "https://picsum.photos/1080/720",
      title: "Hubble eye lenses branding",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/721",
      title: "UIUX Design for travel agency",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/722",
      title: "CoinView App development",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/723",
      title: "Hubble package design",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/720",
      title: "Hubble eye lenses branding",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/721",
      title: "UIUX Design for travel agency",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/722",
      title: "CoinView App development",
      link: "project.html",
    },
    {
      img: "https://picsum.photos/1080/723",
      title: "Hubble package design",
      link: "project.html",
    },
  ];

  return (
    <Box bg="#232931" color="white" fontFamily="Comfortaa, cursive">
      <Hero />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={0}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            link={project.link}
          />
        ))}
      </Grid>
      <About />
      <Container maxW="container.xxl" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }} bg='white'>
        <ClientsSection />
      </Container>
      <Contact />
      <Footer />
    </Box>
  );
};

export default Work;
