import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Illustration = () => {
  return (
    <Box p={8} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">Lorem ipsum dolor sit amet, consectetur</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur</Text>
      <Image src={`${process.env.PUBLIC_URL}/img-a2-grid.72f620d8 1.png`} alt="Illustration" mb={4} />
    </Box>
  );
};

export default Illustration;
