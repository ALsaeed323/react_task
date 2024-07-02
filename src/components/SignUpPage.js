import React from 'react';
import { Flex } from '@chakra-ui/react';
import SignUpForm from './SignUpForm';
import Illustration from './Illustration';

const SignUpPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex width="60%" boxShadow="2xl" borderRadius="lg" overflow="hidden">
        <SignUpForm />
        <Illustration />
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
