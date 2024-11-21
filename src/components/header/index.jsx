import React from 'react';
import { Box, Image, Flex, Text, Spacer, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box 
      position="sticky" // Make the header fixed at the top of the page
      top={0} // Align at the top
      left={0} // Align to the left
      right={0} // Align to the right
      zIndex={10} // Set a high zIndex to ensure it sits above the content
      bg="transparent" // Make the background transparent
      p={4} // Add some padding to the header
    >
      <Flex align="center" justify="space-between">
      <Image
        src="http://mslindia.test/wp-content/uploads/2024/11/logo-1.png"
      />
        <Spacer />
        <Menu>
          <MenuButton as={Button} color="black" _hover={{ bg: 'gray.600' }}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Header;
