import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Badge,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';

const TopNavbar = ({ cartItemCount = 0 }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'white');
  const iconColor = useColorModeValue('#9245ff', '#9245ff');

  return (
    <Box borderRadius="0em 0em 2em 2em" bg={bgColor} px={4} position="sticky" top={0} zIndex={10}>
      <Flex h={20} alignItems="center" justifyContent="space-between">
        {/* Logo / Brand */}
        <Link href="/" fontWeight="bold" fontSize="2xl">
          Emart
        </Link>

        {/* Search Bar (Hidden on Mobile) */}
        <HStack display={{ base: 'none', md: 'flex' }} spacing={6}>
          <InputGroup>
            <Input placeholder="Search products..." variant="outline" size="lg" />
            <InputRightElement><SearchIcon color="gray.500" boxSize={6} />
            </InputRightElement>
          </InputGroup>
        </HStack>

        {/* Icons and Actions */}
        <HStack spacing={6}>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            size="md"
            fontSize="xl"
            onClick={toggleColorMode}
            variant="ghost"
            color={iconColor}
            borderColor={iconColor}
          />

          <Box position="relative">
            <IconButton
              aria-label="Cart"
              icon={<FiShoppingCart />}
              size="md"
              fontSize="xl"
              variant=""
              color={iconColor}
              borderColor={iconColor}
            />
            {cartItemCount >= 0 && (
              <Badge
                position="absolute"
                top="-2px"
                right="-2px"
                color={iconColor}
                borderRadius="full"
                fontSize="0.8em"
              >
                {cartItemCount}
              </Badge>
            )}
          </Box>

          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="outline"
            color={iconColor}
            borderColor={iconColor}
          />
        </HStack>
      </Flex>

      {/* Collapsible Links on Mobile */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg={bgColor}
          p={4}
          spacing={6}
          alignItems="start"
          display={{ md: 'none' }}
        >
          <Link href="/products" fontSize="lg" color={textColor}>
            Products
          </Link>
          <Link href="/about" fontSize="lg" color={textColor}>
            About Us
          </Link>
          <Link href="/contact" fontSize="lg" color={textColor}>
            Contact
          </Link>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default TopNavbar;
