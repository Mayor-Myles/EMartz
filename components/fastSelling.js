import React from 'react';
import {
  Box,
  Heading,
  Grid,
  GridItem,
  VStack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const fastSelling = [
  {
    id: 1,
    name: 'Noise Cancelling Headphones',
    price: '$99.99',
    image: 'https://via.placeholder.com/300?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart TV 4K UHD',
    price: '$499.99',
    image: 'https://via.placeholder.com/300?text=Smart+TV',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    price: '$79.99',
    image: 'https://via.placeholder.com/300?text=Earbuds',
  },
  {
    id: 4,
    name: 'Fitness Tracker',
    price: '$59.99',
    image: 'https://via.placeholder.com/300?text=Fitness+Tracker',
  },
];

const FastSelling = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const buttonColor = '#9245FF';
  const buttonHover = '#b085ff';

  return (
    <Box maxW="1200px" mx="auto" py={16} px={6}>
      <Heading textAlign="center" mb={10} color={buttonColor}>
        Fast Selling
      </Heading>

      <Grid justify="center" align="center"
        templateColumns={{ base: '1fr 1fr', md: 'repeat(4, 1fr)' }}
        gap={8}
    
      >
        {fastSelling.map((product) => (
          <GridItem key={product.id} >
            <VStack
              bg={bg}
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
            >
              <Image src={product.image} alt={product.name} />
              <Box p={4} textAlign="center">
                <Text fontWeight="bold" fontSize="lg" mb={2}>
                  {product.name}
                </Text>
                <Text fontSize="md" color="gray.500">
                  {product.price}
                </Text>
                <Button
                  mt={4}
                  bg={buttonColor}
                  color="white"
                  _hover={{ bg: buttonHover }}
                >
                  Add to Cart
                </Button>
              </Box>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FastSelling;
