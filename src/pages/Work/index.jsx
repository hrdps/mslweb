import React, { useEffect, useState, useRef } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Alert, AlertIcon, Spinner } from '@chakra-ui/react';
import Card from '../../components/work/card';

const MarqueeRow = ({ cards, isReverse }) => {
  const scrollRef = useRef(null);
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (isReverse) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }

    const scroll = () => {
      const scrollSpeed = 0.5;

      if (isReverse) {
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        } else {
          scrollContainer.scrollLeft -= scrollSpeed;
        }
      } else {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
    };

    let animation = setInterval(scroll, 2.5);

    const handleHover = () => {
      clearInterval(animation);
      animation = setInterval(scroll, 75);
    }
    const handleLeave = () => {
      clearInterval(animation);
      animation = setInterval(scroll, 2.5);
    };

    scrollContainer.addEventListener('mouseenter', handleHover);
    scrollContainer.addEventListener('mouseleave', handleLeave);

    return () => {
      clearInterval(animation);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleHover);
        scrollContainer.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [isReverse]);

  return (
    <Box
      ref={scrollRef}
      className="marquee-container"
      overflow="hidden"
      position="relative"
      w="100%"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        'msOverflowStyle': 'none'
      }}
    >
      <Box
        className="marquee-content"
        display="flex"
        position="relative"
      >
        {duplicatedCards.map((card, index) => (
          <Box
            key={index}
            px={6}
            w={{ base: '100%', md: 'calc(100% / 2)', lg: 'calc(100% / 2)', xl: 'calc(100% / 2.5)' }}
            flex="0 0 auto"
          >
            <Card title={card.title} imageUrl={card.imageUrl} category={card.category} slug={card.slug} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};


const Work = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const apiToken = import.meta.env.VITE_API_TOKEN;
        const postsPerPage = import.meta.env.VITE_POSTS_PER_PAGE;

        const response = await fetch(`${apiUrl}/case-study?per_page=${postsPerPage}`, {
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const formattedCards = await Promise.all(
          data.map(async (item) => ({
            title: item.title.rendered,
            imageUrl: item.featured_media
              ? await fetchMediaUrl(apiUrl, apiToken, item.featured_media)
              : 'https://picsum.photos/400/300',
            category: await fetchCategoryName(apiUrl, apiToken, item.categories[0]),
            slug: item.slug,
          }))
        );

        setCards(formattedCards);
        setFilteredCards(formattedCards);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'ALL') {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter(card => card.category === category);
      setFilteredCards(filtered);
    }
  };

  const tabData = [
    { label: 'ALL', category: 'ALL' },
    { label: 'MSL', category: 'MSL' },
    { label: 'PCA', category: 'PCA' },
    { label: 'ORGANIC', category: 'Organic' },
    { label: '2020', category: '2020' }
  ];

  const rows = [];
  for (let i = 0; i < filteredCards.length; i += 3) {
    rows.push(filteredCards.slice(i, i + 3));
  }

  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={8}
      bgAttachment="fixed"
      bgSize="cover"
      bgImage="url('http://mslindia.test/wp-content/uploads/2024/11/case-bg.png')"
    >
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" h="300px">
          <Spinner />
        </Box>
      ) : (
        <>
          <Tabs
            pt={16}
            variant="enclosed"
            defaultIndex={0}
            onChange={(index) => handleCategoryChange(tabData[index].category)}
          >
            <TabList borderBottom={0} justifyContent="center" gap={{ base: "11px", md: "22px" }}>
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  className='bangers-regular'
                  size='lg'
                  px={{ base: 4, md: 16 }}
                  py={{ base: 0, md: 1 }}
                  fontSize={{ base: "21px", md: "32px" }}
                  borderRadius={13}
                  _selected={{ bg: '#FF8C5F', color: 'black' }}
                  bg="white"
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {tabData.map((tab, index) => (
                <TabPanel key={index}>
                  {rows.map((row, rowIndex) => (
                    <Box key={rowIndex} mt={{ base: 8, md: 16 }}>
                      <MarqueeRow
                        cards={row}
                        isReverse={rowIndex % 2 !== 0}
                      />
                    </Box>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </>
      )}
    </Box>
  );
};

export default Work;

async function fetchMediaUrl(apiUrl, apiToken, mediaId) {
  try {
    const mediaResponse = await fetch(`${apiUrl}/media/${mediaId}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (mediaResponse.ok) {
      const mediaData = await mediaResponse.json();
      return mediaData.source_url || 'https://picsum.photos/400/300';
    }
  } catch (error) {
    console.error('Error fetching media:', error);
    return 'https://picsum.photos/400/300';
  }
}

async function fetchCategoryName(apiUrl, apiToken, categoryId) {
  try {
    const categoryResponse = await fetch(`${apiUrl}/categories/${categoryId}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (categoryResponse.ok) {
      const categoryData = await categoryResponse.json();
      return categoryData.name;
    }
  } catch (error) {
    console.error('Error fetching category:', error);
    return 'Unknown';
  }
}