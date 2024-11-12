import React from 'react';
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

const FeaturedProducts = () => {

  
  const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 89.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 39.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 29.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 79.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 6,
    name: '4K Monitor',
    price: 299.99,
    image: 'https://via.placeholder.com/200',
  },
];
  
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const priceColor = useColorModeValue('#9245FF', '#cbb4ff');

  return (
    <Box maxW="1200px" mx="auto" py={16} px={6}>
      <Heading textAlign="center" mb={10} color={priceColor}>
        Featured Products
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={8}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <VStack
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
              p={4}
              spacing={4}
              alignItems="start"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="md"
                objectFit="cover"
                maxH="200px"
                w="full"
              />
              <Text fontWeight="bold" fontSize="lg" color={textColor}>
                {product.name}
              </Text>
              <HStack justifyContent="space-between" w="full">
                <Text fontSize="xl" color={priceColor} fontWeight="bold">
                  ${product.price}
                </Text>
                <Button
                  size="sm"
                  bg="#9245FF"
                  color="white"
                  _hover={{ bg: '#cbb4ff' }}
                >
                  Add to Cart
                </Button>
              </HStack>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
