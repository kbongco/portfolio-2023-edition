import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#807F7F', // Use any color here
        color: 'white',
      },
      // You could also include styles for other elements like `a`, `p`, etc.
    },
  },
});

export default customTheme;