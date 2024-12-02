import React from "react";
import Hero from "../../components/about/hero";
import ProcessSection from "../../components/about/process";
import TeamSection from "../../components/about/team";
import JobsSection from "../../components/about/job";
import ClientsSection from "../../components/common/ClientsSection";
import ContactSection from "../../components/common/contact";
import Footer from "../../components/common/footer";
import { Container } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Container maxW="container.xxl" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }}>
        <ProcessSection />
      </Container>
      <TeamSection />
      <Container maxW="container.xxl" pt={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }} bg="white">
        <JobsSection />
      </Container>
      <Container maxW="container.xxl" py={{ base: 8, lg: 16 }} px={{ base: 4, lg: 24 }} bg="white">
        <ClientsSection />
      </Container>
      <ContactSection />
      <Footer />
    </>
  );
};

export default AboutPage;
