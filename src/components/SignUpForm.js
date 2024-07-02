import React from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Input, Stack, Text, Heading, Flex } from '@chakra-ui/react';
import { FaMicrosoft } from 'react-icons/fa';

const SignUpForm = () => {
  return (
    <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading color="#528745" as="h1" size="lg" mb={6}>Sign Up</Heading>
      <Text mb={2}>Enter your credentials to continue</Text>
      <Button   leftIcon={<img src={`${process.env.PUBLIC_URL}/office-365-icon.svg`} alt="Microsoft Icon" style={{ height: '1.2em', marginRight: '8px' }} />}
        colorScheme="gray"
        mb={4}
        width="full"
      >Sign up with Microsoft 365</Button>
      <Text  boxShadow=""textAlign="center" mb={4}>OR</Text>
      <Stack spacing={4}>
        <Flex gap={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="First Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Last Name" />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Email Address" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
          <Text color="gray.500" fontSize="sm">Weak</Text>
        </FormControl>
        <Checkbox>Agree with Terms & Conditions</Checkbox>
        <Button colorScheme="green"  width="full">Sign Up</Button>
      </Stack>
      <Text mt={4} textAlign="center">Already have an account?</Text>
    </Box>
  );
};

export default SignUpForm;
