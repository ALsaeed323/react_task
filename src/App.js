import React from 'react';
import { ChakraProvider, ColorModeScript, Box, Image } from '@chakra-ui/react';
import SignUpPage from './components/SignUpPage';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {/* ColorModeScript should be within ChakraProvider */}
      <Box display="flex" alignItems="center" paddingBottom={0} mb={8} boxShadow="none">
        <Image src={`${process.env.PUBLIC_URL}/layout_set_logo 1.png`} alt="New Logo" height="50px" />
      </Box>
      <SignUpPage padding={0} />
    </ChakraProvider>
  );
}

export default App;
