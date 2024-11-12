import React from 'react';
import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  HStack,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    review: 'Amazing service and fast delivery! Highly recommended.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'John Smith',
    review: 'The product quality exceeded my expectations. Will shop again!',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    review: 'Great discounts and easy checkout process. Love it!',
    avatar: 'https://via.placeholder.com/150',
  },
];

const Testimonials = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const accentColor = '#9245FF';

  return (
    <Box maxW="1200px" mx="auto" py={16} px={6}>
      <Heading textAlign="center" mb={10} color={accentColor}>
        What Our Customers Say
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={8}
      >
        {testimonials.map((testimonial) => (
          <GridItem key={testimonial.id}>
            <VStack
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
              p={6}
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Avatar size="xl" src={testimonial.avatar} />
              <Text fontWeight="bold" fontSize="lg" color={textColor}>
                {testimonial.name}
              </Text>
              <Text fontSize="md" color={textColor}>
                {testimonial.review}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
