import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../../components/entity/hero";
import BlogPost from "../../components/entity/blogpost";
import Contact from "../../components/common/contact";
import Footer from "../../components/common/footer";

const EntityPage = () => {
  const posts = [
    {
      title: "MSL",
      description: "MSL, part of Publicis Groupe, is a global leader in public relations and integrated communications. In India, MSL shines through its four powerhouse brands: MSL India, 20:20 MSL, Organic by MSL, and Publicis Consultants Asia (PCA). Known for its game-changing campaigns, MSL blends strategic thinking with creative innovation, giving clients the edge to stand out. MSL has been named Agency of the Year in India for seven years straight and is celebrated for its 2024 South Asia Consultancy of the Year by PRovoke Media SABRE Awards Asia Pacific, 2023 Campaign South Asia and Fulcrum Masters Consultancy wins, as well as the ET Kaleido Agency of the Year in 2024. Plus, with six ‘Great Place to Work’ awards, MSL fosters a workplace where creativity thrives.",
      imgSrc: "https://brandio.io/envato/cp/cre8/html/images/post1.png",
      postLink: "post.html",
    },
    {
      title: "20:20 MSL",
      description: "A business-driven communications consultancy, 20:20 MSL is focused on delivering integrated, creative programs through data-based insights, and driven by making a real impact on business through strategic communications in the digital age. As full-service communication and engagement consultancy, 20:20 MSL provides advisory, strategy and creative solutions both within corporate communications and integrated marketing communications.",
      imgSrc: "https://brandio.io/envato/cp/cre8/html/images/post2.png",
      postLink: "post.html",
    },
    {
      title: "Organic by MSL",
      description: "Organic by MSL is a creative powerhouse that blends art, code, and copy to tell stories that captivate, engage, and inspire. Our team of digital content strategists, user experience architects, programmers, media specialists, and social media experts work together to ensure that our content reaches the right audience at the right time, making a measurable impact on brand love, reputation, and sales.",
      imgSrc: "https://brandio.io/envato/cp/cre8/html/images/post4.png",
      postLink: "post.html",
    },
    {
      title: "PCA",
      description: "PCA specialises in advising Unicorns and start-ups on their engagement strategy. PCA brings together media relations, financial communication, public affairs, crisis management, change communication and employer branding, to deliver a comprehensive communication consulting service.",
      imgSrc: "https://brandio.io/envato/cp/cre8/html/images/post3.png",
      postLink: "post.html",
    },
  ];

  return (
    <Box>
      <Hero />
      <Container maxW={{ base: "full", md: "container.xxl" }} pt={20} px={{ base: 4, md: 32 }}>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
            imgSrc={post.imgSrc}
            postLink={post.postLink}
          />
        ))}
      </Container>
      <Contact />
      <Footer />
    </Box>
  );
};

export default EntityPage;
