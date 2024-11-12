import React from 'react';
import {
  Box,
  Heading,
  Grid,
  GridItem,
  VStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://via.placeholder.com/300?text=Electronics',
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://via.placeholder.com/300?text=Fashion',
  },
  {
    id: 3,
    name: 'Home Appliances',
    image: 'https://via.placeholder.com/300?text=Home+Appliances',
  },
  {
    id: 4,
    name: 'Beauty Products',
    image: 'https://via.placeholder.com/300?text=Beauty+Products',
  },
  {
    id: 5,
    name: 'Sports',
    image: 'https://via.placeholder.com/300?text=Sports',
  },
  {
    id: 6,
    name: 'Toys & Games',
    image: 'https://via.placeholder.com/300?text=Toys+%26+Games',
  },
];

const Categories = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const headingColor = '#9245FF';

  return (
    <Box maxW="1200px" mx="auto" py={16} px={6}>
      <Heading textAlign="center" mb={10} color={headingColor}>
        Shop by Category
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={8}
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <VStack
              bg={bg}
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
            >
              <Image src={category.image} alt={category.name} />
              <Text fontWeight="bold" fontSize="lg" py={4}>
                {category.name}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
