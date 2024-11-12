import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const linkColor = '#9245FF';

  return (
    <Box bg={bg} py={8}>
      <VStack spacing={4} align="start" maxW="1200px" mx="auto" px={6}>
        <Text fontWeight="bold" fontSize="lg">
          Emart
        </Text>
        <Text color={textColor}>
          © {new Date().getFullYear()} Emart. All rights reserved.
        </Text>

        <HStack spacing={4}>
          <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline' }}>
            About Us
          </Link>
          <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline' }}>
            Contact
          </Link>
          <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline' }}>
            Terms of Service
          </Link>
          <Link href="#" color={linkColor} _hover={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </HStack>

        <HStack spacing={4}>
          <Link href="#" isExternal>
            <FaFacebookF size="24" color={linkColor} />
          </Link>
          <Link href="#" isExternal>
            <FaTwitter size="24" color={linkColor} />
          </Link>
          <Link href="#" isExternal>
            <FaInstagram size="24" color={linkColor} />
          </Link>
          <Link href="#" isExternal>
            <FaLinkedinIn size="24" color={linkColor} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;