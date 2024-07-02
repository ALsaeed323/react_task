import { extendTheme } from '@chakra-ui/react';

// Define your custom color
const customColors = {
  primary: "#528745",
};

// Extend the theme with custom colors and config
const theme = extendTheme({
  colors: {
    ...customColors,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
