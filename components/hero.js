import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#9245FF" color="white" py={20} px={6}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        maxW="1200px"
        mx="auto"
      >
        {/* Text Section */}
        <VStack
          alignItems="start"
          spacing={6}
          mb={{ base: 10, md: 0 }}
          maxW={{ base: '100%', md: '50%' }}
        >
          <Heading as="h1" size="2xl" lineHeight="1.2">
            Discover Amazing Products on <br /> <span style={{ color: '#fff59d' }}>Emart</span>
          </Heading>
          <Text fontSize="lg">
            Get the best deals on your favorite products. Shop now and enjoy fast delivery, easy returns, and secure payments!
          </Text>
          <HStack spacing={4}>
            <Button
              size="lg"
              bg="white"
              color="#9245FF"
              _hover={{ bg: "#f3e5ff" }}
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              Learn More
            </Button>
          </HStack>
        </VStack>

        {/* Image Section */}
        <Box w={{ base: '100%', md: '50%' }} textAlign="center">
          <Image
            src="/cta.jpg"
            alt="Featured Product"
            borderRadius="lg"
            boxShadow="lg"
            maxW={isMobile ? '80%' : '100%'}
            mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;