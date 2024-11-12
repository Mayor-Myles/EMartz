import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const inputBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonBg = '#9245FF';
  const hoverBg = '#b085ff';

  const handleSubscribe = () => {
    if (!email) {
      toast({
        title: 'Please enter an email address.',
        status: 'warning',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Subscribed successfully!',
      description: 'You will receive our latest updates and offers.',
      status: 'success',
      position: 'top',
      duration: 3000,
      isClosable: true,
    });
    setEmail('');
  };

  return (
    <Box maxW="800px" mx="auto" py={16} px={6} textAlign="center">
      <VStack spacing={4}>
        <Heading color={buttonBg}>Subscribe to Our Newsletter</Heading>
        <Text fontSize="lg" color={textColor}>
          Stay updated with our latest products and offers. No spam, we promise!
        </Text>

        <HStack spacing={2} w="full" maxW="500px">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg={inputBg}
            color={textColor}
            border="1px solid"
            borderColor="gray.300"
            _focus={{ borderColor: buttonBg }}
          />
          <Button
            bg={buttonBg}
            color="white"
            _hover={{ bg: hoverBg }}
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default NewsletterSubscription;
